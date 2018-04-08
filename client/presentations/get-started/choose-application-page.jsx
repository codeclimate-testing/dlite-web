'use strict';

import React                    from 'react';
import Page                     from '../../containers/page.jsx';
import NavigationButtons        from '../navigation-buttons.jsx';
import RadioSelector            from '../radio-selector.jsx';
import RadioCollection          from '../radio-selector-collection.jsx';
import Accordion                from '../../containers/accordion.jsx';
import Translator               from '../../i18n/translator-tag.jsx';
import {
  getErrorMessage
} from '../../helpers/data/api';

const Form = (props) => {
  //TODO: Translation key for accordian title
  let className = `choose-application-form`;
  return (
    <Page
      {...props}
      sectionKey='intro'
    >

      <div className={props.server.apiStatus}/>

      { (props.server.apiStatus === 'error') &&
        <p className = 'error-message'> {getErrorMessage(props)} </p>
      }

      <form onSubmit = { props.onSubmit } className={className}>
        <Translator
          tag             = 'h2'
          className       = 'question'
          translationPath = 'beforeIntro.chooseDLorCDLPage.prompt'
        />
        <fieldset role='group' aria-label='Which application choice'>
          <RadioCollection
            {...props}
            name= 'chooseApplication'
            errorMessage  = {  props.validations.chooseApplication() }
            selectedValue = { props.chooseApp }
          >
            <RadioSelector value='iddl'>
              <Translator
                tag             = 'span'
                translationPath = 'beforeIntro.chooseDLorCDLPage.answerIDorDL'
              />
            </RadioSelector>
            <RadioSelector value='cdl'>
              <Translator
                tag             = 'span'
                translationPath = 'beforeIntro.chooseDLorCDLPage.answerCDL'
              />
            </RadioSelector>
          </RadioCollection>
        </fieldset>

        <Accordion
          id    = 'choose-application-info'
          title = 'newApproved.beforeIntro.chooseApplicationPage.doINeedCommercial'
        >
        <Translator
          tag             = 'p'
          translationPath = 'beforeIntro.chooseDLorCDLPage.FAQdontKnowIfIneedCommercial.body.youWillNeedIf.header'
        />
          <ul className = 'bullet-list'>
            <Translator
              tag             = 'li'
              translationPath = 'beforeIntro.chooseDLorCDLPage.FAQdontKnowIfIneedCommercial.body.youWillNeedIf.values.0'
            />
            <Translator
              tag             = 'li'
              translationPath = 'beforeIntro.chooseDLorCDLPage.FAQdontKnowIfIneedCommercial.body.youWillNeedIf.values.1'
            />
            <Translator
              tag             = 'li'
              translationPath = 'beforeIntro.chooseDLorCDLPage.FAQdontKnowIfIneedCommercial.body.youWillNeedIf.values.2'
            />
            <Translator
              tag             = 'li'
              translationPath = 'beforeIntro.chooseDLorCDLPage.FAQdontKnowIfIneedCommercial.body.youWillNeedIf.values.3'
            />
            <Translator
              tag             = 'li'
              translationPath = 'beforeIntro.chooseDLorCDLPage.FAQdontKnowIfIneedCommercial.body.youWillNeedIf.values.4'
            />
          </ul>
            <Translator
              tag             = 'p'
              translationPath = 'beforeIntro.chooseDLorCDLPage.FAQdontKnowIfIneedCommercial.body.youWontNeedIf.header'
            />
          <ul className = 'bullet-list'>
            <Translator
              tag             = 'li'
              translationPath = 'beforeIntro.chooseDLorCDLPage.FAQdontKnowIfIneedCommercial.body.youWontNeedIf.values.0'
            />
            <Translator
              tag             = 'li'
              translationPath = 'beforeIntro.chooseDLorCDLPage.FAQdontKnowIfIneedCommercial.body.youWontNeedIf.values.1'
            />
            <Translator
              tag             = 'li'
              translationPath = 'beforeIntro.chooseDLorCDLPage.FAQdontKnowIfIneedCommercial.body.youWontNeedIf.values.2'
            />
            <Translator
              tag             = 'li'
              translationPath = 'beforeIntro.chooseDLorCDLPage.FAQdontKnowIfIneedCommercial.body.youWontNeedIf.values.3'
            />
            <Translator
              tag             = 'li'
              translationPath = 'beforeIntro.chooseDLorCDLPage.FAQdontKnowIfIneedCommercial.body.youWontNeedIf.values.4'
            />
          </ul>
          <Translator
            tag             = 'p'
            translationPath = 'beforeIntro.chooseDLorCDLPage.FAQdontKnowIfIneedCommercial.body.seeDMV'
          />
        </Accordion>

        <NavigationButtons
          onBack            = { props.onBack }
          errorMessage      = { props.validations.all() }
        />
      </form>
    </Page>
  )
};

export default Form;
