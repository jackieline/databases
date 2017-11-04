var models = require('../models');

var defaultCorsHeaders = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10 // Seconds.
};

module.exports = {
  messages: {
    get: function (req, res) {
      console.log('!!!hello!!!', req.method);
      response.setHeader('Content-Type', 'application/json');
      response.writeHead(200, defaultCorsHeaders);
      models.messages.get(response.end(data));
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      response.setHeader('Content-Type', 'application/json');
      response.writeHead(200, defaultCorsHeaders);
      models.messages.get(response.end(data));
    },
    post: function (req, res) {
      var ourUser = [req.body.username];
      models.users.post(ourUser, function (err, results) {
        if (err) {
          console.log(err);
        } else {
          res.sendStatus(201);
        }
      });
    }
  }
};

