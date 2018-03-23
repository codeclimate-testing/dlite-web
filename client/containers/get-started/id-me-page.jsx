'use strict';

import React              from 'react';
import { connect }        from 'react-redux';
import handlers           from '../../helpers/handlers';
import { getAppType }     from '../../helpers/data/pathnames';
import { buildAppName }   from '../../helpers/data/cookies';
import Presentation       from "../../presentations/get-started/id-me-page.jsx";

const Page = (props) => {
  let onBack = handlers.navigateOnBack(props);

  let appName = getAppType(props);
  buildAppName(appName);

  return (
    <Presentation
    {...props}
    onBack = {onBack} />
  );
};

const mapStateToProps = (state) => {
  return {
    locale: state.ui.locale,
    chooseApp: state.ui.chooseApp
  };
};

export default connect(mapStateToProps)(Page);
