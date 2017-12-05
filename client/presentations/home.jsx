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

  {description: 'intro page',                             path: '/get-started'},
  {description: 'legal name',                             path: '/my-basics/legal-name'},
  {description: 'date of birth',                          path: '/my-basics/date-of-birth'},
  {description: 'real ID',                                path: '/real-id'},
  {description: 'address',                                path: '/my-basics/address'},
  {description: 'traits height and weight',               path: '/my-basics/traits-height-weight'},
  {description: 'physical traits',                        path: '/my-basics/physical-traits'},
  {description: 'social security',                        path: '/my-basics/social-security'},
  {description: 'organ donation',                         path: '/organ-donation'},
  {description: 'license and id history',                 path: '/my-history/license-and-id'},
  {description: 'names history',                          path: '/my-history/names/'},
  {description: 'medical history',                        path: '/my-history/medical/'},
  {description: 'license issues',                         path: '/my-history/license-issues'},
  {description: 'veterans service',                       path: '/my-history/veterans-service'},

  {description: 'voter intro',                            path: '/voting-registration/introduction'},
  {description: 'citizen status',                         path: '/voting-registration/citizenship'},
  {description: 'eligibility requirements',               path: '/voting-registration/eligibility'},
  {description: 'opt out',                                path: '/voting-registration/opt-out'},
  {description: 'voter preferences',                      path: '/voting-registration/preferences'},
  {description: 'choose party',                           path: '/voting-registration/choose-party'},
  {description: 'ballot language',                        path: '/voting-registration/language'},
  {description: 'ballot by mail',                         path: '/voting-registration/vote-by-mail'},
  {description: 'contact methods',                        path: '/voting-registration/contact-methods'},
  {description: 'voter reg complete',                     path: '/voting-registration/confirmation'},
  {description: 'appointment preparation',                path: '/appointment-preparation'},
  {description: 'required documents',                     path: '/appointment-preparation/documents'}
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
