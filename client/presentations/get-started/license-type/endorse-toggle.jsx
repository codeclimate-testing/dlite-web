'use strict';

import React            from 'react';
import RadioCollection  from '../../radio-selector-collection.jsx';
import radioYesNoGroup  from '../../radio-yes-no-group.jsx';
import Translator       from '../../../i18n/translator-tag.jsx';

const FormControls = (props) => {
  return (
    <div className='endorsement-toggle'>
      <hr/>
      <Translator
        tag             = 'h2'
        className       = 'question'
        translationPath = 'intro.licenseTypePage.endorsementsSection.prompt'
      />
      <Translator
        tag             = 'p'
        translationPath = 'intro.licenseTypePage.endorsementsSection.explanation'
      />
      <fieldset role='group' aria-label='Need endorsements choice'>
        <RadioCollection
          {...props}
          name='needEndorsement'
          errorMessage={ props.validations.needEndorsement() }
        >
          {radioYesNoGroup()}
        </RadioCollection>
      </fieldset>
    </div>
  );
};

export default FormControls;
