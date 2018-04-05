'use strict';
import { connect }                from 'react-redux';
import handlers                   from '../helpers/handlers';
import { isProduction }           from '../helpers/data/application';
import {
  buildLoggedIn,
  getAppNameCookie
} from '../helpers/data/cookies';

const LoggedIn = (props) => {

  // set isLoggedIn key for localhost
  if (!isProduction()){
    console.log('build logged in for dev');
    buildLoggedIn();
  }

  let user = props.match.params.user;
  props.onLoggedIn(user, props.history);

  return null;
};

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  const onLoggedIn    = handlers.onLoggedIn(dispatch);
  return {
    onLoggedIn
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(LoggedIn);