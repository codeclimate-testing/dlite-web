'use strict';

export default function(state = null, action) {
  switch (action.type) {
    case "SUBMIT_NAMES":
      return action.payload;
  }

  return state;
}
