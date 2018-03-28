'use strict';

import React                      from 'react';
import handlers                   from '../helpers/handlers';
import Presentation               from '../presentations/get-started/choose-language-page.jsx';
import { updateLanguage }         from '../actions/index';
import { mergePropsGenerator }    from '../helpers/merge-props';
import { deleteLanguageCookie }   from '../helpers/data/cookies';

const Page = (props) => {
  let onBack            =   handlers.navigateOnBack(props);
  deleteLanguageCookie();

  return (
    <Presentation
      {...props}
      onBack            = { onBack }
      selectedValue     = { props.language }
    />
  );
};

function mapStateToProps(state) {
  return {
    focused:      state.ui.focus,
    language:     state.ui.language,
    server:       state.server
  };
};

export default mergePropsGenerator(mapStateToProps, updateLanguage, 'applicationLanguageSubmit', Page);
