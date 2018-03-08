'use strict';
import React                from 'react';
import CDLApp               from './cdl-app.jsx';
import MyBasics             from './my-basics.jsx';
import MyHistory            from './my-history.jsx';
import SelfCert             from './self-cert.jsx';
import Organ                from './organ.jsx';
import Accordion            from '../../../containers/accordion.jsx';


const Contents = (props) => {

  return (
    <div className = 'summary'>
      <CDLApp         {...props} />

      <MyBasics       {...props} />

      <SelfCert       {...props} />

      <MyHistory      {...props} />

      <Organ          {...props} />

      <Accordion id='voter-registration-summary' title='Voter registration'>
      </Accordion>
    </div>
  )
};

export default Contents;
