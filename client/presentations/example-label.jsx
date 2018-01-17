'use strict';

import React from 'react';

const ExampleLabel = (props) => {
  if(!props.example) { return null; }
  return (
    <div className = 'additional-label example'>
      { props.example }
    </div>
  );
};

export default ExampleLabel;
