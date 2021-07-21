const express = require("express");
const Thoughts = require("../models/thoughts.js");
const { response } = require("../server.js");
const router = express.Router();

const api = require("../server.js");

router.get("/:id", async (req, res) => {
  try {
      const response = await Thoughts.findPostById(req.params.id);
      res.status(200).send(response);
  } catch (error) {
      res.status(500).send(error)
  }
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
