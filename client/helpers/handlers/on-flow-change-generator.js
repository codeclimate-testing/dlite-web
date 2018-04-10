'use strict';

import { pathForPage }    from '../navigation/page';
import { hasValue }       from '../data/validations';

const onFlowChangeGenerator = (props, flow, linkType, history = window.__reactHistory) => {

  const goToNextPage = () => {
    history.push(
      pathForPage(props.editKey, {
        flow: flow
      })
    );
  };

  const changeFlow = (e) => {
    if (e) {
      e.preventDefault();
    }
    props.onFlowChange(flow, props.cardType);
    goToNextPage();
  };

  const addApp = (e) => {
    e.preventDefault();
    props.newFlow(props.editKey);
    goToNextPage();
  };

  const changeApp = (e) => {
    e.preventDefault();
    // if clicking button on /apply/open-applications page, load the selected app's data
    if (hasValue(props.appID)) {
      props.goGetData(props.appID)
      .then((res) => {
        if (res === 'api-fail') {
          history.goBack();
        }
        else {
          changeFlow();
        }
      });
    }
  };


  let generator;
  if (linkType === 'open-add') {
    generator = addApp;
  }
  else if (linkType === 'open-edit') {
    generator = changeApp;
  }
  else {
    generator = changeFlow;
  }

  return generator;
};

export default onFlowChangeGenerator;