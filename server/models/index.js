var db = require('../db');


module.exports = {
  messages: {
    get: function (cb) {
      db.con.query('SELECT * FROM message', function(err, results) {
        if (err) {
          throw err;
        } else {
          cb(results);
        }
      });
    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (cb) {
      db.con.query('SELECT * FROM userName', function(err, results) {
        if (err) {
          throw err;
        } else {
          cb(results);
        }
      });
    },
    post: function (userName, cb) {
      var queryStr = 'INSERT INTO userName (user) VALUE(?)';
      db.con.query(queryStr, userName, function(err, results) {
        if (err) {
          cb(err, null);
        } else {
          cb(null, results);
        }
      });
    }
  }
};

