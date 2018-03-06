'use strict';

import React from 'react';
import EndorsementToggle      from './endorsements/endorsement-toggle.jsx';
import ClassACheckboxes       from './endorsements/class-a-checkboxes.jsx';
import ClassBCCheckboxes      from './endorsements/class-b-c-checkboxes.jsx';
import NavigationButtons      from '../navigation-buttons.jsx';
import Page                   from '../../containers/page.jsx';
import Accordion              from '../../containers/accordion.jsx';

const Form = (props) => {
  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <form className='cdl-endorsements-form' onSubmit={props.onSubmit}>
        <EndorsementToggle
          {...props}
          selectedValue={ props.cdlEndorsements.needEndorsement }
        />

        <ClassACheckboxes
          {...props}
        />

        <ClassBCCheckboxes
          {...props}
        />

       <Accordion
          id='cdl-endorsement-info'
          title='I"m not sure'
        >
          <div>
            <p><b>You need an endorsement if you plan to operate a commercial motor vehicle that is:</b></p>
            <ul className='bullet-list'>
              <li>Carrying more than 10 persons, including the driver.</li>
              <li>Hauling hazardous materials requiring placards.</li>
              <li>Towing more than one vehicle or trailer.</li>
              <li>A thank vehicle</li>
            </ul>
            <p> Full class, endorsement, and certificate descriptions and requirements are available in California's Commercial Driver Handbook.</p>
        </div>
        </Accordion>



        <NavigationButtons
          {...props}
          errorMessage={props.validations.all()}
        />
      </form>
    </Page>
  )
};

export default Form;
