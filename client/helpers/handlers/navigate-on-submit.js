'use strict';

import alicePath from '../alice-path';

const onSubmitGenerator = (address, props) => {
  return (event) => {
    props.onSubmit(event);

    let goTo = props.location && props.location.state && props.location.state.nextAddress === '/summary' && props.location.pathname !== '/apply/summary' ? '/summary' : address ;
    return props.history.push(
      alicePath(goTo)
    );
  };
};

export default onSubmitGenerator;
