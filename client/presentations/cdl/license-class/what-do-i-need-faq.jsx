'use strict';

import React                    from 'react';
import Accordion                from '../../../containers/accordion.jsx';

const FAQ = (props) => {
  return (
    <Accordion
      id='cdl-class'
      title="I’m not sure which class I need"
    >
      <div>
        <h3 className='question'>With a Commercial Class C</h3>
        <h4>You may drive:	</h4>
        <ul className='bullet-list'>
          <li>Any 2-axle vehicle with a GVWR of 26,000 pounds or less, or any 3-axle vehicle weighing 6,000 pounds gross or less, carrying hazardous materials (HazMat) requiring placards.  This requires a HazMat endorsement.</li>
          <li>Any bus or passenger vehicle with a GVWR of 26,000 pounds or less, designed, used, or maintained to carry more than 10 persons, including the driver. This requires a passenger endorsement.</li>
          <li>Any vehicle allowed under a Non-Commercial Class C license.</li>
        </ul>
        <p>You may tow all vehicles allowed under the Non-Commercial Class C driver license.</p>
      </div>

      <div>
        <h3 className='question'>With a Commercial Class B</h3>
        <h4>You may drive:	</h4>
        <ul className='bullet-list'>
          <li>All vehicles a Commercial Class C licensed driver may drive.</li>
          <li>A 2-axle vehicle weighing over 26,000 pounds.</li>
          <li>A 3-axle vehicle weighing over 6,000 pounds.</li>
          <li>A bus (except a trailer bus). This requires a passenger endorsement.</li>
          <li>Any farm labor vehicle, with endorsement</li>
        </ul>
        <h4>You may tow: </h4>
        <ul className='bullet-list'>
          <li>A single vehicle with a GVWR of 10,000 pounds or less</li>
          <li>All vehicles a Commercial Class C licensed driver may tow</li>
        </ul>
      </div>

      <div>
        <h3 className='question'>With a Commercial Class A</h3>
        <h4>You may drive:	</h4>
        <ul className='bullet-list'>
          <li>Any legal combination of vehicles, including vehicles under Class B and Class C</li>
        </ul>

        <h4>You may tow: </h4>
        <ul className='bullet-list'>
          <li>All vehicles a Class B and a Class C licensed driver may tow</li>
          <li>Any single vehicle with a GVWR of more than 10,000 pounds</li>
          <li>Any trailer bus, with endorsement OR more than 1 vehicle, with endorsement</li>
        </ul>
      </div>
    </Accordion>
  );
}

export default FAQ;