'use strict';

import React              from 'react';
import { connect }        from 'react-redux';
import handlers           from '../../helpers/handlers';
import { buildAppName }   from '../../helpers/data/cookies';
import {
  isProduction,
  parseAppName
} from '../../helpers/data/application';
import Presentation       from '../../presentations/get-started/id-me-page.jsx';

const Page = (props) => {
  let onBack = handlers.navigateOnBack(props);

  let language = props.language || 'en';

  let appName = parseAppName(props);

  return (
    <Presentation
      {...props}
      onBack    = { onBack }
      language  = { language }
      appName   = { appName}
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
