'use strict';
import { nextPath }     from '../../helpers/navigation/page';

const loggedIn = (props) => {
  let appName = localStorage.getItem('appName');
  let pageKey = 'IDme';
  if (appName === 'cdl') {
    pageKey = 'cdlIDme';
  }

  // include placeholder flow prop
  let pathURL = nextPath(pageKey, {
    flow: ''
  });

  props.history.push(pathURL);
  return null;
};


export default loggedIn;