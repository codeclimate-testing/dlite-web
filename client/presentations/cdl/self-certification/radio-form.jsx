'use strict';

import React              from 'react';
import RadioCollection    from '../../radio-selector-collection.jsx';
import RadioSelector      from '../../radio-selector.jsx';
import Translator         from '../../../i18n/translator-tag.jsx';

const Form = (props) => {

  return (
    <div className = 'cdl-self-cert-intra-inter'>

      <RadioCollection
        {...props}
        name          = 'certification'
        errorMessage  = { props.validations.select() }
      >
      <RadioSelector value='inter'>
          <Translator tag = 'span' translationPath = 'newApproved.cdl.selfCertification.values.interstate' />
      </RadioSelector>

      <RadioSelector value='intra'>
          <Translator tag = 'span' translationPath = 'newApproved.cdl.selfCertification.values.intrastate' />
      </RadioSelector>

      </RadioCollection>
    </div>
  );
};

export default Form;
