'use strict';

import React                from 'react';
import NavigationButtons    from '../../navigation-buttons.jsx';
import Page                 from '../../../containers/page.jsx';
import MedicalCondition     from '../../my-history/medical-history/medical-condition-info.jsx';
import EnterMedicalInfo     from '../../my-history/medical-history/enter-medical-info.jsx';
import { hasMedical }       from '../../../helpers/data/my-history';
import Translator           from '../../../i18n/translator-tag.jsx';


const MedicalHistoryPage = (props) => {

  return (
    <Page
      {...props}
      sectionKey='myHistory'
    >
      <form onSubmit    = {props.onSubmit} className='medical-history-form'>
        <Translator
          tag             = 'h3'
          translationPath = 'newApproved.cdl.myHistory.medicalHistory.prompt'
        />
        <Translator
          tag             = 'h4'
          translationPath = 'newApproved.cdl.myHistory.medicalHistory.explanation'
        />
        <ul className='medical-history bullet-list'>
        <Translator
          tag             = 'li'
          translationPath = 'newApproved.cdl.myHistory.medicalHistory.values.0'
        />
        <Translator
          tag             = 'li'
          translationPath = 'newApproved.cdl.myHistory.medicalHistory.values.1'
        />
        <Translator
          tag             = 'li'
          translationPath = 'newApproved.cdl.myHistory.medicalHistory.values.2'
        />
        <Translator
          tag             = 'li'
          translationPath = 'newApproved.cdl.myHistory.medicalHistory.values.3'
        />
        <Translator
          tag             = 'li'
          translationPath = 'newApproved.cdl.myHistory.medicalHistory.values.4'
        />
        </ul>

        <Translator
          tag             = 'h2'
          className       = 'question'
          translationPath = 'newApproved.cdl.myHistory.medicalHistory.medicalConditions'
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
