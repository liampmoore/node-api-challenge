const express = require('express');

const router = express.Router();

const projectDB = require('../data/helpers/projectModel');

const middleware = require('../middleware');

router.get('/:id', middleware.validateProjectId, async (req, res) => {
    try {
      res.status(200).json(req.project)
  } catch(err) {
      console.error(err)
      res.status(500).json({ error: "The project information could not be retrieved." })
  }
  });

module.exports = router;