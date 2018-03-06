'use strict';

import React                from 'react';
import NavigationButtons    from '../navigation-buttons.jsx';
import Page                 from '../../containers/page.jsx';
import MedicalCondition     from './medical-history/medical-condition-info.jsx';
import EnterMedicalInfo     from './medical-history/enter-medical-info.jsx';
import { hasMedical }       from '../../helpers/data/my-history';
import translations         from '../../i18n';
import Translate            from '../../i18n/translate-tag.jsx';

const MedicalHistoryPage = (props) => {
  return (
    <Page
      {...props}
      sectionKey='myHistory'
    >
      <form onSubmit    = {props.onSubmit} className='medical-history-form'>
        <Translate tag='h2' className='question'>
          {translations[props.locale].myHistory.medicalConditionsPage.pagePrompt}
        </Translate>

        <MedicalCondition {...props}
          selectedValue = {props.medicalHistory.hasMedicalCondition}
        />
        <EnterMedicalInfo
          {...props}
          showIf        = { hasMedical(props) }
        />
        <NavigationButtons
          {...props}
          errorMessage  = { props.validations.all() }
        />
      </form>
    </Page>
  )
};

export default MedicalHistoryPage;
