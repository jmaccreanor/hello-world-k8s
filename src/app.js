#!/usr/bin/env node

const express = require('express')
const mysql = require('mysql');

const app = express()
app.use(express.json())

let connected = false

// const connection = mysql.createConnection(
//     {
//     user:  process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     port:  process.env.DB_PORT,
//     host:  process.env.DB_HOST
// });
//
//
// connection.connect(function(err) {
//     if (err) throw err;
//     connected = true
//     console.log("DB Connected!");
// });

app.get('/', (req, res) => {
    res.json({message:`Your app is listening on port: ${listener.address().port}. DB is ${connected ? 'connected' : `not connected`}!`})
})

const listener = app.listen(3000, () => {
    console.log(`Hello World!`)
})

