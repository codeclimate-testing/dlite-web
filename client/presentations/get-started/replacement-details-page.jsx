'use strict';

import React              from 'react';
import ReplacementReason  from './replacement-details/replacement-reason-form.jsx';
import Page               from '../../containers/page.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import translations       from '../../i18n';
import Translation        from '../../i18n/translate-tag.jsx';

const Form = (props) => {
  let locale = props.locale;
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='choose-replacement-detail'>
        <Translation tag='h2' className='question'>
          {translations[locale].intro.replacementReasonPage.prompt}
        </Translation>
        <Translation tag='p'>
          {translations[locale].intro.replacementReasonPage.explanation}
        </Translation>
        <form onSubmit={ props.onSubmit }>
          <ReplacementReason {...props} />
          <NavigationButtons
            errorMessage = { props.validations.reason() }
            {...props}
          />
        </form>
      </div>
    </Page>
  );
};

export default Form;
