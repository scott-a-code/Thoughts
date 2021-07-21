const express = require("express");
const Thoughts = require("../models/thoughts.js");
const router = express.Router();

const api = require("../server.js");

router.get("/:id", (req, res) => {
    // TODO Add the route to handle get request by id.
  res.send("Hello");
});

router.post("/new", async (req, res) => {
  try {
    let sendingPostToBeCreatedInServer = await Thoughts.create(
      req.body.title,
      req.body.pseudonym,
      req.body.body
    );
    res.send(sendingPostToBeCreatedInServer.rows[0]);
  } catch (err) {
    res.status(422).send(err);
  }
});

module.exports = router;
