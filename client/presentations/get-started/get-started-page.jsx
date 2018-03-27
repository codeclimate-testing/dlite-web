'use strict';

import React                      from 'react';
import Page                       from '../../containers/page.jsx';
import LinkButton                 from '../link-button.jsx';
import BackButton                 from '../back-button.jsx';
import DLInfo                     from './intro-page/dl-info.jsx';
import ApplyingIDInfo             from './intro-page/applying-id-info.jsx';
import RenewingIDInfo             from './intro-page/renewing-id-info.jsx';
import UpdatingIDInfo             from './intro-page/updating-id-info.jsx';
import CorrectingIDInfo           from './intro-page/correcting-id-info.jsx';
import ReplacingIDInfo            from './intro-page/replacing-id-info.jsx';
import VehicleInfo                from './intro-page/vehicle-info.jsx';
import EndorsementInfo            from './intro-page/endorsement-info.jsx';
import RealIDInfo                 from './intro-page/real-id-info.jsx';
import UpdateApplicationInfo      from './intro-page/update-application-info.jsx';
import CorrectApplicationInfo     from './intro-page/correct-application-info.jsx';
import ReplaceApplicationInfo     from './intro-page/replace-application-info.jsx';
import Translator                 from '../../i18n/translator-tag.jsx';
import TranslatorList             from '../../i18n/translator-list.jsx';

const ListItems = (props) => {
  return (
    <TranslatorList
      tag             = 'li'
      translationPath = 'intro.getStartedPage.listItems'
      />
  );
};

const Intro = (props) => {
  const linkAddress = '/my-basics/address';
  return (
    <Page {...props} >
      <div className='intro-info'>
        <Translator
          tag             = 'h2'
          translationPath = 'intro.getStartedPage.title'
        />

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

        <Translator
          tag             = 'p'
          translationPath = 'intro.getStartedPage.listHeader'
        />

        <ol className='decimal-list'>
          <ListItems {...props}/>
        </ol>

        <Translator
          tag             = 'p'
          translationPath = 'intro.getStartedPage.timeToComplete'
        />
        <Translator
          tag             = 'p'
          translationPath = 'intro.getStartedPage.afterComplete'
        />

        <div className='navigation-buttons row'>
          <hr/>
          <div className='unit'>
            <div className='shadow-container'>
              <BackButton
                {...props}
                onBack={props.onBack}
                key='back-button'
              />
            </div>
          </div>

          <div className='unit-right'>
            <div className='shadow-container'>
              <LinkButton to = { linkAddress } className='continue forward'>
                <Translator tag = 'span' translationPath = 'shared.navigation.next'/>
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Intro;
