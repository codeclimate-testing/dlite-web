'use strict';

import React            from 'react';
import RadioCollection  from '../../radio-selector-collection.jsx';
import radioYesNoGroup  from '../../radio-yes-no-group.jsx';
import translations     from '../../../i18n';
import { convertToHtml }  from '../../../i18n/convert-to-html.jsx';

const FormControls = (props) => {
  let locale = props.locale
  return (
    <div className='certificates-toggle'>
       {convertToHtml('h2', translations[locale].cdl.endorsmentsPage.certificationSection.prompt, 'question')}
      <div className='row'>
        <fieldset>
          <RadioCollection
            {...props}
            name='needCertificates'
            onBlur = { props.onBlurValidate }
            errorMessage={ props.validations.needCertificates() }
          >
            {radioYesNoGroup(locale)}
          </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default FormControls;