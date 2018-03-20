'use strict';
import nextPath       from '../../helpers/navigation/page';

const loggedIn = (props) => {

  let appName = localStorage.getItem('appName');
  let pageKey = 'IDme';
  if (appName === 'cdl') {
    pageKey = 'cdlIDme';
  }
  return props.history.push(nextPath(pageKey));
};


export default loggedIn;