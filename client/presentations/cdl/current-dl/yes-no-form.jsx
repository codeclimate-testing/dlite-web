'use strict';

import React              from 'react';
import RadioCollection    from '../../radio-selector-collection.jsx';
import radioYesNoGroup    from '../../radio-yes-no-group.jsx';
import Translator         from '../../../i18n/translator-tag.jsx';


const Form = (props) => {
  return (
    <div className = 'cdl-current-dl-yes-no'>
      <Translator
        tag             = 'h2'
        className       = 'question'
        translationPath = 'cdl.caDlPage.prompt'
      />
      <RadioCollection
        {...props}
        name          = 'isIssued'
        errorMessage  = { props.validations.isIssued() }
        selectedValue = {props.currentCardInfo.isIssued}
      >
        { radioYesNoGroup(props.locale) }
      </RadioCollection>
    </div>
  );
};

export default Form;
