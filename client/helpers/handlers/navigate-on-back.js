'use strict';

const onBackGenerator = (props) => {
  return (event) => {
    if (props.onSubmit) { props.onSubmit(event); }
    props.history.goBack();
  };
};

export default onBackGenerator;
