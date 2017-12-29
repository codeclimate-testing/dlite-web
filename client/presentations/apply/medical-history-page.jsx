'use strict';

import React                from 'react';
import NavigationButtons    from '../navigation-buttons.jsx';
import Page                 from '../../containers/page.jsx';
import MedicalCondition     from './medical-history/medical-condition-info.jsx';
import EnterMedicalInfo     from './medical-history/enter-medical-info.jsx';

const MedicalHistoryPage = (props) => {
  return (
    <Page 
      {...props}
      sectionKey='myHistory'
    >
      <form onSubmit    = {props.onSubmit} className='medical-history-form'>
        <MedicalCondition {...props}
          selectedValue = {props.medicalHistory.hasMedicalCondition}
        />
        <br></br>
        <EnterMedicalInfo {...props}
        />
        <NavigationButtons {...props}/>
      </form>
    </Page>
  )
};

export default MedicalHistoryPage;
