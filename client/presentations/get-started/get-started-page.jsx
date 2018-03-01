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
import Translate              from '../../i18n/translate-tag.jsx';

const ListItems = (props) => {
  let locale = props.locale;
  return translations[locale].intro.getStartedPage.listItems.map((text, i) => {
    return (
      <Translate tag='li' key={i} keyProp={i}>
        {text}
      </Translate>
    );
  });
};

const Intro = (props) => {
  const linkAddress = '/my-basics/address';
  let locale = props.locale;
  return (
    <Page {...props} >
      <div className='intro-info'>
        <Translate tag='h2'>
          {translations[locale].intro.getStartedPage.title}
        </Translate>

        <DLInfo {...props} />
        <ApplyingIDInfo {...props} />
        <RenewingIDInfo {...props} />
        <UpdatingIDInfo {...props} />
        <CorrectingIDInfo {...props} />
        <ReplacingIDInfo {...props} />
        <VehicleInfo {...props} />
        <EndorsementInfo {...props} />
        <RealIDInfo {...props} />
        <UpdateApplicationInfo {...props} />
        <CorrectApplicationInfo {...props} />
        <ReplaceApplicationInfo {...props} />

        <hr/>

        <Translate tag='p'>
          {translations[locale].intro.getStartedPage.listHeader}
        </Translate>

        <ol className='decimal-list'>
          <ListItems {...props}/>
        </ol>

        <Translate tag='p'>
          {translations[locale].intro.getStartedPage.timeToComplete}
        </Translate>

        <Translate tag='p'>
          {translations[locale].intro.getStartedPage.afterComplete}
        </Translate>

        <div className='navigation-buttons row'>
          <hr/>
          <div className='shadow-container unit'>
            <BackButton
              {...props}
              onBack={props.onBack}
              key='back-button'
            />
          </div>

          <div className='shadow-container unit-right'>
            <LinkButton
              to={linkAddress}
              linkText={translations[locale].shared.navigation.next}
              className='continue forward'
            />
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Intro;
