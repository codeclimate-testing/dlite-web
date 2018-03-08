'use strict';

const db = require('../../db/connect')();

module.exports = function findOrSaveUser(user) {
  return db('authentications').where('uuid', user.uuid)
    .then((records) => {
      if(records.length > 0){
        return records;
      } else{
        return db('authentications').insert(user).returning('*');
      }
    })
    .catch(function(err) {
      console.error('ERROR IN SAVING USER AUTHENTICATION', err);
      return err;
    });
};
