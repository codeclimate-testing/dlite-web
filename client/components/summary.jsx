'use strict';

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

class Summary extends Component {
  
  constructor(props, context){
    super(props, context);    
  }

  render() {    
    if(!this.props.names) {
      return (
        <div className='summary-page'>
          <Link to='/' >Back to application</Link>
          <p>No information has been entered yet</p>
        </div>
      );  
    }

    return (
      <div>
        <Link to='/' >Back to application</Link>
        <p> First Name: { this.props.names.first} </p>
        <p> Middle Name: { this.props.names.middle} </p>
        <p> Last Name: { this.props.names.last} </p>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    names: state.names
  };
}

export default connect(mapStateToProps)(Summary);
