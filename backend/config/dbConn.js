require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI)
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectDB











// const mongoose = require('mongoose');

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.DATABASE_URI, {
//             useUnifiedTopology: true,
//             useNewUrlParser: true
//         });
//     } catch (err) {
//         console.error(err);
//     }
// }

// module.exports = connectDB













// const { neonConfig, neon } = require('@neondatabase/serverless');

// // Enable global fetch (required in Node.js for Neon)
// const fetch = require('node-fetch');
// neonConfig.fetch = fetch;

// require("dotenv").config();

// const sql = neon(process.env.DATABASE_URL);

// const connectDB = async () => {
//   try {
//     const result = await sql`SELECT version()`;
//     console.log("Connected! PostgreSQL version:", result[0].version);
//   } catch (err) {
//     console.error("Database connection error:", err);
//   }
// };

// module.exports = connectDB;









// require("dotenv").config();
// const { neon } = require("@neondatabase/serverless/node");

// if (!process.env.DATABASE_URL) {
//   throw new Error("DATABASE_URL is not defined in the environment variables.");
// }

// const sql = neon(process.env.DATABASE_URL);

// const connectDB = async () => {
//   try {
//     const result = await sql`SELECT version()`;
//     const { version } = result[0];
//     console.log("Connected to DB. PostgreSQL Version:", version);
//   } catch (err) {
//     console.error("Database connection error:", err);
//     process.exit(1); // Exit if DB fails to connect
//   }
// };

// module.exports = connectDB;















// require("dotenv").config();
// const { neon } = require("@neondatabase/serverless");

// if (!process.env.DATABASE_URL) {
//   throw new Error("DATABASE_URL is not defined in the environment variables.");
// }

// const sql = neon(process.env.DATABASE_URL);

// const connectDB = async (req, res) => {
//   try {
//     const result = await sql`SELECT version()`;
//     const { version } = result[0];

//     console.log("PostgreSQL Version:", version);

//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end(version);
//   } catch (err) {
//     console.error("Database connection error:", err);

//     res.writeHead(500, { "Content-Type": "text/plain" });
//     res.end("Internal Server Error");
//   }
// };

// module.exports = connectDB;














// require("dotenv").config();
// const { neon } = require("@neondatabase/serverless");

// const sql = neon(process.env.DATABASE_URL);

// const connectDB = async (req, res) => {    
//     try {
//         const result = await sql`SELECT version()`;
//         const { version } = result[0];
//         console.log(version)
//         res.writeHead(200, { "Content-Type": "text/plain" });
//         res.end(version);
//     } catch (err) {
//         console.log(err)
//     }

// };

// module.exports = connectDB