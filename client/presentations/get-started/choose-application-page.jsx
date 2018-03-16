'use strict';

import React                    from 'react';
import Page                     from '../../containers/page.jsx';
import NavigationButtons        from '../navigation-buttons.jsx';
import RadioSelector            from '../radio-selector.jsx';
import RadioCollection          from '../radio-selector-collection.jsx';
import Accordion                from '../../containers/accordion.jsx';
import translations             from '../../i18n';
import Translation              from '../../i18n/translate-tag.jsx';
import {
  hideMain,
  getErrorMessage
} from '../../helpers/data/api';

const Form = (props) => {
  let locale = props.locale;
  let className = `choose-application-form ${hideMain(props)}`;
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
        <Translation tag='h2' className='question'>
          {translations[locale].beforeIntro.chooseDLorCDLPage.prompt}
        </Translation>
        <fieldset>
          <RadioCollection
            {...props}
            name= 'chooseApplication'
            errorMessage  = {  props.validations.chooseApplication() }
            selectedValue = { props.chooseApp }
          >
            <RadioSelector
              value       = 'iddl'
              text        = 'ID or driver license'
            />
            <RadioSelector
              value       = 'cdl'
              text        = 'Commercial driver license'
            />
          </RadioCollection>
        </fieldset>

        <Accordion
          id='choose-application-info'
          title="I don't know if I need a commercial driver license"
        >
        <Translation tag='p'>
          {translations[locale].beforeIntro.chooseDLorCDLPage.FAQdontKnowIfIneedCommercial.body.youWillNeedIf.header}
        </Translation>
          <ul className = 'bullet-list'>
            <Translation tag='li'>
              {translations[locale].beforeIntro.chooseDLorCDLPage.FAQdontKnowIfIneedCommercial.body.youWillNeedIf.values[0]}
            </Translation>
            <Translation tag='li'>
              {translations[locale].beforeIntro.chooseDLorCDLPage.FAQdontKnowIfIneedCommercial.body.youWillNeedIf.values[1]}
            </Translation>
            <Translation tag='li'>
              {translations[locale].beforeIntro.chooseDLorCDLPage.FAQdontKnowIfIneedCommercial.body.youWillNeedIf.values[2]}
            </Translation>
            <Translation tag='li'>
              {translations[locale].beforeIntro.chooseDLorCDLPage.FAQdontKnowIfIneedCommercial.body.youWillNeedIf.values[3]}
            </Translation>
            <Translation tag='li'>
              {translations[locale].beforeIntro.chooseDLorCDLPage.FAQdontKnowIfIneedCommercial.body.youWillNeedIf.values[4]}
            </Translation>
          </ul>
            <Translation tag='p'>
              {translations[locale].beforeIntro.chooseDLorCDLPage.FAQdontKnowIfIneedCommercial.body.youWontNeedIf.header}
            </Translation>
          <ul className = 'bullet-list'>
            <Translation tag='li'>
              {translations[locale].beforeIntro.chooseDLorCDLPage.FAQdontKnowIfIneedCommercial.body.youWontNeedIf.values[0]}
            </Translation>
            <Translation tag='li'>
              {translations[locale].beforeIntro.chooseDLorCDLPage.FAQdontKnowIfIneedCommercial.body.youWontNeedIf.values[1]}
            </Translation>
            <Translation tag='li'>
              {translations[locale].beforeIntro.chooseDLorCDLPage.FAQdontKnowIfIneedCommercial.body.youWontNeedIf.values[2]}
            </Translation>
            <Translation tag='li'>
              {translations[locale].beforeIntro.chooseDLorCDLPage.FAQdontKnowIfIneedCommercial.body.youWontNeedIf.values[3]}
            </Translation>
            <Translation tag='li'>
              {translations[locale].beforeIntro.chooseDLorCDLPage.FAQdontKnowIfIneedCommercial.body.youWontNeedIf.values[4]}
            </Translation>
          </ul>
          <Translation tag='p'>
            {translations[locale].beforeIntro.chooseDLorCDLPage.FAQdontKnowIfIneedCommercial.body.seeDMV}
          </Translation>
        </Accordion>

        <NavigationButtons
          onBack            = { props.onBack }
          errorMessage      = { props.validations.all() }
          locale            = { locale }
        />
      </form>
    </Page>
  )
};

export default Form;
