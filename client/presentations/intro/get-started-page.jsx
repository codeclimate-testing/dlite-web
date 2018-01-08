'use strict';

import React        from 'react';

import Page         from '../../containers/page.jsx';
import LinkButton   from '../link-button.jsx';
import BackButton   from '../back-button.jsx';

const Intro = (props) => {
  const linkAddress = '/my-basics/address';

  return (
    <Page {...props} >
      <div className='intro-info'>
        <h3>Welcome to the Online Driver License application!</h3>

        <h4>This form is broken in 4 sections:</h4>
        <ol className='decimal-list'>
          <li>My basics</li>
          <li>My history</li>
          <li>Organ donation</li>
          <li>Voter registration</li>
        </ol>

        <p>The DMV cares about your privacy. We will protect your data.</p>

        <div className='navigation-buttons row'>
          <hr />

          <p>The online form takes most customers<br />
            <b>10 minutes</b>
          </p>

          <div className='shadow-container unit'>
            <BackButton
              onBack={props.onBack}
              key='back-button'
            />
          </div>

          <div className='shadow-container unit-right'>
            <LinkButton
              to={linkAddress}
              linkText='Get started'
              className='continue get-started forward'
            />
          </div>
        </div>
      </div>
    </Page>
  );
}



export default Intro;
