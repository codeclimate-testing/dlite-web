'use strict';

import React             from 'react';

import HomeLink          from './home-link.jsx';
import ContinueButton    from './continue-button.jsx';

const SuccessVisit = (props) => {

    const externalLink = 'https://www.dmv.ca.gov/portal/dmv/dmv/onlinesvcs/appointment';

    return (
        <div className='success-visit-form'>
            <HomeLink />
            <h3>Your form has been submitted!</h3>

            <div className='success-visit-form'>
                <div className='inner-bottom'>
                    <h4>Here’s what happens next:</h4>
                    <ol className='decimal-list'>
                        <li>You will get a confirmation code emailed or texted to you.</li>
                        <li>You need to go to your local DMV office to finalize your application (use the link below to save time by making an appointment).</li>
                        <li>At the DMV, show the DMV employee your confirmation number. They will bring up your file.</li>
                        <li>You will be asked to verify your information. You will then certify that it’s correct.</li>
                        <li>You will show the DMV employee your required documents.</li>
                    </ol>
                </div>

                <div className='inner-bottom'>
                    <h4>At that visit you will also:</h4>
                    <ul className='bullet-list'>
                        <li>Provide fingerprints</li>
                        <li>Get your photo taken</li>
                        <li>Take a vision test</li>
                    </ul>
                </div>

                <div className='inner-bottom'>
                    <h4>Here’s what you need to bring to the DMV:</h4>
                    <ul className='bullet-list'>
                        <li>2 documents that prove where you live</li>
                        <li>1 document that proves your identity</li>
                    </ul>
                    <p>To avoid long waits and lines, make an appointment at your local DMV now.</p>

                    <a href={externalLink} className='external-link'>
                        <ContinueButton disabled={props.continueDisabled} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default SuccessVisit;