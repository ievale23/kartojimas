const express = require("express");
const { dbConnection } = require("../db");
const { defaultCallback } = require("../helpers/dbHelper");

const router = express.Router();

router.get("/posts", (req, res) => {
  dbConnection.execute(`SELECT * FROM posts`, (err, result) => {
    defaultCallback(err, result, res);
  });
});

router.post("/posts", (req, res) => {
  const { body } = req;
  //const {title, text, image} = req.body;
  console.log("dbConnection", dbConnection);
  dbConnection.execute(
    "INSERT INTO posts (title, text, image) VALUES (?, ?, ?)",
    //[title, text, image]
    [body.title, body.text, body.image],
    (err, result) => {
      defaultCallback(err, result, res);
    }
  );
});

module.exports = router;
