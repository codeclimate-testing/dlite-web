'use strict';

import React from 'react';

import colorFormBuilder from './color-form-builder';

const COLORS = ['Auburn', 'Bald', 'Black', 'Blonde', 'Brown', 'Gray', 'Red', 'White', 'Other'];
const HairColorForm = colorFormBuilder(COLORS, 'hair');

export default HairColorForm;
