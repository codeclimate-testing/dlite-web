'use strict';

import React                       from 'react';
import NavigationButtons           from '../../navigation-buttons.jsx';
import Page                        from '../../../containers/page.jsx';

import PreRegPoliticalPartyChoose  from '../../../presentations/voter-registration//voter-choose-party/voter-choose-party-prereg-form.jsx';
import PoliticalPartyPreference    from '../../../presentations/voter-registration//voter-choose-party/political-party-preference.jsx';

const PreRegPoliticalPartyChoosePage = (props) => {

  return (
    <Page
      {...props}
      pageTitle={props.pageTitle}
      sectionNumber='3'
      sectionName={props.sectionName}
    >

    <form onSubmit={props.onSubmit} className='choose-party-form'>
        <PreRegPoliticalPartyChoose
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


export default PreRegPoliticalPartyChoosePage;
