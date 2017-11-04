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
      models.messages.get(function(err, result) {
        if (err) {
          console.log(err);
        } else {
          res.json(result);
        }
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      
      var ourMessage = [req.body.message, req.body.roomname, req.body.username];
      models.messages.post(ourMessage, function(err, results) {
        if (err) {
          console.log(err, 'i am an error');
        } else {
          res.sendStatus(201);
          res.end();
        }
      });
      
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(err, results) {
        if (err) {
          console.log(err);
        } else {
          console.log(res.json);
          res.json(results);
        }
      });
    },
    post: function (req, res) {
      var ourUser = [req.body.username];
      models.users.post(ourUser, function (err, results) {
        if (err) {
          console.log(err);
        } else {
          res.sendStatus(201);
          res.end();
        }
      });
    }
  }
};

