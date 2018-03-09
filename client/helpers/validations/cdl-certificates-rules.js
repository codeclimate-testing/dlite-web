'use strict';

import errorMessages  from '../../presentations/error-messages';
import { hasValue }   from '../data/validations';
import translations   from '../../i18n';

const needCertificates = (props) => {
  let locale  = props.locale;
  let value   = props.cdlCertificates.needCertificates;
  let errors  = [];
  if (!hasValue(value)) {
    errors = [translations[locale].errorMessages.applicationActionMissing]
  }
  return errors;
};

const certificatesType = (props) => {
  if(props.cdlCertificates.needCertificates !== 'Yes') { return []; }
  let locale  = props.locale;
  let value   = props.cdlCertificates.type;
  let errors  = [];
  if (!hasValue(value)) {
    errors = [translations[locale].errorMessages.selectionMissing]
  }
  return errors;
};

export default {
  certificatesType: certificatesType,
  needCertificates: needCertificates
};