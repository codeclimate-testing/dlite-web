'use strict';

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

const Summary = (props) => {
  
  if(!props.names) {
    return (
      <div className='summary-page'>
        <Link to='/' >Back to application</Link>
        <p>No information has been entered yet</p>
      </div>
    );  
  }

  return (
    <div className='summary-page'>
      <Link to='/' >Back to application</Link>
      <p> First Name: { props.names.first} </p>
      <p> Middle Name: { props.names.middle} </p>
      <p> Last Name: { props.names.last} </p>
    </div>
  )
}

//Whatever is retured will show up as props in Summary
function mapStateToProps(state) {
  return {
    names: state.names
  };
}

export default connect(mapStateToProps)(Summary);
