'use strict';

const youthID = (value, data, name) => {

  if (value !== 'Yes') {

    // if selecting No and applying for just one card, user should get just DL
    let noIDInstead = {
      DL: {
        isApplying: true,
        action: data.cardAction
      },
      ID: {
        isApplying: false,
        action: ''
      },
      IDDL: ['DL'],
      youthIDInstead: value
    };

    if (name === 'youthIDOnly') {
      // if selecting No but getting both cards, user should get both ID and DL
      noIDInstead.ID = {
        isApplying: true,
        action: data.cardAction
      };
      noIDInstead.IDDL = ['ID', 'DL'];
    }

    return Object.assign({}, data, noIDInstead);
  }

  // if selecting Yes, user should get just ID
  let IDInstead = {
    ID: {
      isApplying: true,
      action: data.cardAction
    },
    DL: {
      isApplying: false,
      action: ''
    },
    IDDL: ['ID'],
    youthIDInstead: value,
    cardAction: data.cardAction
  };

  return Object.assign({}, data, IDInstead);
};

export default youthID;