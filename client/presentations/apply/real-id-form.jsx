'use strict';

import React from 'react';

import HomeLink                 from '../home-link.jsx';
import SelectorCollection       from '../selector-collection.jsx';
import NavigationButtons        from '../navigation-buttons.jsx';

const VALUES = ['Yes', 'No'];

const Form = (props) => {
  document.title = props.pageTitle;

  return (
    <div className='real-id-form'>
      <HomeLink />
      <h3>1 &raquo; My Basics</h3>
      <hr></hr>

      <h4>Do you plan on using your {'{card type}'} to fly?</h4>
      <h5>As of October 1, 2020, you will need a federally compliant driver license or ID card to fly <b>within</b> the United States.</h5>

      <form onSubmit={ props.onSubmit } >
        <div className='row inner-bottom'>
            <SelectorCollection
                name='getRealID'
                values={VALUES}
                onChange={ props.onChange }
                selectedValue={ props.realID.getRealID }
            />

            <div className='unit spacer' />
        </div>

        <NavigationButtons
          {...props}
        />
      </form>
    </div>
  )
};

export default Form;
