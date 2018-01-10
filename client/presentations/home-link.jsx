'use strict';

import React from "react";
import { Link } from 'react-router-dom';

import alicePath from '../helpers/alice-path';

const HomeLink = () => {
  if(APP_ENV === 'development') {
    return <Link className='sections' to={ alicePath('/links') } tabIndex='-1' >All Pages</Link>;
  }
  return null;
};

export default HomeLink;
