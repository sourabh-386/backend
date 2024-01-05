const mysql = require('mysql2/promise')
const dotenv = require('dotenv')
dotenv.config()

exports.database = async () => {

    try {


        const db = mysql.createPool({
            connectionLimit: 100,
            host: process.env.HOST,
            port: process.env.DATABASE_PORT,
            user: process.env.USER,
            password: process.env.PASSWORD,
            database: process.env.DATABASE,
            connectTimeout: 30000
        })

        return db

    } catch (error) {
        console.log(error)
    }

}

