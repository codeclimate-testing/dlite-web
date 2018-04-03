'use strict';

import sections         from './pages';

const all = Object.keys(sections).reduce((keyedObject, sectionName) => {
  let section = sections[sectionName];

  Object.values(section).forEach((array) => {
    array.forEach(object => {
      keyedObject[object.key] = object;
    });
  });

  return keyedObject;
}, {});

export const pageFor = (name) => {
  console.log(all)
  return all[name];
};

export const pathForPage = (name, props) => {
  let pathUrl = pageFor(name).path;
  if (typeof(pathUrl) !== 'string') {
    pathUrl = pathUrl(props);
  }
  return pathUrl;
};

export const nextPath = (name, props) => {
  let page = pageFor(name);
  let nextKey = page.next;
  if (typeof(nextKey) !== 'string') {
    nextKey = nextKey(props);
  }
  let nextPage = pageFor(nextKey);
  return pathForPage(nextKey, props);
};
