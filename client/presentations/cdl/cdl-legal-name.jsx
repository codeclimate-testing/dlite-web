'use strict'

import React                    from 'react';
import Page                     from '../../containers/page.jsx';
import NavigationButtons        from '../navigation-buttons.jsx';

const Form = (props) => {
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <NavigationButtons
        onBack = { props.onBack }
      />
    </Page>
  )
};

export default Form;