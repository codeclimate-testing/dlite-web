'use strict';

import sections from './pages';

const all = Object.keys(sections).reduce((keyedObject, sectionName) => {
  let section = sections[sectionName];
  section.forEach((object) => {
    keyedObject[object.key] = object;
  });
  return keyedObject;
}, {});

export const pageFor = (name) => {
  return all[name];
};

export const pathForPage = (name) => {
  return pageFor(name).path;
};

export const nextPath = (name, props) => {
  if (props.location && props.location.state && props.location.state.nextAddress === '/summary') { return pageFor('summary').path; }

  let page = pageFor(name);
  let nextKey = page.next;
  if (typeof(nextKey) !== 'string') {
    nextKey = nextKey(props);
  }
  let nextPage = pageFor(nextKey);
  return nextPage.path;
};
