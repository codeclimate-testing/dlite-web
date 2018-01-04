'use strict';

import React from 'react';
import { createMockStore } from 'redux-test-utils';
import { Provider } from "react-redux";
import { MemoryRouter } from 'react-router-dom'

export default (store) => {
  return (props) => {
    return(
      <Provider store={ createMockStore(store) }>
        <MemoryRouter>
          {props.children}
        </MemoryRouter>
      </Provider>
    );
  };
};
