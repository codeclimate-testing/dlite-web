
'use strict';

import React from 'react';
import SelectorCollection      from '../selector-collection.jsx';
import HomeLink                from '../home-link.jsx';
import ContinueButton          from '../continue-button.jsx';

const donateOrgan = ['Yes', 'No']
const voluntaryContribution = ['$2 voluntary contribution to support and promote organ and tissue donation', 'No donation']

const Form = (props) => {
  return (
    <div>
      <HomeLink />

      <form onSubmit={ props.onSubmit } className='organ-form'>
      <h4>Do you want to participate in organ and tissue donation?</h4>
        <div className='inner-bottom'>
          <SelectorCollection
            name='donate'
            values={donateOrgan}
            onChange={ props.onChange }
            selectedValue={ props.organ.donate }
          />

          <h4>Do you want to make a voluntary contribution to support and promote organ and tissue donation?</h4>
          <SelectorCollection
            name='contribute'
            values={voluntaryContribution}
            onChange={ props.onChange }
            selectedValue={ props.organ.contribute }
          />
        </div>

        <ContinueButton disabled={props.continueDisabled}/>
      </form>
    </div>
  );
};

export default Form;
