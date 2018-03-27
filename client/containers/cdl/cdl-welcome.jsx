'use strict';

import React                  from 'react';
import connectForm            from '../../helpers/connect-form';
import handlers               from '../../helpers/handlers';
import Presentation           from '../../presentations/cdl/cdl-page.jsx';

const Page = (props) => {
  let validations       = {
    isValid: () => true
  };
  let onSubmit          =   handlers.navigateOrShowErrors('cdl', props, validations);
  let onBack            =   handlers.navigateOnBack(props);

  return (
    <Presentation
      {...props}
      onSubmit = { onSubmit }
      onBack = {onBack}
    />
  );
};

function mapStateToProps(state) {
  return {
    focused:      state.ui.focus
  };
};

export default connectForm(mapStateToProps, null, Page);