'use strict'
const createView = require('../views/make-search-view');

exports.up = function(db, Promise) {
  db.raw(createView.up);
};

exports.down = function(db, Promise) {
  db.raw(createView.down);
};
