'use strict';

import React            from 'react';
import RadioCollection  from '../../radio-selector-collection.jsx';
import radioYesNoGroup  from '../../radio-yes-no-group.jsx';
import translations     from '../../../i18n';
import Translation      from '../../../i18n/translate-tag.jsx';

const FormControls = (props) => {
  let locale = props.locale
  return (
    <div className='endorsement-toggle'>
      <Translation tag='h2' className='question'>
          {translations[locale].cdl.endorsmentsPage.prompt}
      </Translation>
      <div className='row'>
        <fieldset role='group' aria-label='Endorsements needed choice'>
          <RadioCollection
            {...props}
            name='needEndorsement'
            onBlur = { props.onBlurValidate }
            errorMessage={ props.validations.needEndorsement() }
          >
            {radioYesNoGroup(locale)}
          </RadioCollection>
        </fieldset>
      </div>
    </div>
  );
};

export default FormControls;
