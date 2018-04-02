'use strict';

import React              from 'react';
import Page               from '../../containers/page.jsx';
import NavigationButtons  from '../navigation-buttons.jsx';
import Translator         from '../../i18n/translator-tag.jsx';

const Presentation = (props) => {

  return (
    <Page
      {...props}
      sectionKey='intro'
    >
      <div className='id-me'>
        <h2 className='translation-missing'>
          The DMV is partnering with ID.me to protect your digital identity.
        </h2>

        <fieldset role='group' className='id-me-buttons' aria-label='Authentication buttons'>
          <a href={`/auth/new/${props.appName}`} className='button green translation-missing id-me-create'>
            <div className='unit'>Create an </div>
            <img src='/images/id-me/white-logo.svg' alt='id.me' className='id-me-logo unit' />
            <div className='unit'> account</div>
          </a>

          <div className='or-block'>
            <hr className='mid-line'/>
            <p className='or'>Or</p>
          </div>

          <a href={`/auth/new/${props.appName}`} className='button translation-missing id-me-sign-in'>
            <div className='unit'>Sign in with an </div>
            <img src='/images/id-me/dark-logo.svg' alt='id.me' className='id-me-logo unit' />
            <div className='unit'> account</div>
          </a>
        </fieldset>

        <Translator
          tag             = 'p'
          translationPath = 'beforeIntro.idMePage.emailRequired'
        />
        <Translator
          tag             = 'p'
          translationPath = 'beforeIntro.idMePage.legalIdentity'
        />
        <Translator
          tag             = 'p'
          translationPath = 'beforeIntro.idMePage.dmvPartnering'
        />

        <Translator
          tag             = 'p'
          translationPath = 'beforeIntro.idMePage.learnMore'
        />
      </div>
    </Page>
  );
};

export default Presentation;
