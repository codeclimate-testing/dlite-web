'use strict';

const fs = require('fs');
const path = require('path');

const env = require('../config/env').env;

let indexHtmlPage;
if (env === 'development' || env === 'test')  {
  indexHtmlPage = 'index.dev.html';
} else {
  indexHtmlPage = 'index.html';
}
const indexPath = path.resolve(`${__dirname}/../../public/${indexHtmlPage}`);
console.log(indexPath);
let layout = fs.readFileSync(indexPath).toString();

module.exports = (req, res) => {
  if (env === 'development') {
    layout = fs.readFileSync(indexPath).toString();
  }
  console.log('is logged in? ' + req.isAuthenticated());
  res.cookie('isLoggedIn', req.isAuthenticated());
  res.send(layout);
};
