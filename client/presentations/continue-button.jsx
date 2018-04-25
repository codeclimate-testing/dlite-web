'use strict';

import React        from 'react';
import Translator   from '../i18n/translator-tag.jsx';

export const ContinueButton = (props) => {
  return (
    <div className='unit-right' >
      <div className='shadow-container'>
        <button className='arrow-button forward' disabled={props.disabled} hidden={props.hidden}>
          <Translator tag = 'span' translationPath = 'shared.navigation.next' />
        </button>
      </div>
    </div>
  );
};

export const ContinueLanguageButton = (props) => {

  let nextText = 'Next';
  switch(props.language) {
    case('en') :
      nextText = 'Next';
      break;

    case('es') :
      nextText = 'Siguiente';
      break;

    case('zh') :
      nextText = '下一頁';
      break;

    case('ko') :
      nextText = '다음';
      break;

    case('km') :
      nextText = 'បន្ទាប់';
      break;

    case('th') :
      nextText = 'ถัดไป';
      break;

    case('vi') :
      nextText = 'Kế Tiếp';
      break;

    case('tl') :
      nextText = 'Kasunod';
      break;

    case('ja') :
      nextText = '次へ';
      break;

    case('hi') :
      nextText = 'आगे';
      break;
  }

  return (
    <div className='unit-right'>
      <div className='shadow-container'>
        <button className='arrow-button forward' disabled={props.disabled} hidden={props.hidden}>
          <span>{nextText}</span>
        </button>
      </div>
    </div>
  )
};
