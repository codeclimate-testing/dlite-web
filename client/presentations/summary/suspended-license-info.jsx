'use strict';

import React from "react";
import * as dataPresent from '../../helpers/data-present';

const SuspendedLicenseInfo = (props) => {
  if (!dataPresent.suspendedLicenseInfo(props.suspendedLicenseInfo)) { return null; }

  let date        = props.suspendedLicenseInfo.month + '/' +
                    props.suspendedLicenseInfo.day + '/' +
                    props.suspendedLicenseInfo.year;

  let reason      = props.suspendedLicenseInfo.reason;

  let isSuspended = props.suspendedLicenseInfo.isSuspended;
  let content = []

  if(dataPresent.value(props.suspendedLicenseInfo.isSuspended)){
    content.push(<p key='decision'>Have suspended license: {isSuspended}</p>);
  }

  if(dataPresent.date(props.suspendedLicenseInfo)){
    content.push(<p key='date'>Suspended license date: {date}</p>);
  }

  if(dataPresent.value(props.suspendedLicenseInfo.reason)){
    content.push(<p key='reason'>Suspended license reason: {reason} </p>);
  }

  return (
    <div className='summary-section'>
      {content}
    </div>
  );
};

export default SuspendedLicenseInfo;
