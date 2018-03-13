'use strict';

import en_json  from '../../../client/i18n/en.json';

// This is the structure needed for Page components to work in tests well
export default {
  ui: {
    section: {},
    addApp: '',
    locale: 'en'
  },
  application: {
    basics: {
      language: 'en'
    }
  },
  server: {
    translations: {
      default: en_json
    }
  }
};
