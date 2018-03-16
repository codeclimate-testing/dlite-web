'use strict';

import React            from 'react';
import RadioCollection  from '../../radio-selector-collection.jsx';
import radioYesNoGroup  from '../../radio-yes-no-group.jsx';
import translations     from '../../../i18n';
import Translation      from '../../../i18n/translate-tag.jsx';

const FormControls = (props) => {
  let locale = props.locale
  return (
    <div className='certificates-toggle'>
      <Translation tag='h2' className='question'>
       {translations[locale].cdl.endorsmentsPage.certificationSection.prompt}
      </Translation>
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
