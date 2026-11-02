#!/usr/bin/env node

const express = require("express");
const app = express();
const path = require("path");

app.get(["/", "/index"], (req, res) => {
    const absPath = path.join(__dirname, 'index.html');
    res.sendFile(absPath);
});

app.get("/about", (req, res) => {
    const absPath = path.join(__dirname, 'about.html');
    res.sendFile(absPath);
});

app.get("/contact-me", (req, res) => {
    const absPath = path.join(__dirname, 'contact-me.html');
    res.sendFile(absPath);
});

app.get(/.*/, (req, res) => {
    const absPath = path.join(__dirname, '404.html');
    res.sendFile(absPath);
})

app.listen(3000)