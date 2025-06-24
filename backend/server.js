import express from "express";

// const express = require("express");

const app = express();

app.get("/api/notes", (req, res) => {
    res.send("You got 10 Notes")
});

app.listen(5002, () => {
  console.log("Server is running on PORT: 5002");
});