'use strict';

import React                from 'react';
import NavigationButtons    from '../../navigation-buttons.jsx';
import Page                 from '../../../containers/page.jsx';
import MedicalCondition     from '../../my-history/medical-history/medical-condition-info.jsx';
import EnterMedicalInfo     from '../../my-history/medical-history/enter-medical-info.jsx';
import { hasMedical }       from '../../../helpers/data/my-history';
import translations         from '../../../i18n';
import Translate            from '../../../i18n/translate-tag.jsx';

const MedicalHistoryPage = (props) => {
  let locale = props.locale;
  return (
    <Page
      {...props}
      sectionKey='myHistory'
    >
      <form onSubmit    = {props.onSubmit} className='medical-history-form'>
        <h3 className='translation-missing'>Please review the information below, then truthfully answer the question at the end of this page.</h3>
        <h4 className='translation-missing'>The following conditions that may affect your ability to operate a motor vehicle safely include, but are not limited to:</h4>
        <ul className='medical-history bullet-list translation-missing'>
          <li>Loss of consciousness</li>
          <li>Episode of marked confusion caused by
          any condition which may bring about
          recurring lapses</li>
          <li>Disease, disorder, or disability
          (examples of these are epilepsy,
           diabetes, stroke, cataracts,
           Parkinson’s disease)</li>
           <li>Vision changes or decrease due to
           cataracts, macular degeneration,
           diabetic retinopathy, glaucoma,
           retinitis pigmentosa, or other
           progressive condition.</li>
           <li>Alcohol, drug abuse, or related health problems.</li>

        </ul>

        <h2 className='question translation-missing'>Within the last three years, have you had or experienced any medical conditions that could affect your ability to safely operate a motor vehicle?</h2>
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
