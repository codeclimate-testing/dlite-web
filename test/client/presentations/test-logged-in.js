'use strict';
import { connect }                from 'react-redux';
import fetch                      from 'isomorphic-fetch';
import { getUserData }            from '../../../client/actions/get-user-data';
import { isProduction }           from '../../../client/helpers/data/application';

const LoggedIn = (props) => {

  if (isProduction() ) {
    console.log('THIS PAGE IS NOT FOR PRODUCTION');
    return null;
  }

  let dispatch = props.dispatch;
  let history = props.history;

  let userData = {
    appsLength: 3,
    userID: '3f',
    apps: [{
      name: 'CDL person',
      cardType: ['CDL'],
      cardAction: ['new'],
      id: '1',
      pathname: '/apply/cdl/summary',
      updatedAt: ''
    },
    {
      name: 'DL person',
      cardType: ['DL'],
      cardAction: ['replace-lost'],
      id: '2',
      pathname: '/apply/id-and-license/summary',
      updatedAt: ''
    },
    {
      name: 'new ID and DL person',
      cardType: ['ID', 'DL'],
      cardAction: ['new', 'new'],
      id: '3',
      pathname: '/apply/id-and-license/summary',
      updatedAt: ''
    },
    {
      name: 'renew ID and change DL person',
      cardType: ['ID', 'DL'],
      cardAction: ['renew', 'change-update'],
      id: '4',
      pathname: '/apply/id-and-license/what-do-you-want-to-do-today',
      updatedAt: ''
    }]
  };


  const saveData = () => {
    let data = Object.assign({}, props.cdl);
    data.id = '1';
    data.userID = '3f';
    data.cardAction = 'new';
    data.basics.legalName.lastName = 'CDL person';
    data.basics.dateOfBirth = {
      month: '10',
      day: '10',
      year: '1990'
    };
    data.pathname = '/apply/cdl/summary';

    fetch('/api/application', {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(() => {
      let data = Object.assign({}, props.iddl);
      data.id = '2';
      data.userID = '3f';
      data.basics.legalName.lastName = 'DL person';
      data.basics.dateOfBirth = {
        month: '10',
        day: '10',
        year: '1990'
      };
      data.IDApp.isApplying = false;
      data.DLApp.isApplying = true;
      data.DLApp.action = 'replace';
      data.DLApp.cardReplacement = 'lost';
      data.pathname = '/apply/id-and-license/summary';
      fetch('/api/application', {
        method: 'POST',
        body: JSON.stringify(data),
        credentials: 'same-origin',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(() => {
        return 'done';
      })
    })
    .then(() => {
      let data = Object.assign({}, props.iddl);
      data.id = '3';
      data.userID = '3f';
      data.basics.legalName.lastName = 'new ID and DL person';
      data.basics.dateOfBirth = {
        month: '10',
        day: '10',
        year: '1990'
      };
      data.IDApp.isApplying = true;
      data.IDApp.action = 'new';
      data.DLApp.isApplying = true;
      data.DLApp.action = 'new';
      data.pathname = '/apply/id-and-license/summary';
      fetch('/api/application', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(() => { return 'done'})
    })
    .then(() => {
      let data = Object.assign({}, props.iddl);
      data.id = '4';
      data.userID = '3f';
      data.basics.legalName.lastName = 'renew ID and change DL person';
      data.basics.dateOfBirth = {
        month: '10',
        day: '10',
        year: '1990'
      };
      data.IDApp.isApplying = true;
      data.IDApp.action = 'renew';
      data.DLApp.isApplying = true;
      data.DLApp.action = 'change';
      data.DLApp.cardChanges.correctOrUpdate = 'update';
      data.pathname = '/apply/id-and-license/what-do-you-want-to-do-today';

      fetch('/api/application', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(() => {
        history.push('/apply/logged-in/3f');
      });
    });
  };

  saveData();

  return null;
};

const mapStateToProps = (state) => {
  return {
    iddl: state.application,
    cdl: state.cdl
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LoggedIn);
