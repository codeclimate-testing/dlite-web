'use strict';

const convertToJsObject = (json) => {
  if (typeof json !== 'string') { return json; }
  return JSON.parse(json);
};

exports.parse = (json) => {
  let profile = {};
  json = convertToJsObject(json);

  const remapAttributes = (attribute) => {
    profile[attribute.handle] = attribute.value;
  }

  if (json.attributes && json.attributes.length > 0) {
    json.attributes.forEach(remapAttributes);
  }

  return profile;
};
