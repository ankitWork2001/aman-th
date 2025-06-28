require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const { logger } = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const corsOptions = require('./config/corsOptions')
const connectDB = require('./config/dbConn')
const {logEvents} = require('./middleware/logger')
const PORT = process.env.PORT || 3500

connectDB();

app.use(logger)
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())
app.use(express.static('public'))
app.use('/', require('./routes/root'))
app.use('/api/auth', require('./routes/authRoutes'))
app.use('/api/user', require('./routes/userRoutes'))
app.use('/api/leaves', require('./routes/leaveRoutes'))
app.use('/api/attend', require('./routes/attendRoutes'))
app.use('/api/document', require('./routes/documentRoutes'))
app.use('/api/notify', require('./routes/notifyRoutes'))
app.use('/api/ongoingtask', require('./routes/ongoingtaskRoutes'))


app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' })
    } else {
        res.type('txt').send('404 Not Found')
    }
})

app.use(errorHandler)

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});










// require('dotenv').config()
// const express = require('express')
// const app = express()
// const path = require('path')
// const { logger } = require('./middleware/logger')
// const errorHandler = require('./middleware/errorHandler')
// const cookieParser = require('cookie-parser')
// const cors = require('cors')
// const corsOptions = require('./config/corsOptions')
// const connectDB = require('./config/dbConn')
// const {logEvents} = require('./middleware/logger')
// const PORT = process.env.PORT || 3500

// console.log(process.env.PORT_ENV)

// connectDB();

// app.use(logger)// create middleware
// app.use(cors(corsOptions))// browsers that restricts cross-origin HTTP requests.A web page can only make requests to the same origin (domain, protocol, and port) from which it was loaded.
// app.use(express.json())// build in middleware -> express.json()
// app.use(cookieParser())//This middleware is responsible for parsing cookies attached to the client request object and populating req.cookies with an object containing key-value pairs of the parsed cookies
// app.use(express.static('public'))
// //both is same app.use('/', express.static(path.join(__dirname, 'public')))
// // express.static is a built-in middleware function in Express that serves static files in a directory. It takes the root directory as an argument and returns a middleware function that can be mounted using the app.use() method.
// app.use('/', require('./routes/root'))
// app.use('/auth', require('./routes/authRoutes'))
// // app.use('/users', require('./routes/userRoutes'))
// // app.use('/notes', require('./routes/notesRoutes'))



// app.all('*', (req, res) => {
//     res.status(404)
//     if (req.accepts('html')) {
//         res.sendFile(path.join(__dirname, 'views', '404.html'))
//     } else if (req.accepts('json')) {
//         res.json({ message: '404 Not Found' })
//     } else {
//         res.type('txt').send('404 Not Found')
//     }
// })

// app.use(errorHandler)

// app.createServer(requestHandler).listen(PORT, () => {
//     try{
//         console.log(`Server running on port ${PORT}`)
//     }catch(err){
//         console.log(err)
//         logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'neonErrLog.log')
//     }
// });