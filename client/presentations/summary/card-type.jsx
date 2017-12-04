'use strict';

import React from 'react';
import * as dataPresent from '../../helpers/data-present';

const CardType = (props) => {
  if (!dataPresent.cardType(props.cardType)) { return null; }

  let values = [];
  
  let entries = Object.entries(props.cardType).filter(item => {
    return item[1] === true;
  });

  for(var i = 0; i < entries.length; i++) {
    if(entries[i][1]){
      values.push(entries[i][0]
        // insert a space between camel case
        .replace(/([a-z])([A-Z])/, '$1 $2')
        // uppercase the first character
        .replace(/^./, function(str){ return str.toUpperCase(); })
        // add string 'and' if multiple card types selected
        .concat((entries.length > 1 && i < entries.length - 1) ? ' and ' : '')
      )
    }
  }

  let tag = values.length >= 2 ? 'Card Types' : 'Card Type';

  return (
    <div className='summary-section'>
      <p> {tag}: {values} </p>
    </div>
  );
};

export default CardType;
