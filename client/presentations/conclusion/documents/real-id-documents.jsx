'use strict';

import React                from 'react';
import { gettingRealID }    from '../../../helpers/data/real-id';
import Translator           from '../../../i18n/translator-tag.jsx';


const realIDInformationPage = 'https://www.dmv.ca.gov/portal/dmv/detail/realid';
const caLicenseRequirements = 'https://www.dmv.ca.gov/portal/dmv/detail/pubs/brochures/fast_facts/ffdl05#true'
const ab60Checklist     = 'https://www.dmv.ca.gov/portal/dmv/detail/online/ab60_checklist';
const legalPresenceList = 'https://www.dmv.ca.gov/portal/dmv/detail/dl/dl_info#BDLP';


const RealIdDocuments = (props) => {

  if (gettingRealID(props)){
    return (
      <div key='real-id-documents'>
        <Translator
          tag             = 'h4'
          className       = 'real-id-documents'
          translationPath = 'newExtracted.conclusion.documents.realIdDocuments.title'
        />
        <Translator
          tag             = 'p'
          translationPath = 'newExtracted.conclusion.documents.realIdDocuments.explanation'
        />
        <Translator
          tag             = 'p'
          translationPath = 'newExtracted.conclusion.documents.requiredDocuments.title'
        />
        <ul className='bullet-list'>
          <Translator
            tag             = 'li'
            translationPath = 'newExtracted.conclusion.documents.requiredDocuments.values.0'
          />
          <Translator
            tag             = 'li'
            translationPath = 'newExtracted.conclusion.documents.requiredDocuments.values.1'
          />
        </ul>
        <Translator
          tag             = 'p'
          translationPath = 'newExtracted.conclusion.documents.requiredDocuments.proof'
        />
      </div>
      );
  } else {
    return (
      <div key='legal-presence-documents'>
        <Translator
          tag             = 'h4'
          className       = 'legal-presence-documents'
          translationPath = 'newExtracted.conclusion.documents.requiredDocuments.legalPresence.title'
        />
        <Translator
          tag             = 'p'
          translationPath = 'newExtracted.conclusion.documents.requiredDocuments.legalPresence.explanation'
        />
      </div>
      )
  }
};

export default RealIdDocuments;
