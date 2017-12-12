'use strict';

import React from 'react';

import Page                    from '../page.jsx';
import RadioSelectorCollection from '../radio-selector-collection.jsx';
import NavigationButtons       from '../navigation-buttons.jsx';


const OptOutRadioFormContainer = (props) => {
  return (
    <Page
      {...props}
      pageTitle={props.pageTitle}
      sectionNumber='3'
      sectionName={props.sectionName}
    >
      <div>
        <h4>Which best describes you?</h4>
        <form onSubmit={ props.onSubmit } className='opt-out-form'>
          <RadioSelectorCollection
            name='optOut'
            onChange={props.onChange}
            onBlur={props.onBlur}
            onFocus={props.onFocus}
            selectedValue={ props.selectedValue }
            focused={props.focused}
          >
            {props.children}
          </RadioSelectorCollection>

          <NavigationButtons {...props} />
        </form>
      </div>
    </Page>
  );
};

export default OptOutRadioFormContainer;


