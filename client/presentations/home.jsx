'use strict';

import React    from 'react';
import { Link } from 'react-router-dom';

import linkData from '../helpers/navigation/pages';

const LinkListItem = (props) => {
  let className = props.description.replace(/\s+/g, '-');
  let urlPath = props.path;
  if (typeof(urlPath) !== 'string') {
    urlPath = urlPath({
      flow: ''
    });
  }
  return (
    <li style={{padding: '0px'}}>
      <Link className={className} to={ urlPath }>{props.description}</Link>
    </li>
  );
};

const wrapGroup = (listItems) => {
  return listItems.map((listData) => {
    return (<LinkListItem
      description={listData.description}
      path={listData.path}
      key={listData.description}
    />);
  });
};

const LinkSection = (props) => {
  return (
    <li style={{padding: '0px'}}>
      <h4>{props.name}</h4>
      <ul>
        { props.children }
      </ul>
      <hr/>
    </li>
  );
}

const Home = () => {
  if(APP_ENV !== 'development') {
    return null;
  }
  return (
    <div>
      <h2 className='question'>Pages</h2>
      <ul className='section-links'>

        <h3>Shared</h3>
        <LinkSection name='Intro'>
          { wrapGroup(linkData.shared.intro) }
        </LinkSection>

        <hr/>
        <h3>ID/DL App</h3>
        <LinkSection name='Get started'>
          { wrapGroup(linkData.iddl.getStarted) }
        </LinkSection>
        <LinkSection name='My basics'>
          { wrapGroup(linkData.iddl.basics) }
        </LinkSection>
        <LinkSection name='My history'>
          { wrapGroup(linkData.iddl.myHistory) }
        </LinkSection>
        <LinkSection name='Organ donation'>
          { wrapGroup(linkData.iddl.organDonation) }
        </LinkSection>
        <LinkSection name='Voting registration'>
          { wrapGroup(linkData.iddl.voterRegistration) }
        </LinkSection>
        <LinkSection name='IDDL Conclusion'>
          { wrapGroup(linkData.iddl.conclusion) }
        </LinkSection>
        <hr/>
        <h3>CDL App</h3>
        <LinkSection name='CDL Get Started'>
          { wrapGroup(linkData.cdl.getStarted) }
        </LinkSection>
        <LinkSection name='CDL Basics'>
          { wrapGroup(linkData.cdl.basics)}
        </LinkSection>
        <LinkSection name='CDL History'>
          { wrapGroup(linkData.cdl.myHistory) }
        </LinkSection>
        <LinkSection name='CDL Organ donation'>
          { wrapGroup(linkData.cdl.organDonation) }
        </LinkSection>
        <LinkSection name='CDL Voting Registration'>
          { wrapGroup(linkData.cdl.voterRegistration) }
        </LinkSection>

        <LinkSection name='CDL Conclusion'>
          { wrapGroup(linkData.cdl.conclusion) }
        </LinkSection>
      </ul>
    </div>
  );
};

export default Home;
