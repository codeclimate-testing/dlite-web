'use strict';

import React                  from 'react';
import connectForm            from '../../helpers/connect-form';
import handlers               from '../../helpers/handlers';
import { updateCDLChanges }   from '../../actions/index';
import Presentation           from '../../presentations/cdl/correct-or-update-page.jsx';
import { ChangeValidator }    from '../../helpers/validations';
import translations           from '../../i18n';


const Page = (props) => {
  let locale            = props.locale;
  let validations       = new ChangeValidator(Object.assign(props.cardChanges, {locale}), props.validations, 'applicationActionMissing');
  let onSubmit          = handlers.navigateOrShowErrors('cdlChanges', props, validations);
  let onBack            = handlers.navigateOnBack(props, validations);

  return (
    <Presentation
      {...props}
      onSubmit          = { onSubmit }
      onBack            = { onBack }
      validations       = { validations }
      translations      = { translations }
    />
  )
};

function mapStateToProps(state) {
  return {
    cardChanges         : state.cdl.cardChanges,
    cardAction          : state.application.cardAction,
    focused             : state.ui.focus,
    validations         : state.ui.validations,
    locale              : state.ui.locale
  };
};

export default connectForm(mapStateToProps, updateCDLChanges, Page);
