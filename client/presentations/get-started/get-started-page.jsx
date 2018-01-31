'use strict';

import React                  from 'react';
import Page                   from '../../containers/page.jsx';
import LinkButton             from '../link-button.jsx';
import BackButton             from '../back-button.jsx';
import translations           from '../../i18n';
import DLInfo                 from './intro-page/dl-info.jsx';
import ApplyingIDInfo         from './intro-page/applying-id-info.jsx';
import RenewingIDInfo         from './intro-page/renewing-id-info.jsx';
import UpdatingIDInfo         from './intro-page/updating-id-info.jsx';
import CorrectingIDInfo       from './intro-page/correcting-id-info.jsx';
import ReplacingIDInfo        from './intro-page/replacing-id-info.jsx';
import VehicleInfo            from './intro-page/vehicle-info.jsx';
import EndorsementInfo        from './intro-page/endorsement-info.jsx';
import RealIDInfo             from './intro-page/real-id-info.jsx';
import UpdateApplicationInfo  from './intro-page/update-application-info.jsx';
import CorrectApplicationInfo from './intro-page/correct-application-info.jsx';
import ReplaceApplicationInfo from './intro-page/replace-application-info.jsx';

const Intro = (props) => {
  const linkAddress = '/my-basics/address';

  return (
    <Page {...props} >
      <div className='intro-info'>
        <h2 className='question'>{translations.intro.getStartedPage.title}</h2>
        <DLInfo {...props} />
        <ApplyingIDInfo {...props} />
        <RenewingIDInfo {...props} />
        <UpdatingIDInfo {...props} />
        <CorrectingIDInfo {...props} />
        <ReplacingIDInfo {...props} />
        <br></br>
        <VehicleInfo {...props} />
        <br></br>
        <EndorsementInfo {...props} />
        <RealIDInfo {...props} />
        <UpdateApplicationInfo {...props} />
        <CorrectApplicationInfo {...props} />
        <ReplaceApplicationInfo {...props} />

        <hr/>
        <p>{translations.intro.getStartedPage.listHeader}</p>
        <ol className='decimal-list'>
          <li>{translations.intro.getStartedPage.listItems[0]}</li>
          <li>{translations.intro.getStartedPage.listItems[1]}</li>
          <li>{translations.intro.getStartedPage.listItems[2]}</li>
          <li>{translations.intro.getStartedPage.listItems[3]}</li>
        </ol>

        <div className='navigation-buttons row'>
          <hr/>

          <p>{translations.intro.getStartedPage.timeToComplete}</p>
          <p>{translations.intro.getStartedPage.afterComplete}</p>

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
};

export default Intro;
