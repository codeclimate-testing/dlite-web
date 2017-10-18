'use strict';

import React from 'react';

import HomeLink         from '../home-link.jsx';
import TextInput        from '../text-input.jsx';
import SuffixSelector   from '../suffix-selector.jsx';
import ContinueButton   from '../continue-button.jsx';
import navigateOnSubmit from '../../helpers/navigate-on-submit';

const PreviousNamesInfoForm = (props) => {
  document.title = props.pageTitle;
  return (
    <div>
      <HomeLink />

      <h4>Please list all previous legal names.</h4>
      <p>For example, inclue your maiden name.</p>
      <p>Separate by commas.</p>
      <form onSubmit={props.onSubmit} className='previous-names-info-form'>
        <TextInput
          identifier='names'
          value={props.previousNamesInfo.names}
          onChange={props.onChange}
        />

        <ContinueButton disabled={props.continueDisabled} />
      </form>
    </div>
  );
};

export default PreviousNamesInfoForm;
