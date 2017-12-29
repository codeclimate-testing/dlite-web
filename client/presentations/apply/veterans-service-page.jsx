'use strict';

import React                        from 'react';
import NavigationButtons            from '../navigation-buttons.jsx';
import Page                         from '../../containers/page.jsx';
import VeteransQuestionnaire        from './veterans-service/veterans-questionnaire-form.jsx';
import VeteransBenefits             from './veterans-service/veterans-benefits-form.jsx';
import VeteransPreviousDesignation  from './veterans-service/veterans-previous-designation-form.jsx';
import VeteransIdentifier           from './veterans-service/veterans-identifier-form.jsx';

const VeteransServicePage = (props) => {
  return (
    <Page 
      {...props}
      sectionKey='myHistory'
    >
      <form onSubmit    = {props.onSubmit} className='veterans-service-form'>
        <VeteransQuestionnaire {...props}
          selectedValue = {props.veteransService.isVeteran}
        />
        <br></br>
        <VeteransBenefits {...props}
          selectedValue = {props.veteransService.receiveBenefits}
        />
        <VeteransPreviousDesignation {...props}
          selectedValue = {props.veteransService.previouslyDesignated}
        />
        <VeteransIdentifier {...props}
          selectedValue = {props.veteransService.veteransIdentifier}
        />
        <NavigationButtons {...props}/>
      </form>
    </Page>
  )
};

export default VeteransServicePage;
