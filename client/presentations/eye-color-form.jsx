'use strict';

import React from 'react';

import colorFormBuilder        from './color-form-builder';

const COLORS = ['Blue', 'Gray', 'Green', 'Hazel', 'Brown'];
const EyeColorForm = colorFormBuilder(COLORS, 'eye');

export default EyeColorForm;
