/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var experiencesRouter = express.Router();

  experiencesRouter.get('/', function(req, res) {
    res.send({
      'experiences': []
    });
  });

  experiencesRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  experiencesRouter.get('/:id', function(req, res) {
    res.send({
      'experiences': {
        id: req.params.id
      }
    });
  });

  experiencesRouter.put('/:id', function(req, res) {
    res.send({
      'experiences': {
        id: req.params.id
      }
    });
  });

  experiencesRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/experiences', require('body-parser').json());
  app.use('/api/experiences', experiencesRouter);
};
