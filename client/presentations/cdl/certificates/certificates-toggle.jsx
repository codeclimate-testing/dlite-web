'use strict';

import React            from 'react';
import RadioCollection  from '../../radio-selector-collection.jsx';
import radioYesNoGroup  from '../../radio-yes-no-group.jsx';
import Translator       from '../../../i18n/translator-tag.jsx';

const FormControls = (props) => {

  return (
    <div className='certificates-toggle'>
      <Translator
        tag             = 'h2'
        className       = 'question'
        translationPath = 'cdl.endorsmentsPage.certificationSection.prompt'
      />
      <div className='row'>
        <fieldset role='group' aria-label='Certificates needed choice'>
          <RadioCollection
            {...props}
            name='needCertificates'
            onBlur = { props.onBlurValidate }
            errorMessage={ props.validations.needCertificates() }
          >
            {radioYesNoGroup()}
          </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default FormControls;
