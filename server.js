const express = require('express');
const helmet = require('helmet');

const actionRouter = require('./routes/actionRouter');
const projectRouter = require('./routes/projectRouter');

const server = express();

server.use(helmet());

// server.use('/api/actions', actionRouter);
server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);

module.exports = server;
