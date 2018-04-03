'use strict';

import React                  from 'react';
import connectForm            from '../../helpers/connect-form';
import handlers               from '../../helpers/handlers';
import { connect }            from 'react-redux';
import mapDispatchToProps     from '../../helpers/handlers/map-dispatch-to-props';
import Presentation           from "../../presentations/intro/open-applications.jsx";
import { getData }            from '../../actions/api-actions';

const Page = (props) => {
  let onBack            =   handlers.navigateOnBack(props);
  return (
    <Presentation
      {...props}
      onBack            = { onBack }
    />
  );
};

function mapStateToProps(state) {
  return {
    chooseApp     : state.ui.chooseApp,
    focused       : state.ui.focus,
    userData      : state.server.userData,
    apiStatus     : state.server.apiStatus
  };
};

export default connect(mapStateToProps, mapDispatchToProps(null))(Page);
