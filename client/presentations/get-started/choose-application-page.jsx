'use strict';

import React                    from 'react';
import Page                     from '../../containers/page.jsx';
import NavigationButtons        from '../navigation-buttons.jsx';
import RadioSelector            from '../radio-selector.jsx';
import RadioCollection          from '../radio-selector-collection.jsx';
import Accordion                from '../../containers/accordion.jsx';
import translations             from '../../i18n';
import { convertToHtml }        from '../../i18n/convert-to-html.jsx';
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
      {convertToHtml('h2', 'What are you here for?' , 'question')}
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
          {convertToHtml('p', '<b>You will need a CDL if you plan to operate a vehicle that: </b>')}
          <ul className = 'bullet-list'>
            {convertToHtml('li', 'Has a gross vehicle weight rating (GVWR) of 26,001+ pounds.')}
            {convertToHtml('li', 'Is designed, used, or maintained for carrying more than 10 persons, including the driver.')}
            {convertToHtml('li', 'Tows a vehicle or trailer which has a GVWR of 10,001+ pounds.')}
            {convertToHtml('li', 'Transports hazardous materials which require placards.')}
            {convertToHtml('li', 'Tows any combination of two trailers or a vehicle and trailer.')}
          </ul>

          {convertToHtml('p', '<b>You will not need a CDL if you only expect to drive: </b>')}
          <ul className = 'bullet-list'>
            {convertToHtml('li', 'Recreational vehicles (5th wheel travel trailers and motor homes).')}
            {convertToHtml('li', 'Firefighting equipment.')}
            {convertToHtml('li', 'Class C agricultural hazardous materials transporters.')}
            {convertToHtml('li', 'Department of Defense employees who are in uniform and driving Department of Defense vehicles.')}
            {convertToHtml('li', 'Some Farm vehicles.')}
          </ul>

          {convertToHtml('p', 'Detailed information is available at <a href="https://dmv.ca.gov" target="_blank">dmv.ca.gov</a>')}
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