var db = require('../db');


module.exports = {
  messages: {
    get: function (cb) {
      db.query('SELECT * FROM message', function(err, results) {
        if (err) {
          cb(err, null);
        } else {
          cb(null, results);
        }
      });
    }, // a function which produces all the messages
    post: function (inputMsg, cb) {
      
      //insert into message (messageText, roomNameId, userNameId)  
      // Value ('hi', (select roomNameId from roomName where room = 'coolroom'), (select userNameId from userName where user = 'jackie'));
      
      var queryStr = 'INSERT INTO message (messageText, roomName, userNameId) VALUES(?, ?, (select userNameId from userName where user = ? limit 1))';
      db.query(queryStr, inputMsg, function(err, results) {
        if (err) {
          cb(err, null);
        } else {
          cb(null, results);
        }
      });
      db.query('SELECT * FROM message', function(err, results) {
        if (err) {
          console.log(err, null);
        } else {
          console.log(null, results);
        }
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (cb) {
      db.query('SELECT * FROM userName', function(err, results) {
        if (err) {
          cb(err, null);
        } else {
          cb(null, results);
        }
      });
    },
    post: function (userName, cb) {
      var queryStr = 'INSERT INTO userName (user) VALUES(?)';
      db.query(queryStr, userName, function(err, results) {
        if (err) {
          cb(err, null);
        } else {
          cb(null, results);
        }
      });
      db.query('SELECT * FROM message', function(err, results) {
        if (err) {
          console.log(err, null);
        } else {
          console.log(null, results);
        }
      });
    }
  }
};

