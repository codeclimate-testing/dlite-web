'use strict';

const convertToJsObject = (json) => {
  if (typeof json !== 'string') { return json; }
  return JSON.parse(json);
};

const firstPass = (json) => {
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

const parse = (json) => {
  let profile = firstPass(json);
  return {
    uuid: profile.uuid
  }
};

exports.parse = parse;
