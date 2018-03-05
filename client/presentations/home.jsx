'use strict';

import React    from 'react';
import { Link } from 'react-router-dom';

import linkData from '../helpers/navigation/pages';

const LinkListItem = (props) => {
  let className = props.description.replace(/\s+/g, '-');
  return (
    <li>
      <Link className={className} to={ props.path }>{props.description}</Link>
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
    <li style={{marginLeft: '20px'}}>
      <h4>{props.name}</h4>
      <ul>
        { props.children }
      </ul>
      <hr/>
    </li>
  );
}

const Home = () => {
  return (
    <div>
      <h2 className='question'>Pages</h2>
      <ul className='section-links'>
        <LinkSection name='Intro'>
          { wrapGroup(linkData.intro) }
        </LinkSection>

        <hr/>
        <h3>ID/DL App</h3>
        <LinkSection name='Get started'>
          { wrapGroup(linkData.getStarted) }
        </LinkSection>
        <LinkSection name='My basics'>
          { wrapGroup(linkData.myBasics) }
        </LinkSection>
        <LinkSection name='My history'>
          { wrapGroup(linkData.myHistory) }
        </LinkSection>
        <LinkSection name='Organ donation'>
          { wrapGroup(linkData.organDonation) }
        </LinkSection>
        <LinkSection name='Voting registration'>
          { wrapGroup(linkData.voterRegistration) }
        </LinkSection>
        <LinkSection name='Conclusion'>
          { wrapGroup(linkData.conclusion) }
        </LinkSection>
        <LinkSection name='Add DL'>
          { wrapGroup(linkData.addDLCard) }
        </LinkSection>
        <LinkSection name='Add ID'>
          { wrapGroup(linkData.addIDCard) }
        </LinkSection>

        <hr/>
        <h3>CDL App</h3>
        <LinkSection name='CDL Get Started'>
          { wrapGroup(linkData.cdl) }
        </LinkSection>
        <LinkSection name='CDL History'>
          { wrapGroup(linkData.cdlHistory) }
        </LinkSection>

      </ul>
    </div>
  );
};

export default Home;
