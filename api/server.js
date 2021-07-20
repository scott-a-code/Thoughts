const express = require('express');
const cors = require('cors');

const api = express();
api.use(cors());
api.use(express.json());

const thoughtsRoute = require('./controllers/thoughts');
api.use('/posts', thoughtsRoute);

module.exports = api;

