'use strict';

const env           = require('./server/config/env').env;
const { URL }       = require('url');
const redisUrl      = process.env.REDIS_URL;
const redisTLS      = process.env.REDIS_TLS;

let redisClient;

if((redisTLS && redisTLS === 'true') && redisUrl){
  redisClient = require('redis').createClient(redisUrl, { tls: { servername: new URL(redisUrl).hostname }});
}
else{
  redisClient   = require('redis').createClient(redisUrl);
}

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