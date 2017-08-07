'use strict';

export function submitNames(names) {
  return {
    type: "SUBMIT_NAMES",
    payload: names
  };
}
