'use strict';

import React   from 'react';

const Translate = (props) => {
  const Tag = props.tag;
  const content = {__html: props.children};

  return (
    <Tag
      className={props.className}
      key={props.keyProp}
      dangerouslySetInnerHTML={content}
    />
  );
};

export default Translate;

