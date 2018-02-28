'use strict';
import React                from 'react';
import CDLApp               from './cdl-app.jsx';
import MyBasics             from './my-basics.jsx';
import MyHistory            from './my-history.jsx';
import Accordion            from '../../../containers/accordion.jsx';


const Contents = (props) => {
  let application = props.cdl;
  return (
    <div className = 'summary'>
      <CDLApp         {...application} />

      <MyBasics       {...application} />

      <Accordion id='self-certification' title='Self certification'>
      </Accordion>

      <MyHistory      {...application} />

      <Accordion id='organ-donation-summary' title='Organ donation'>
      </Accordion>

      <Accordion id='voter-registration-summary' title='Voter registration'>
      </Accordion>
    </div>
  )
};

export default Contents;
