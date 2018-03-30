'use strict';

import React from "react";
import { Link } from 'react-router-dom';

import { alicePath } from '../helpers/alice-path';

const EmojiDebugLink = (props) => {
  if(APP_ENV === 'development') {

    const toggleEmoji = () => {
      let value = props.translationLanguage === 'emoji' ? 'en' : 'emoji'

      props.onEmojiDebug(value);
    }
    return (
      <div>
        <a href="#" onClick={ toggleEmoji }>
          Emoji Debugger
        </a>
      </div>
    );
  }
  return null;
};

export default EmojiDebugLink;
