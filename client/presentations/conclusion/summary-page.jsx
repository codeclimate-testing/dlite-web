'use strict'

import React                from 'react'
import Page                 from '../../containers/page.jsx';
import SummaryForm          from './summary/summary-form.jsx';
import Content              from './summary/body.jsx';

const SummaryPage = (props) => {
  return (
      <Page
        {...props}
        sectionKey  ='summary'
      >
        <SummaryForm
          {...props}
        >
          <Content
            {...props}
          />
        </SummaryForm>
      </Page>
  )
};

export default SummaryPage;
