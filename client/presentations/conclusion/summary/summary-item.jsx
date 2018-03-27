'use strict'

import React        from 'react';
import Translator   from '../../../i18n/translator-tag.jsx';

const SummaryItem = (props) => {
  if(typeof(props.text) === 'string')
  {
    return (
      <div className='summary-item'>
        <Translator
          tag             = 'h4'
          translationPath = { props.title }
        />
        <div>
        <Translator
          tag             = 'span'
          translationPath = { props.text }
        />
        </div>
      </div>
    );
  }
  return (
    <div className='summary-item'>
      <Translator
        tag             = 'h4'
        translationPath = { props.title }
      />
      <div>
        { props.text }
      </div>
    </div>
  )

};

export default SummaryItem
