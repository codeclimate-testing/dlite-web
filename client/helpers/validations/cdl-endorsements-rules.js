'use strict';

import errorMessages  from '../../presentations/error-messages';
import { hasValue }   from '../data/validations';
import translations   from '../../i18n';

const needEndorsement = (props) => {
  let locale  = props.locale;
  let value   = props.cdlEndorsements.needEndorsement;
  let errors  = [];
  if (!hasValue(value)) {
    errors = [translations[locale].errorMessages.needEndorsement]
  }
  return errors;
};


const endorsementType = (props) => {
  if(props.cdlEndorsements.needEndorsement !== 'Yes') { return []; }
  let locale  = props.locale;
  let value   = props.cdlEndorsements.type;
  let errors  = [];
  if (!hasValue(value)) {
    errors = [translations[locale].errorMessages.endorsement]
  }
  return errors;
};

export default {
  endorsementType: endorsementType,
  needEndorsement: needEndorsement
};
