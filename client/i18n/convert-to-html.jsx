'use strict'
import React   from 'react';

export const convertToHtml = (Tag, props, name=undefined, key=undefined) => {
  return <Tag className={name} key={key} dangerouslySetInnerHTML={{__html: props}}/>
};
