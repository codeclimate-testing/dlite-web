'use strict';

import React                    from 'react';
import Page                     from '../../containers/page.jsx';
import NavigationButtons        from '../navigation-buttons.jsx';
import radioYesNoGroup          from '../radio-yes-no-group.jsx';
import RadioCollection          from '../radio-selector-collection.jsx';

const Form = (props) => {
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <form onSubmit = {props.onSubmit} className='cdl-class-m'  >
        <h2 className='question'>Do you need a motorcycle (Class M) on your CDL?</h2>
          <fieldset role='group' aria-label='Motorcycle class choice'>
          <RadioCollection
            {...props}
            name  = 'classM'
            selectedValue = { props.classM }
            errorMessage  = { props.validations.select() }
          >
            { radioYesNoGroup(props.locale) }
          </RadioCollection>
        </fieldset>

        <NavigationButtons
          {...props}
          errorMessage   = { props.validations.all() }
      />
      </form>
    </Page>
  )
};

export default Form;
