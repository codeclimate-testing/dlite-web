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
  {description: 'sex',                                    path: '/about-me/sex'},
  {description: 'eye color',                              path: '/about-me/appearance/eye'},
  {description: 'hair color',                             path: '/about-me/appearance/hair'},
  {description: 'height',                                 path: '/about-me/height'},
  {description: 'weight',                                 path: '/about-me/weight'},
  {description: 'social security',                        path: '/about-me/social-security'},
  {description: 'organ',                                  path: '/about-me/organ'},
  {description: 'donate contribution',                    path: '/about-me/donate-contribution'},
  {description: 'has suspended license',                  path: '/about-me/revoked-suspended'},
  {description: 'suspended license info',                 path: '/about-me/enter-revoked-suspended'},
  {description: 'existing DL ID info',                    path: '/about-me/dl-id-number'},
  {description: 'is suspended license',                   path: '/about-me/revoked-suspended/'},
  {description: 'suspended license info',                 path: '/about-me/enter-revoked-suspended/'},
  {description: 'previous names',                         path: '/about-me/previous-names/'},
  {description: 'previous names info',                    path: '/about-me/enter-previous-names/'},

  {description: 'voter intro',                            path: '/voter/voter-introduction'},
  {description: 'citizen status',                         path: '/about-me/voter/am-citizen'},
  {description: 'eligibility requirements',               path: '/about-me/voter/eligibility-requirements'},
  {description: 'opt out',                                path: '/about-me/voter/opt-out'},
  {description: 'voter preferences intro',                path: '/about-me/voter/voter-preferences-intro'},
  {description: 'voter preferences intro preregistered',  path: '/about-me/voter/voter-preferences-intro-preregistered'},
  {description: 'political party choose',                 path: '/about-me/voter/political-party-choose'},
  {description: 'political party preference',             path: '/about-me/voter/political-party'},
  {description: 'ballot language',                        path: '/about-me/voter/ballot-language'},
  {description: 'ballot by mail',                         path: '/about-me/voter/ballot-by-mail'},
  {description: 'contact choice',                         path: '/about-me/voter/contact-choice'},
  {description: 'contact details',                        path: '/about-me/voter/email-phone'},
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
