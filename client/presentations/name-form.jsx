'use strict';

import React from 'react';
import {Link} from 'react-router-dom';

const LegalNameForm = (props) => {
  return (
    <div className='legal-name-form'>
      <Link to='/'>Back to application</Link>
      <form onSubmit={props.onSubmitNames}>
        <label htmlFor="firstName">First Name</label>
        <div className="input-container">
          <input type="text" id="firstName" name="firstName" placeholder="First Name" onChange={props.onChangeNames} value={props.state.names.first}/>
        </div>
        <label htmlFor="middleName">Middle Name</label>
        <div className="input-container">
          <input type="text" id="middleName" name="middleName" placeholder="Middle Name" onChange={props.onChangeNames} value={props.state.names.middle}/>
        </div>
        <label htmlFor="lastName">Last Name</label>
        <div className="input-container">
          <input type="text" id="lastName" name="lastName" placeholder="Last Name" onChange={props.onChangeNames} value={props.state.names.last}/>
        </div>
        <input type="submit" name="submitNamesButton" value="Submit" />
      </form>
    </div>
  )
};

export default LegalNameForm;
