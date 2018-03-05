'use strict';

import React                from 'react';
import Accordion            from '../../containers/accordion.jsx';
import Page                 from '../../containers/page.jsx';
import SummaryForm          from '../../presentations/conclusion/summary/summary-form.jsx';
import Content              from './summary/body.jsx';

const SummaryPage = (props) =>{
  return (
    <Page
      {...props}
      sectionKey = 'summary'
    >
      <SummaryForm
        {...props}
      >
        <Content
          {...props}
        />
      </SummaryForm>
    </Page>
  );
};

export default SummaryPage;
