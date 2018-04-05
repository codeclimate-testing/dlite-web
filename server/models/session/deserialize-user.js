'use strict';

const getUser = require('../db/get-user').byUuid;

module.exports = function(uuid, done) {
  getUser(uuid)
    .then((user) => {
      return done(null, user);
    })
    .catch(done);
}
