'use strict';
import React                from 'react';
import CDLApp               from './cdl-app.jsx';
import MyBasics             from './my-basics.jsx';
import MyHistory            from './my-history.jsx';
import VoterRegistration    from './voter-registration.jsx';
import SelfCert             from './self-cert.jsx';
import Organ                from './organ.jsx';
import Accordion            from '../../../containers/accordion.jsx';
import Alerts               from '../../conclusion/summary/alerts.jsx';


const Contents = (props) => {

  return (
    <div className = 'summary'>
      <CDLApp             {...props} />

      <MyBasics           {...props} />

      <SelfCert           {...props} />

      <MyHistory          {...props} />

      <Organ              {...props} />

      <VoterRegistration  {...props} />
    </div>
  )
};

export default Contents;
