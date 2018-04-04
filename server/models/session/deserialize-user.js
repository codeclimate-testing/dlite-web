'use strict';

const getUser = require('../db/get-user').byUuid;

module.exports = function(id, done) {
  getUser(id)
    .then((user) => {
      return done(null, user);
    })
    .catch(done);
}
