const express = require('express');
const router = express.Router();

const Thought = require('../models/Thoughts.js');
const api = require('../server.js');

router.get('/:id', (req, res) => {
    res.send('Hello');
})

router.post('/new', (req, res) => {
    // store req body
    // create new post using model
    // return id


    res.send('Hello');
})

module.exports = router;

// async function show(req, res) {
//     try {
//         const oneThought = await Thought.findPostById(req.params.id);
//         res.status(200).json(oneThought);
//     } catch (err) {
//         res.status(404).json({err});
//     }
// };

// async function create(req, res) {
//     try {
//         const createThought = await Thought.create(req.body);
//         res.status(201).json(createThought);
//     } catch (err) {
//         res.status(422).json({err});
//     }
// };

// module.exports = {show, create}