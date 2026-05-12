const express = require('express');

const app = express();

app.get("/", (req,res) => {
    res.send("Expense tracking system");
});

module.exports = app;