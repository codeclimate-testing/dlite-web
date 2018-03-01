'use strict';

import React            from 'react';
import RadioCollection  from '../../radio-selector-collection.jsx';
import radioYesNoGroup  from '../../radio-yes-no-group.jsx';
import translations     from '../../../i18n';
import { convertToHtml }  from '../../../i18n/convert-to-html.jsx';

const FormControls = (props) => {
  let locale = props.locale;
  return (
    <div className='endorsement-toggle'>
      <hr/>
        {convertToHtml('h2', translations[locale].intro.licenseTypePage.endorsementsSection.prompt, 'question')}
        {convertToHtml('p', translations[locale].intro.licenseTypePage.endorsementsSection.explanation)}
      <div className='row'>
        <fieldset>
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
