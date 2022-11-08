const express = require('express');
const app = express();

app.listen(5000, (req, res, next) => { console.log("App started on port: 5000")})

app.get('/', (req, res, next) => {
    res.send("<h1>MainPage</h1>")
})