'use strict';

import React from 'react';
import {Link} from 'react-router-dom';

import alicePath from '../helpers/alice-path';

const LegalNameForm = (props) => {
  return (
    <div className='legal-name-form'>
      <Link to={ alicePath('/') }>Back to application</Link>
      <form onSubmit={props.onSubmit}>
        <label htmlFor="firstName">First Name</label>
        <div className="input-container">
          <input type="text" id="firstName" name="firstName" placeholder="First Name" onChange={props.onChange} value={props.legalName.firstName}/>
        </div>
        <label htmlFor="middleName">Middle Name</label>
        <div className="input-container">
          <input type="text" id="middleName" name="middleName" placeholder="Middle Name" onChange={props.onChange} value={props.legalName.middleName}/>
        </div>
        <label htmlFor="lastName">Last Name</label>
        <div className="input-container">
          <input type="text" id="lastName" name="lastName" placeholder="Last Name" onChange={props.onChange} value={props.legalName.lastName}/>
        </div>
        <input type="submit" name="submitNamesButton" value="Submit" />
      </form>
    </div>
  )
};

export default LegalNameForm;
