'use strict';

import React from 'react';

import SelectorCollection from '../../selector-collection.jsx';
import { hasMultipleCards } from '../../../helpers/data/cards';

const DLHeader = (props) => {
  return <h4>Do you plan on using your Driver License to fly?</h4>;
}

const IDHeader = (props) => {
  return <h4>Do you plan on using your ID to fly?</h4>;
}

const MultiCardHeader = (props) => {
  return <h4>Do you plan on using one of your cards to fly?</h4>;
};

const Header = (props) => {
  const multiCard = hasMultipleCards(props);
  if (multiCard)          { return <MultiCardHeader {...props} />; }
  if (props.cardType.DL)  { return <DLHeader {...props} />; }
  return <IDHeader {...props} />;
};

const FormSection = (props) => {
  return (
    <div className='real-id-form'>
      <Header {...props} />

      <h5>
        As of October 1, 2020, you will need a federally compliant driver license or ID card to fly
        <b>within</b> the United States.
      </h5>

      <div className='row inner-bottom'>
        <SelectorCollection
          name='getRealID'
          values={['Yes', 'No']}
          onChange={props.onChange}
          selectedValue={props.selectedValue}
        />
      </div>
    </div>
  )
};

export default FormSection;
