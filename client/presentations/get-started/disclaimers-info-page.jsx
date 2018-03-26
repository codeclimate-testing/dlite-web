'use strict'

import React        from 'react';

import translations       from '../../i18n';
import Translation        from '../../i18n/translate-tag.jsx';

const DisclaimersInfo = (props) => {
  let locale = props.locale
  return (
      
    <div className='scroll-wrapper disclaimers-info'>
      <div className='scroll-content'>
        <h3 className='translation-missing'>
          Please take a moment to review the following disclaimers:
        </h3>

        <p className='translation-missing'><a href="#medical">Medical Information</a></p>
        <p className='translation-missing'><a href="#veteran">Veteran Statement</a></p>
        <p className='translation-missing'><a href="#organdonor">Organ Donor Statement</a></p>
        <p className='translation-missing'><a href="#voter">Voter Registration</a></p>
        <p className='translation-missing'><a href="#criminalprosecution">Criminal Prosecution</a></p>
        <p className='translation-missing'><a href="#financial">Financial Responsibility</a></p>
        <p className='translation-missing'><a href="#paymentsrefunds">Payments/Refunds</a></p>
        <p className='translation-missing'><a href="#privacy">Privacy Notice</a></p>
        <p className='translation-missing'><a href="#certificates">Certificates</a></p>

        <h3 className='translation-missing' id='medical'>
          Medical Information
        </h3>

        <p className='translation-missing'></p>

        <h3 className='translation-missing' id='veteran'>
          Veteran Statement
        </h3>

        <p className='translation-missing'></p>

        <h3 className='translation-missing' id='organdonor'>
          Organ Donor Statement
        </h3>

        <p className='translation-missing'></p>

        <h3 className='translation-missing' id='voter'>
          Voter Registration
        </h3>

        <p className='translation-missing'></p>

        <h3 className='translation-missing' id='criminalprosecution'>
          Criminal Prosecution
        </h3>

        <p className='translation-missing'></p>

        <h3 className='translation-missing' id='financial'>
          Financial Responsibility
        </h3>

        <p className='translation-missing'></p>

        <h3 className='translation-missing' id='paymentsrefunds'>
          Payments/Refunds
        </h3>

        <p className='translation-missing'></p>

        <h3 className='translation-missing' id='privacy'>
          Privacy Notice
        </h3>

        <p className='translation-missing'></p>

        <h3 className='translation-missing' id='certificates'>
          Certificates
        </h3>

        <p className='translation-missing'></p>

      </div>
    </div>
  );
};

export default DisclaimersInfo;
