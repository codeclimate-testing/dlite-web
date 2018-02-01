'use strict';

import React              from 'react';
import RadioForm          from './correct-or-update/radio-form.jsx';
import UpdateForm         from './correct-or-update/update-form.jsx';
import OtherText          from './correct-or-update/text-form.jsx';
import Page               from '../../containers/page.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import { IDorDL }         from '../../helpers/data/card-type';
import {
  otherIsSelected,
  hasSpecifiedChange
}  from '../../helpers/data/card-actions';

const text = {
  ID: 'You may need to pay a fee for a new ID with these updates',
  DL: 'You may need to pay a fee for a new DL with these updates'
};

const Form = (props) => {
  let tag           = text[IDorDL(props)];

  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='choose-card-change'>
        <h2 className='question'>What would you like to do?</h2>
        <p>
          {tag}
        </p>
        <form onSubmit={ props.onSubmit }>
          <RadioForm {...props} />
          <UpdateForm
            {...props}
            showIf    = { hasSpecifiedChange(props) }
          />
          <OtherText
            {...props}
            showIf    = { otherIsSelected(props) }
          />
          <NavigationButtons
            {...props}
            errorMessage = { props.validations.all() }
          />
        </form>
      </div>
    </Page>
  )
};

export default Form;
