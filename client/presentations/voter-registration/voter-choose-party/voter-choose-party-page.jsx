'use strict';

import React                    from 'react';
import NavigationButtons        from '../../navigation-buttons.jsx';
import Page                     from '../../page.jsx';

import PoliticalPartyChoose     from '../../../presentations/voter-registration/voter-choose-party/voter-choose-party-form.jsx';
import PoliticalPartyPreference from '../../../presentations/voter-registration/voter-choose-party/political-party-preference.jsx';

const PoliticalPartyChoosePage = (props) => {

  return (
    <Page
      {...props}
      pageTitle={props.pageTitle}
      sectionNumber='3'
      sectionName={props.sectionName}
    >

    <form onSubmit={props.onSubmit} className='choose-party-form'>
        <PoliticalPartyChoose
          {...props}
          selectedValue  ={props.politicalPartyChoose.isSelected}
        />

        <PoliticalPartyPreference
        {...props} 
        onChange={props.onChange}
        selectedValue={props.politicalPartyChoose.politicalPartyChoose}
        />

        <NavigationButtons {...props} />
      </form>
    </Page>
  );
};


export default PoliticalPartyChoosePage;