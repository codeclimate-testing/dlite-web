'use strict';

export const hideMain = (props) => {
  return props.server.apiStatus === 'loading' ? 'hide' : '';
};

export const getErrorMessage = (props) => {
  return props.server.apiStatus === 'error' ? 'Sorry, something went wrong' : '';
};
