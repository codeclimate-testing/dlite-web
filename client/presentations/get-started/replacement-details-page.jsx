'use strict';

import React              from 'react';
import ReplacementReason  from './replacement-details/replacement-reason-form.jsx';
import Page               from '../../containers/page.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import translations       from '../../i18n';
import { convertToHtml }  from '../../i18n/convert-to-html.jsx';

const Form = (props) => {
  let locale = props.locale;
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='choose-replacement-detail'>
        {convertToHtml('h2', translations[locale].intro.replacementReasonPage.prompt, 'question')}
        {convertToHtml('p', translations[locale].intro.replacementReasonPage.explanation)}
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
