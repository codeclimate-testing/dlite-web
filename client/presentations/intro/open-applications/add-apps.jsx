'use strict';

import React                  from 'react';
import Translator             from '../../../i18n/translator-tag.jsx';
import PageSummaryLink        from '../../../containers/page-summary-link.jsx';
import { hasValue }           from '../../../helpers/data/validations';

export const AddApps = (props) => {
  return (
    <div>
      <Translator
        tag             = 'p'
        translationPath = 'beforeIntro.idMeReturnPage.youCanStartNewApp'
      />

      <fieldset role='group' aria-label='add application' key='addApps' className='addApp summary-section'>

        <div className='id-and-license'>
          <Translator
            tag = 'h4'
            className='question'
            translationPath = 'beforeIntro.chooseDLorCDLPage.answerIDorDL'
          />

          <PageSummaryLink
            editKey='legalName'
            addIcon = { true }
            newApp  = { true }
            flow = ''
          />
        </div>

        <div className='cdl'>
          <Translator
            tag='h4'
            className='question'
            translationPath='beforeIntro.chooseDLorCDLPage.answerCDL'
          />

          <PageSummaryLink
            editKey = 'cdlLegalName'
            addIcon = { true }
            newApp  = { true }
            flow    = ''
          />
        </div>
      </fieldset>
    </div>
  )
}
