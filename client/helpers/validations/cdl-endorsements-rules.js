'use strict';

import errorMessages  from '../../presentations/error-messages';
import { hasValue }   from '../data/validations';

const needEndorsement = (props) => {
  let value   = props.cdlEndorsements.needEndorsement;
  let errors  = [];
  if (!hasValue(value)) {
    errors = ['errorMessages.needEndorsement']
  }
  return errors;
};


const endorsementType = (props) => {
  if(props.cdlEndorsements.needEndorsement !== 'Yes') { return []; }
  let value   = props.cdlEndorsements.type;
  let errors  = [];
  if (!hasValue(value)) {
    errors = ['errorMessages.endorsement']
  }
  return errors;
};

export default {
  endorsementType: endorsementType,
  needEndorsement: needEndorsement
};
