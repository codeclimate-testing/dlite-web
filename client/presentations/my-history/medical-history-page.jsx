'use strict';

import React                from 'react';
import NavigationButtons    from '../navigation-buttons.jsx';
import Page                 from '../../containers/page.jsx';
import MedicalCondition     from './medical-history/medical-condition-info.jsx';
import EnterMedicalInfo     from './medical-history/enter-medical-info.jsx';
import { hasMedical }       from '../../helpers/data/my-history';
import Translator           from '../../i18n/translator-tag.jsx';

const MedicalHistoryPage = (props) => {
  return (
    <Page
      {...props}
      sectionKey='myHistory'
    >
      <form onSubmit    = {props.onSubmit} className='medical-history-form'>
        <Translator
          tag             = 'h2'
          className       = 'question'
          translationPath = 'myHistory.medicalConditionsPage.pagePrompt'
          tabIndex        = '0'
        />

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
