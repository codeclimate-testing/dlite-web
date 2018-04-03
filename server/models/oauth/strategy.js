'use strict';

var util                    = require('util');
var OauthStrategy           = require('passport-oauth2');
var InternalOAuthError      = OauthStrategy.InternalOAuthError;
var Profile                 = require('./profile');
const findOrSaveUser        = require('../db/save-user');

const IDmeURL       = process.env.ID_ME_URL;
const appDomain     = process.env.APP_URL;
const clientID      = process.env.OAUTH2_CLIENT_ID;
const clientSecret  = process.env.OAUTH2_CLIENT_SECRET;

const idMeUrl = (path) => {
  return `${IDmeURL}${path}`;
};

const appUrl = (path) => {
  return `${appDomain}${path}`;
};

class Strategy extends OauthStrategy {
  constructor(options, verify) {
    options.authorizationURL  = idMeUrl('/oauth/authorize');
    options.tokenURL          = idMeUrl('/oauth/token');

    super(options, verify);

    this.name             = 'oauth2';
    this._userProfileURL  = idMeUrl('/api/public/v3/attributes.json');
  }

  userProfile(accessToken, done) {
    this._oauth2.get(this._userProfileURL, accessToken, function (err, body) {
      if (err) {
        return done(new InternalOAuthError('Failed to fetch user profile', err));
      }

      let profile;
      try {
        profile = Profile.parse(body);
      } catch (e) {
        return done(e);
      }

      done(null, profile);
    });
  }
}

const onAuthentication = function (accessToken, refreshToken, profile, done) {
  findOrSaveUser(profile)
    .then((user) => {
      return done(null, user);
    });
};

const strategy = new Strategy({
  callbackURL: appUrl(`/auth/oauth/callback/`),
  clientID: clientID,
  clientSecret: clientSecret
}, onAuthentication);

module.exports = {
  onAuthentication: onAuthentication,
  Strategy: Strategy,
  strategy: strategy
}
