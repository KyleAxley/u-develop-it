//import mysql2
const mysql = require('mysql2');
//import express
const express = require('express');
//port designation
const PORT = process.envPORT || 3001;
const app = express();

// express middleware 
app.use(express.urlencoded({ express: false }));
app.use(express.json()); 

//Connect to database 
const db = mysql.createConnection(
    {
        host: 'localhost',
        //Your MySql username 
        user: 'root',
        // Your MySql password 
        password: 'root',
        database: 'election'
    }, 
    console.log('Connected to the election database.')
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

//Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end(); 
}); 


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}!`); 
});
