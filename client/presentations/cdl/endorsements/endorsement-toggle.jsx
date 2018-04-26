'use strict';

import React            from 'react';
import RadioCollection  from '../../radio-selector-collection.jsx';
import radioYesNoGroup  from '../../radio-yes-no-group.jsx';
import Translator       from '../../../i18n/translator-tag.jsx';

const FormControls = (props) => {

  return (
    <div className='endorsement-toggle'>
      <Translator
        tag             = 'h2'
        className       = 'question'
        translationPath = 'cdl.endorsmentsPage.prompt'
        tabIndex        = '0'
      />
      <div className='row'>
        <fieldset role='group' aria-label='Endorsements needed choice'>
          <RadioCollection
            {...props}
            name='needEndorsement'
            onBlur = { props.onBlurValidate }
            errorMessage={ props.validations.needEndorsement() }
          >
            {radioYesNoGroup()}
          </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default FormControls;
