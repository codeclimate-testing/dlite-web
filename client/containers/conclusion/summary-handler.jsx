'use strict';

import React, { Component }     from 'react';
import Presentation             from '../../presentations/conclusion/summary-page.jsx';
import { mergePropsGenerator }  from '../../helpers/merge-props';

const Page = props =>{
  return (
    <Presentation {...props} />
  );
};

function mapStateToProps(state) {
  return state;
};

export default mergePropsGenerator(mapStateToProps, null, 'saveApplication', Page);
