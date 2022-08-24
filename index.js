const express = require("express");
const app = express()
const { LISTENING_PORT } = require("./config");

app.get('/', function (req, res) {
    res.send('Hello World')
});

app.listen(LISTENING_PORT, ()=>{
    console.log(`Listening on Port: ${LISTENING_PORT}`);
});

module.exports = app;