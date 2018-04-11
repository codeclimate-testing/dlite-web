'use strict';

import React                          from 'react';
import { Redirect }                   from 'react-router-dom';
import { signInURL }                  from '../helpers/data/pathnames';

export const NotFound = (props) => {
  return (<Redirect to={{pathname: `${signInURL()}`}} />)
};