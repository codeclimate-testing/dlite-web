'use strict';

import React              from "react";
import { hasValue }       from '../../helpers/data/validations';

const Designation = (props) => {
  if(!hasValue(props.realID.realIdDesignation)){ return null; }
  return <p>Real ID Designation: {props.realID.realIdDesignation}</p>
}

const RealID = (props) => {
  if (!hasValue(props.realID.getRealID)) { return null; }

  return (
    <div className='summary-section'>
      <p>Real ID: {props.realID.getRealID}</p>
      <Designation realID={props.realID}/>
    </div>
  );
};

export default RealID;
