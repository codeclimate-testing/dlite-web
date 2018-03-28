'use strict';

import React            from 'react';
import Presentation     from '../../../presentations/conclusion/appointment-prep-page.jsx';
import { connect }      from 'react-redux';



const Page = (props) => {
  return (
    <Presentation
      {...props}
    />
  )
};

function mapStateToProps(state) {
  return {
    id          : state.application.id
  }
};

export default connect(mapStateToProps)(Page);


