'use strict';

import React from 'react';

import RadioCollection          from '../../radio-selector-collection.jsx';
import radioIdDlGroup           from '../../radio-id-dl-group.jsx';
import {
  showDesignation,
  designatedValue
}      from '../../../helpers/data/real-id';
import Translator        from '../../../i18n/translator-tag.jsx';

const Form = (props) => {
  if (!showDesignation(props)) { return null; }

  return (
    <div className='real-id-form'>
      <hr/>
        <Translator
          tag             = 'h2'
          className       = 'question'
          translationPath = 'newApproved.intro.realID.whichCard'
          tabIndex        = '0'
        />
        <Translator
          tag             = 'p'
          translationPath = 'newApproved.intro.realID.explanation'
        />

      <fieldset role='group' aria-label='Real ID card choice'>
        <RadioCollection
          {...props}
          name          = 'realIdDesignation'
          errorMessage  = { props.validations.designation() }
          selectedValue = { designatedValue(props) }
        >
          { radioIdDlGroup() }
        </RadioCollection>
      </fieldset>

    </div>
  );
};

export default Form;
