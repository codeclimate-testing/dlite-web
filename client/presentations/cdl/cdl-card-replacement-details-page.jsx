
'use strict';

import React              from 'react';
import Page               from '../../containers/page.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import RadioSelector      from '../radio-selector.jsx';
import RadioCollection    from '../radio-selector-collection.jsx';
import Translator         from '../../i18n/translator-tag.jsx';

const Form = (props) => {
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='choose-replacement-detail'>
        <Translator
          tag             = 'h2'
          className       = 'question'
          translationPath = 'intro.replacementReasonPage.prompt'
        />
        <Translator
          tag             = 'p'
          translationPath = 'intro.replacementReasonPage.explanation'
        />
        <form onSubmit={ props.onSubmit }>
          <div className='row inner-buttom'>
            <fieldset role='group' aria-label='Reason for card replacement'>
              <RadioCollection
                {...props}
                name= 'reason'
                errorMessage = {props.validations.reason() }
                selectedValue = {props.cardReplacement.reason}
              >
                <RadioSelector value='lostOrStolen'>
                  <Translator tag = 'span' translationPath = 'intro.replacementReasonPage.values.0'/>
                </RadioSelector>

                <RadioSelector value='damaged'>
                  <Translator tag = 'span' translationPath = 'intro.replacementReasonPage.values.1' />
                </RadioSelector>

                <RadioSelector value='other'>
                  <Translator tag = 'span' translationPath = 'intro.replacementReasonPage.values.2' />
                </RadioSelector>

              </RadioCollection>
            </fieldset>
          </div>
          <NavigationButtons
            errorMessage = { props.validations.reason() }
            {...props}
          />
        </form>
      </div>
    </Page>
  );
};

export default Form;
