'use strict';

import React        from 'react';
import { connect }  from 'react-redux';
import { Link }     from 'react-router-dom';
import uuidv1       from 'uuid/v1';

import { TYPES }                from '../../actions';
import HomeLink                 from '../../presentations/home-link.jsx';
import alicePath                from '../../helpers/alice-path';

const Intro = (props) => {

  const linkAddress = '/about-me/legal-name';

  const createApplicationID = () =>{
    props.dispatch({
      type: TYPES.CREATE_APPLICATION_ID,
      payload: { value: uuidv1() }
    });
  }

  return (
    <div>
      <HomeLink />

      <div className='intro-info'>
        <h3>Welcome to the Online Driver License application!</h3>

        <h4>This form is broken in 4 sections:</h4>
        <ol className='decimal-list'>
          <li>My Basics</li>
          <li>License History</li>
          <li>Voluntary Services</li>
          <li>Voter Registration</li>
        </ol>
        <p>The DMV cares about your privacy. We will protect your data.</p>

        <hr />
        <p>The online form takes most customers<br />
          <b>10 minutes</b></p>

        <div className='shadow-container'>
          <Link to={alicePath(linkAddress)} className='link-button button' onClick={createApplicationID}>Get Started</Link>
        </div>

      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return state.application;
}

export default connect(mapStateToProps)(Intro);
