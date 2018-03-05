'use strict';

import React              from 'react';
import RadioSelector      from '../../radio-selector.jsx';
import RadioCollection    from '../../radio-selector-collection.jsx';
import translations       from '../../../i18n';
import Translation        from '../../../i18n/translate-tag.jsx';

const ClassRadios = (props) => {
  let locale = props.locale;
  return (
    <div className='cdl-class-form'>
      <Translation tag='h2' className='question'>
        What class of commercial driver license do you need?
      </Translation>

      <fieldset>
        <RadioCollection
          {...props}
          name          = 'class'
        >
          <RadioSelector
            value = 'classA'
            text  = 'Class A'
          />
          <RadioSelector
            value = 'classB'
            text  = 'Class B'
          />
          <RadioSelector
            value = 'classC'
            text  = 'Class C'
          />
        </RadioCollection>
      </fieldset>
    </div>
  )
};

export default ClassRadios;
