'use strict';
import { connect }                from 'react-redux';
import fetch                      from 'isomorphic-fetch';
import { nextPath }               from '../../../client/helpers/navigation/page';
import { isLoggedIn }             from '../../../client/actions/get-auth-status';
import { postData }               from '../../../client/actions/api-actions';
import { getUserData }            from '../../../client/actions/get-user-data';
import { isProduction }           from '../../../client/helpers/data/application';

const LoggedIn = (props) => {

  if (isProduction() ) {
    console.log('THIS PAGE IS NOT FOR PRODUCTION');
    return null;
  }

  let dispatch = props.dispatch;
  let history = props.history;

  dispatch(isLoggedIn());

  let userData = {
    appsLength: 3,
    userID: '3f',
    apps: [{
      name: 'CDL person',
      cardType: ['CDL'],
      cardAction: ['new'],
      id: '1'
    },
    {
      name: 'DL person',
      cardType: ['DL'],
      cardAction: ['replace-lost'],
      id: '2'
    },
    {
      name: 'new ID and DL person',
      cardType: ['ID', 'DL'],
      cardAction: ['new', 'new'],
      id: '3'
    },
    {
      name: 'renew ID and change DL person',
      cardType: ['ID', 'DL'],
      cardAction: ['renew', 'change-update'],
      id: '4'
    }]
  };


  // check to see if the test data have already been saved
  dispatch(getUserData('3f'))
    .then((res) => {
      if (res.apps.length < 4 || !res.apps[3].updatedAt) {
        return saveData();
      }
      return;
    })
    .then(() => {
      let pageKey = 'IDme';
      let pathURL = nextPath(pageKey, {
        flow: '',
        userData: userData
      });
      return history.push(pathURL);
    });

    // if not, save it
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
          dispatch({
            type: 'UPDATE_USER_DATA',
            payload: {
              value: userData
            }
          });
          return 'done';
        })
      });
    };


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