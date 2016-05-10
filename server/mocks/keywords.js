/*jshint node:true*/
module.exports = function(app) {
  var express = require('express');
  var keywordsRouter = express.Router();

  keywordsRouter.get('/', function(req, res) {
    res.send({
      'keywords': []
    });
  });

  keywordsRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  keywordsRouter.get('/:id', function(req, res) {
    res.send({
      'keywords': {
        id: req.params.id
      }
    });
  });

  keywordsRouter.put('/:id', function(req, res) {
    res.send({
      'keywords': {
        id: req.params.id
      }
    });
  });

  keywordsRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/keywords', require('body-parser').json());
  app.use('/api/keywords', keywordsRouter);
};
