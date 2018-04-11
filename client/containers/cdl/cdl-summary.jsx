'use strict';

import React                    from 'react';
import { connect }              from 'react-redux';
import Presentation             from '../../presentations/cdl/summary-page.jsx';
import { saveApplication }      from '../../helpers/handlers/save-application';

const Page = (props) =>{
  let onSubmit = props.onSubmit(props, 'cdl');

  return (
    <Presentation
      {...props}
      onSubmit = {onSubmit}
    />
  );
};

function mapStateToProps(state) {
  return state;
};

function mapDispatchToProps(dispatch){
  const onSubmit = saveApplication(dispatch);
  return {
    onSubmit
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
