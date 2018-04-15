'use strict';
import { connect }                from 'react-redux';
import handlers                   from '../../helpers/handlers';
import { getTimeout }             from '../../actions/get-timeout';
import { getAuthStatus }          from '../../actions/get-auth-status';

const LoggedIn = (props) => {
  let uuid = props.match.params.uuid;

  let appName = props.saveAppType();
  props.saveLanguage();
  props.isLoggedIn();

  props.getAppEnv()
  .then((res) => {
    props.onLoggedIn(uuid, res, appName);
  });

  return null;
};


const mapDispatchToProps = (dispatch) => {
  const isLoggedIn    = getAuthStatus(dispatch);
  const onLoggedIn    = handlers.onLoggedIn(dispatch);
  const saveLanguage  = handlers.saveLanguage(dispatch);
  const saveAppType   = handlers.saveAppType(dispatch);
  const getAppEnv     = getTimeout(dispatch);

  return {
    isLoggedIn,
    onLoggedIn,
    saveLanguage,
    saveAppType,
    getAppEnv
  };
};


export default connect(null, mapDispatchToProps)(LoggedIn);
