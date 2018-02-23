'use strict';

import React, { Component }     from 'react';
import Presentation             from '../../presentations/cdl/summary-page.jsx';
import { mergePropsGenerator }  from '../../helpers/merge-props';

const Page = props =>{
  return (
    <Presentation {...props} />
  );
};

function mapStateToProps(state) {
  return state;
};

export default mergePropsGenerator(mapStateToProps, null, 'useAPI', Page);