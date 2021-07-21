const express = require('express');
const Thoughts = require('../models/thoughts.js');
const router = express.Router();

const api = require('../server.js');

router.get('/:id', (req, res) => {
    res.send('Hello');
})

router.post('/new', async (req, res) => {
    try{
        // store req body
        // req.body is the object it's receiving
        let postBody = req.body;
        console.log(postBody);
        // // create new post using model
        let sendingPostToBeCreatedInServer = await Thoughts.create(req.body.title, req.body.pseudonym, req.body.body);
        console.log(sendingPostToBeCreatedInServer);
        
        // let retreivingSamePostWithID = sendingPostToBeCreatedInServer.Result.rows[0].id;
        // console.log(retreivingSamePostWithID)
        // return id

        res.send(sendingPostToBeCreatedInServer.rows[0]);
    } catch(err) {
        res.status(422).send(err);
    }
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