'use strict';

const db = require('../../db/connect')();
const getUser = require('./get-user').byUuid;

const saveUser = (userData) => {
  return db('users')
    .insert(userData)
    .returning('*');
};

module.exports = (userData) => {
  return getUser(userData.uuid)
    .then((user) => {
      if (user) {
        return [user];
      } else {
        return saveUser(userData);
      }
    })
    .then((users) => {
      return users[0];
    });
};
