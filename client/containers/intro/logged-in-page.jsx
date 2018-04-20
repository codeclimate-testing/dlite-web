'use strict';
import { connect }                from 'react-redux';
import handlers                   from '../../helpers/handlers';
import { getAuthStatus }          from '../../actions/get-auth-status';

const LoggedIn = (props) => {
  let uuid = props.match.params.uuid;

  let appName = props.saveAppType();
  props.saveLanguage();
  props.isLoggedIn();
  props.onLoggedIn(uuid, appName);

  return null;
};


const mapDispatchToProps = (dispatch) => {
  const isLoggedIn    = getAuthStatus(dispatch);
  const onLoggedIn    = handlers.onLoggedIn(dispatch);
  const saveLanguage  = handlers.saveLanguage(dispatch);
  const saveAppType   = handlers.saveAppType(dispatch);

  return {
    isLoggedIn,
    onLoggedIn,
    saveLanguage,
    saveAppType
  };
};


export default connect(null, mapDispatchToProps)(LoggedIn);
