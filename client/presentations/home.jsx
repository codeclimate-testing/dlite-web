'use strict';

import React    from 'react';
import { Link } from 'react-router-dom';

import alicePath from '../helpers/alice-path';

const LinkListItem = (props) => {
  let className = props.description.replace(/\s+/g, '-');
  return (<li>
    <Link className={className} to={ alicePath(props.path) }>{props.description}</Link>
  </li>);
};

const linkData = [
  {description: 'summary',                    path: '/summary'},
  {description: 'legal name',                 path: '/about-me/legal-name'},
  {description: 'date of birth',              path: '/about-me/date-of-birth'},
  {description: 'home address',               path: '/about-me/home-address'},
  {description: 'mailing address',            path: '/about-me/mailing-address'},
  {description: 'sex',                        path: '/about-me/sex'},
  {description: 'eye color',                  path: '/about-me/appearance/eye'},
  {description: 'hair color',                 path: '/about-me/appearance/hair'},
  {description: 'height',                     path: '/about-me/height'},
  {description: 'weight',                     path: '/about-me/weight'},
  {description: 'social security',            path: '/about-me/social-security'},
  {description: 'contact info',               path: '/about-me/contact'},
  {description: 'citizen status',             path: '/about-me/voter/am-citizen'},
  {description: 'voter preferences intro',    path: '/about-me/voter/voter-preferences-intro'},
  {description: 'political party choose',     path: '/about-me/voter/political-party-choose'},
  {description: 'political party',            path: '/about-me/voter/political-party'}
];

const Home = () => {
  let listItems = linkData.map((listData) => {
    return (<LinkListItem
      description={listData.description}
      path={listData.path}
      key={listData.description}
    />);
  });

  return (
    <ul className='home-page'>
      { listItems }
    </ul>
  );
};

export default Home;
