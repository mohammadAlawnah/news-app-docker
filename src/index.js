const express = require("express")
const mysql = require("mysql2")
const cors = require("cors");
const app = express();


app.use(cors());




const connection = mysql.createConnection({
    host:process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env. DB_PASSWORD,
    database: process.env.DB_NAME,
    charset: 'utf8mb4'
});

app.get('/news',(req,res)=>{
    const SQL = `SELECT * FROM News`

    connection.execute(SQL,(err,result)=>{
        console.log("lll = ",result)
        return res.json({message:"success",News:result})
    })
})


app.listen(4000,()=>{
    console.log('server is running .... 4000')
})
