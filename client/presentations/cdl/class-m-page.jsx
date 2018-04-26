'use strict';

import React                    from 'react';
import Page                     from '../../containers/page.jsx';
import NavigationButtons        from '../navigation-buttons.jsx';
import radioYesNoGroup          from '../radio-yes-no-group.jsx';
import RadioCollection          from '../radio-selector-collection.jsx';
import Translator               from '../../i18n/translator-tag.jsx';

const Form = (props) => {
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <form onSubmit = {props.onSubmit} className='cdl-class-m'  >
        <Translator
          tag             = 'h2'
          className       = 'question'
          translationPath = 'cdl.motorcyclePage.prompt'
          tabIndex        = '0'
        />
          <fieldset role='group' aria-label='Motorcycle class choice'>
          <RadioCollection
            {...props}
            name  = 'classM'
            selectedValue = { props.classM }
            errorMessage  = { props.validations.select() }
          >
            { radioYesNoGroup() }
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
