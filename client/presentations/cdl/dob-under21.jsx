'use strict'

import React                    from 'react';
import MessageBox               from '../message-box.jsx';
import { showCDLUnder21 }       from '../../helpers/data/cdl';

const Form = (props) => {
  if (!showCDLUnder21(props)) { return null; }
  return (
    <MessageBox
      className = 'info'
    >
      <p className = 'translation-missing cdl-under-21'>
        Applicants under 21 years of age are not allowed to engage in interstate commerce or transport hazardous materials.
      </p>
    </MessageBox>
  );
};

export default Form;