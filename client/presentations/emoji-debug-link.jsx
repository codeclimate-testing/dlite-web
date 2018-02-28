'use strict';

import React from "react";

const EmojiDebugLink = (props) => {
  if(APP_ENV === 'development') {

    const toggleLocale = () => {
      let value = props.locale === 'en' ? 'emoji' : 'en';
      props.onLocaleChange(value);
    }

    return(
      <div>
        <a href="#" onClick={ toggleLocale }>
          Emoji Debugger
        </a>
      </div>
    )
  }
  return null;
};

export default EmojiDebugLink;
