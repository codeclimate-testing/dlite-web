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

redisClient.on('connect', ( ) => {
  console.log('connected to redis successfully');
});

redisClient.on('error', (err) => {
  throw new Error(
    `Error connecting to REDIS with REDIS_URL = ${redisUrl} `
  );
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
    ttl: 600
  };
}
else {
  config = {
    client: redisClient,
    url: redisUrl,
    logErrors: true,
    ttl: 600
  };
}

module.exports = config;