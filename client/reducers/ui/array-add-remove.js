'use strict';

export const addValue = (value, collection) => {
  const valueExists = collection.some((item) => {
    return item === value;
  });

  if (valueExists) { return collection; }

  let state = collection.slice(0);
  state.push(value);
  return state;
};

export const removeValue = (value, collection) => {
  return collection
    .map((accordionId) => {
      if (accordionId !== value) { return accordionId; }
    })
    .reduce(
      (aggregate, element) => {
        if (element) { aggregate.push(element); }
        return aggregate;
      },
      []
    );
};

