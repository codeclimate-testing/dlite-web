'use strict';

import React from 'react';

import SelectorCollection      from '../selector-collection.jsx';

const VALUES = ['Yes', 'No'];

const PrivilegeRemovedHistory = (props) => {
  document.title = props.pageTitle;
  return (
    <div className='is-suspended-license-form'>
      <h4>Have you ever had your driving privilege cancelled, refused, suspended, or revoked?</h4>
      <div className='inner-bottom'>
          <SelectorCollection
            name='isSuspended'
            values={VALUES}
            onChange={ props.onChange }
            selectedValue={ props.selectedValue }
          />
        </div>
      </div>
  );
};

export default PrivilegeRemovedHistory;
