'use strict';

function extractUI(data) {
  return {
    application_id: data.id,
    pathname:       data.pathname
  }
}

module.exports = extractUI;