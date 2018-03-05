'use strict'

import React                    from 'react';
import Page                     from '../../containers/page.jsx';
import NavigationButtons        from '../navigation-buttons.jsx';
import Accordion                from '../../containers/accordion.jsx';
import translations             from '../../i18n';
import { convertToHtml }        from '../../i18n/convert-to-html.jsx';
import MessageBox               from '../message-box.jsx';

const Form = (props) => {
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
    <form onSubmit  = { props.onSubmit } className='what-you-can-do-page' >
      <div className='apply-cdl'/>
      <h3 className='translation-missing'>On this website, you can:</h3>
      <ul>
        <li className='translation-missing'>
          <div className='unit icon card new'/>
          <b>Apply</b> for commercial Driver driver license
        </li>
        <li className='translation-missing'>
          <div className='unit icon card renew'/>
          <b>Renew or replace</b> your CDL
        </li>
        <li className='translation-missing'>
          <div className='unit icon card change'/>
          <b>Correct or update</b> your CDL
         </li>
      </ul>

      <p>When you submit this application, we will give you a list of required documents. You must go to a DMV office with these documents to finish your application.</p>

      <MessageBox className='info'>
      <div>
        <p className='translation-missing'><b>Do not use this online application if:</b></p>
        <ul className='bullet-list'>
        <li className='translation-missing'>You do not have an email address and phone number. These are required to fill this out from home.</li>
        <li className='translation-missing'>You only want an Ambulance, VTT, or HAM certificate for your CDL.</li>
        <li className='translation-missing'>You are in a confidential address program or in Safe at Home.</li>
        </ul>
        <p>Instead, <a href="https://www.dmv.ca.gov/portal/dmv/dmv/onlinesvcs/appointment" target="_blank">make an appointment</a> to visit your local DMV office.</p>
      </div>
      </MessageBox>

      <Accordion
          id='apply-cdl'
          title="I need to do something else"
        >
          {convertToHtml('p', 'You <b>cannot</b> use this application to:')}
          <ul className = 'bullet-list'>
            {convertToHtml('li', 'Update your medical certificate')}
            {convertToHtml('li', 'Update your Self-Certification')}
            {convertToHtml('li', 'Get copies of your driving record')}
            {convertToHtml('li', 'Report an accident')}
            {convertToHtml('li', 'Schedule a drive test')}
          </ul>
        </Accordion>


      <NavigationButtons {...props} />
      </form>
    </Page>
  )
};

export default Form;
