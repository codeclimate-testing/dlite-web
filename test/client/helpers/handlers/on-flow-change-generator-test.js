'use strict';

import assert                   from 'assert';
import sinon                    from 'sinon';
import onFlowChangeGenerator    from '../../../../client/helpers/handlers/on-flow-change-generator';
import { createMemoryHistory }  from 'history';

describe('onFlowChangeGenerator', function() {
  let event, linkType, props, flow, onFlowChange, history;

  beforeEach(function() {
    event = { preventDefault: sinon.spy() };
    linkType = '';
    flow = '';
    history = createMemoryHistory();
    props = {
      onFlowChange: sinon.spy(),
      newFlow: sinon.spy(),
      goGetData: function(){
        assert.ok('go get data was called')
        return Promise.resolve('success');
      },
      editKey: 'legalName',
      appID: '3f',
      cardType: '',
      nextAddress: ''
    };
  });

  it('when called will prevent event default', function() {
    onFlowChange = onFlowChangeGenerator(props, flow, linkType, history);
    onFlowChange(event);
    assert(event.preventDefault.called, 'event not prevented from doing a real submission');
  });

  it('calls the addApp function when linkType is open-add', function() {
    linkType = 'open-add';
    onFlowChange = onFlowChangeGenerator(props, flow, linkType, history);
    onFlowChange(event);
    assert.ok(props.newFlow.calledWith('legalName'));
  });

  it('goes to the iddl legal name page when linkType is open-add', function() {
    linkType = 'open-add';
    onFlowChange = onFlowChangeGenerator(props, flow, linkType, history);
    onFlowChange(event);
    assert.equal(history.location.pathname, '/apply/id-and-license/my-basics/legal-name');
  });

  it('calls the changeApp function when linkType is open-edit', function() {
    linkType = 'open-edit';
    onFlowChange = onFlowChangeGenerator(props, flow, linkType, history);
    onFlowChange(event);
  });

  it('calls the changeFlow function when linkType is summary-add', function() {
    linkType = 'summary-add';
    flow = 'add';
    props.cardType = 'DL';
    onFlowChange = onFlowChangeGenerator(props, flow, linkType, history);
    onFlowChange(event);
    assert.ok(props.newFlow.notCalled);
    assert.ok(props.onFlowChange.calledWith(flow, 'DL'));
  });

  it('calls the changeFlow function when linkType is summary-edit', function() {
    linkType = 'summary-add';
    flow = 'edit';
    onFlowChange = onFlowChangeGenerator(props, flow, linkType, history);
    onFlowChange(event);
    assert.ok(props.newFlow.notCalled);
    assert.ok(props.onFlowChange.calledWith(flow, props.cardType));
  });

  it('goes to the nextAddress url when nextAddress has value', function() {
    props.nextAddress = '/apply/cdl/my-basics/date-of-birth';
    linkType = 'open-edit';
    onFlowChange = onFlowChangeGenerator(props, flow, linkType, history);
    onFlowChange(event);
    assert.ok(history.location.pathname, props.nextAddress);
  });

  it('goes to the editKey url when nextAddress is blank', function() {
    linkType = 'open-edit';
    props.editKey = 'cdlLegalName';
    onFlowChange = onFlowChangeGenerator(props, flow, linkType, history);
    onFlowChange(event);
    assert.ok(history.location.pathname, '/apply/cdl/my-basics/true-name');
  });
});

