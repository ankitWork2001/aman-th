const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

// @desc Login
// @route POST /api/auth/login
// @access Public
const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    const name = await User.findOne({ email }).exec()
    if (!name) {
        return res.status(401).json({ message: 'Unauthorized, email not found' })
    }

    const match = await bcrypt.compare(password, name.password)

    if (!match) return res.status(401).json({ message: 'Unauthorized,  wroung password' })

    const accessToken = jwt.sign(
        {
            "UserInfo": {
                "name": name.name,
                "email": name.email,
                "role": name.role
            }
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '1h' }
    )

    const refreshToken = jwt.sign(
        { "name": name.name },
        process.env.REFRESH_TOKEN_SECRET,
        { expiresIn: '7d' }
    )

    res.cookie('jwt', refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
        maxAge: 7 * 24 * 60 * 60 * 1000
    })

    res.status(201).json({ "accessToken":accessToken, "name":name})
})

// @desc Signup
// @route POST /api/auth/signup
// @access Public
const signup = asyncHandler(async (req, res) => {
    const {name, password, email, role, designation, department, joiningDate, phone, performance } = req.body

    if (!email || !password || !role || !name) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    const foundUser = await User.findOne({ email }).exec()
    if (foundUser) {
        return res.status(401).json({ message: 'Unauthorized, user already existed' })
    }

    const duplicate = await User.findOne({ name }).lean().exec()

    if (duplicate) {
        return res.status(409).json({ message: 'Duplicate username' })
    }

    // Hash password 
    const hashedPwd = await bcrypt.hash(password, 10)
    const user = await User.create({name, "password":hashedPwd, email, role, designation, department, joiningDate, phone, performance })

    if (user) {
        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "name": user.name,
                    "email": user.email,
                    "role": user.role
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '1h' }
        )

        const refreshToken = jwt.sign(
            { "name": user.name },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: '7d' }
        )

        res.cookie('jwt', refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })

        console.log("new name created", user)

        res.status(201).json({ "accessToken":accessToken, message: `New name ${name} created`})
    } else {
        res.status(400).json({ message: 'Invalid user data received' })
    }
})

// @desc Refresh
// @route GET /api/auth/refresh
// @access Public - because access token has expired
const refresh = (req, res) => {
    console.log(req.cookies)
    const cookies = req.cookies

    if (!cookies?.jwt) return res.status(401).json({ message: 'Unauthorized' })

    const refreshToken = cookies.jwt

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        asyncHandler(async (err, decoded) => {
            if (err) return res.status(403).json({ message: 'Forbidden' })

            const user = await User.findOne({ name: decoded.name }).exec()

            if (!user) return res.status(401).json({ message: 'Unauthorized, refresh token name not found' })

            const accessToken = jwt.sign(
                {
                    "UserInfo": {
                        "name": user.name,
                        "email": user.email,
                        "role": user.role
                    }
                },
                process.env.ACCESS_TOKEN_SECRET,
                { expiresIn: '15m' }
            )

            res.json({ accessToken })
        })
    )
}

// @desc Logout
// @route GET /api/auth/logout
// @access Public - just to clear cookie if exists
const logout = (req, res) => {
    const cookies = req.cookies
    if (!cookies?.jwt) return res.sendStatus(204) //No content
    res.clearCookie('jwt', { httpOnly: true, sameSite: 'None', secure: true })
    res.json({ message: 'Cookie cleared' })
}

module.exports = {
    signup,
    login,
    refresh,
    logout
}