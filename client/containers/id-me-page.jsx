'use strict';

import React              from 'react';
import { connect }        from 'react-redux';
import handlers           from '../helpers/handlers';
import {
  buildAppName,
  buildLoggedOut
} from '../helpers/data/cookies';
import { getAppType }     from '../helpers/data/pathnames';
import Presentation       from '../presentations/get-started/id-me-page.jsx';

const Page = (props) => {
  let onBack = handlers.navigateOnBack(props);

  let appName = getAppType(props);
  let language = props.language || 'en';

  if (APP_ENV === 'test' || APP_ENV === 'development') {
    buildAppName(appName);
  }

  return (
    <Presentation
      {...props}
      appName = { appName }
      onBack  = { onBack }
      language = { language }
    />
  );
};

const mapStateToProps = (state) => {
  return {
    chooseApp : state.ui.chooseApp,
    language  : state.ui.language
  };
};

export default connect(mapStateToProps)(Page);
