'use strict';

const db      = require('../db/connect')();
const redis   = require('../../redis-file').client;

const getDBStatus = () => {
  if(db) {
    return db.raw('select 1+1 as result')
    .then(function () {
      return 'OK';
    })
    .catch(function(err) {
      console.log(err)
      return 'Fail';
    });
  }
  else{
    return 'Fail';
  }
};

const getRedisStatus = () => {

  if(redis) {

    return new Promise((resolve, reject) => {
      try{
        redis.set("foo_rand000000000000", "OK");
        redis.get("foo_rand000000000000", function (err, reply) {
          resolve(reply.toString());
        });
      }
      catch(err) {
        console.log(err)
        reject('Fail');
      }
    });
  }
  else{
    return 'Fail';
  }
};

module.exports = async function getHealth(req, res) {

  let dbStatus      = await getDBStatus();
  let redisStatus   = await getRedisStatus();

  res.json({
    Postgres:   dbStatus,
    Redis:      redisStatus
  });
};

