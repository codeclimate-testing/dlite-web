'use strict';

import React from "react";
import * as dataPresent from '../../helpers/data-present';

const ExistingDlIDInfo = (props) => {

  if (!dataPresent.existingDLIDInfo(props.existingDLIDInfo)) { return null; }

  let date           = props.existingDLIDInfo.month + '/' +
                        props.existingDLIDInfo.day + '/' +
                        props.existingDLIDInfo.year;

  let DLIDNumber      = props.existingDLIDInfo.DLIDNumber;
  let issuedBy        = props.existingDLIDInfo.issuedBy;

  let content = []

  if(dataPresent.value(props.existingDLIDInfo.DLIDNumber)){
    content.push(<p key='decision'>Existing DL/ID number: {DLIDNumber}</p>);
  }

  if(dataPresent.value(props.existingDLIDInfo.issuedBy)){
    content.push(<p key='reason'>Existing DL/ID issued by: {issuedBy} </p>);
  }

  if(dataPresent.date(props.existingDLIDInfo)){
    content.push(<p key='date'>Existing DL/ID expiration date: {date}</p>);
  }

  return (
    <div className='summary-section'>
      {content}
    </div>
  );
};

export default ExistingDlIDInfo;
