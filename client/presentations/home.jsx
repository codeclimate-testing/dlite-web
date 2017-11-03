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
  {description: 'summary',                                path: '/summary'},

  {description: 'intro page',                             path: '/what-do-you-want-to-do-today'},
  {description: 'legal name',                             path: '/about-me/legal-name'},
  {description: 'date of birth',                          path: '/about-me/date-of-birth'},
  {description: 'home address',                           path: '/about-me/home-address'},
  {description: 'mailing address',                        path: '/about-me/mailing-address'},
  {description: 'physical traits',                        path: '/about-me/physical-traits'},
  {description: 'height',                                 path: '/about-me/height'},
  {description: 'weight',                                 path: '/about-me/weight'},
  {description: 'social security',                        path: '/about-me/social-security'},
  {description: 'organ donation',                         path: '/about-me/organ-donation'},
  {description: 'has existing DL/ID',                     path: '/about-me/license-history'},
  {description: 'existing DL/ID info',                    path: '/about-me/dl-id-number'},
  {description: 'names history',                          path: '/about-me/names-history/'},
  {description: 'is suspended license',                   path: '/about-me/privilege-removed-history'},

  {description: 'voter intro',                            path: '/voter/voter-introduction'},
  {description: 'citizen status',                         path: '/about-me/voter/am-citizen'},
  {description: 'eligibility requirements',               path: '/about-me/voter/eligibility-requirements'},
  {description: 'opt out',                                path: '/about-me/voter/opt-out'},
  {description: 'voter preferences intro',                path: '/about-me/voter/voter-preferences-intro'},
  {description: 'voter preferences intro preregistered',  path: '/about-me/voter/voter-preferences-intro-preregistered'},
  {description: 'choose party',                           path: '/about-me/voter/choose-party'},
  {description: 'ballot language',                        path: '/about-me/voter/ballot-language'},
  {description: 'ballot by mail',                         path: '/about-me/voter/ballot-by-mail'},
  {description: 'political contact',                      path: '/about-me/voter/political-contact'},
  {description: 'voter reg complete',                     path: '/about-me/voter/voter-reg-complete'},
  {description: 'success visit',                          path: '/about-me/success-visit'}
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
    <ul className='section-links'>
      { listItems }
    </ul>
  );
};

export default Home;
