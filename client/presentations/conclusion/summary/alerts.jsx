'use strict';

import React              from 'react';
import { tooYoungForDL }  from '../../../helpers/data/youth';
import { getID }          from '../../../helpers/data/card-type';
import Translator         from '../../../i18n/translator-tag.jsx';

const DLAlert = () => {
  return (
    <Translator
      tag             = 'h4'
      className       = 'youth-license-notification'
      translationPath = 'newApproved.cdl.alerts.dlAlert'
    />
  );
};

const IDAlert = (props) => {
  if(!getID(props)) { return null; }
  return (
    <Translator
      tag             = 'h4'
      className       = 'youth-license-notification'
      translationPath = 'newApproved.cdl.alerts.idAlert'
    />
  );
};

const Alerts = (props) => {
  if (!tooYoungForDL(props)) { return null; }

  return (
    <div>
      <DLAlert/>
      <IDAlert
        cardType = {props.cardType}
      />
    </div>
  );
};

export default Alerts;
