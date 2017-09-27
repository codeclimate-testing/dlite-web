'use strict';

import { connect } from "react-redux";

function connectForm(mapStateToProps, action, form) {
  function mapDispatchToProps(dispatch) {
    const onCopy = (payload) => {
      //Trigger dispatch for each name value pair
      for (var key in payload) {
        if (payload.hasOwnProperty(key)) {
            let name = key;
            let value = payload[key];
            dispatch(action(name, value));
        }
      }
    }
    return {
      onCopy
    };
  }

  return connect(mapStateToProps, mapDispatchToProps)(form);
};

export default connectForm;
