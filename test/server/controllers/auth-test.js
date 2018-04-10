'use strict';

const assert      = require('assert');
const sinon       = require('sinon');
const httpMocks   = require('node-mocks-http');
const controllers = require('../../../server/controllers/auth');

describe('Auth related controllers', () => {
  let req, res, next, passport;

  beforeEach(function() {
    req = {
      session: {
        user: { uuid: 'foo'},
        cookie: {},
        save: (redirectURL) => {
          return res.redirect(redirectURL)
        }
      },
      user: { uuid: '100'},
      params: {appName: 'cdl', language: 'vi'} ,
      query: { state: JSON.stringify({appName: 'cdl', language: 'vi'} )}
    };

    res = httpMocks.createResponse({});
    passport = { authenticate: sinon.spy() };
    res.redirect = sinon.spy();
    res.cookie = sinon.spy();
  });

  it('#authSuccess redirects to the logged in page', function() {
    controllers.authSuccess(req, res);
    req.session.save('/apply/logged-in/' + req.user.uuid);
    assert(res.redirect.calledWith('/apply/logged-in/'+ req.user.uuid));
  });

  it('#authSuccess redirects to localhost if app_env is development and not on heroku app', function() {
    process.env.APP_URL = 'localhost';
    req.session.save('http://localhost:3000/apply/logged-in/' + req.user.uuid);
    controllers.authSuccess(req, res, next, 'development');
    assert(res.redirect.calledWith('http://localhost:3000/apply/logged-in/'+req.user.uuid));
  });

  it('#authSuccess sets language cookie to req.query.state.language', function() {
    req.query.state = JSON.stringify({language: 'zh', appName: 'cdl'});
    controllers.authSuccess(req, res);
    assert.ok(res.cookie.calledWith('language', 'zh'));
  });

  it('#authSuccess sets appName cookie to req.query.state.appName', function() {
    req.params.appName = 'id-and-license';
    req.query.state = JSON.stringify({language: '', appName: 'id-and-license'});
    controllers.authSuccess(req, res);
    assert.ok(res.cookie.calledWith('appName', 'id-and-license'));
  });
  it('#authSuccess redirects to localhost if app_env is development and not on heroku app', function() {
    process.env.APP_URL = 'localhost';
    req.session.save('http://localhost:3000/apply/logged-in/' + req.user.uuid);
    controllers.authSuccess(req, res, next, 'development');
    assert(res.redirect.calledWith('http://localhost:3000/apply/logged-in/' + req.user.uuid));
  });
});
