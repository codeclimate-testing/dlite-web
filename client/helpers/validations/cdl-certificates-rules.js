'use strict';

import errorMessages  from '../../presentations/error-messages';
import { hasValue }   from '../data/validations';

const needCertificates = (props) => {
  let value   = props.cdlCertificates.needCertificates;
  let errors  = [];
  if (!hasValue(value)) {
    errors = ['errorMessages.applicationActionMissing']
  }
  return errors;
};

const certificatesType = (props) => {
  if(props.cdlCertificates.needCertificates !== 'Yes') { return []; }
  let value   = props.cdlCertificates.type;
  let errors  = [];
  if (!hasValue(value)) {
    errors = ['errorMessages.selectionMissing']
  }
  return errors;
};

export default {
  certificatesType: certificatesType,
  needCertificates: needCertificates
};