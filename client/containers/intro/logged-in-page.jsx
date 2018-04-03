'use strict';
import { connect }                from 'react-redux';
import handlers                   from '../../helpers/handlers';

const LoggedIn = (props) => {

  let uuid = props.match.params.uuid;
  props.onLoggedIn(uuid, props.history);

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
