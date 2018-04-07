'use strict';

const env           = require('./server/config/env').env;
const redisUrl      = process.env.REDIS_URL;
const redisClient   = require('redis').createClient(redisUrl);

redisClient.on('connect', (err) => {
  console.log('connected to redis successfully');
});

redisClient.on('error', (err) => {
  console.log('error connecting to redis');
});

let fileConfig;
try {
  fileConfig = require('./server/config/redis.json')[env];
} catch(e) {
  if (!redisUrl) {
    throw new Error(
      `No redis config found at server/config/redis.json for ${env}`
    );
  }
}

let config;

if(!redisUrl) {
  config = {
    client: redisClient,
    port: fileConfig.port,
    host: fileConfig.host,
    db: 1,
    ttl: 360
  };
}
else {
  config = {
    client: redisClient,
    url: redisUrl,
    ttl: 360,
    db: 1,
    logErrors: true
  };
}

module.exports = config;