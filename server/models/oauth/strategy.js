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

    let _op_    = options.operation ? options.operation : 'signin';
    let _lang_  = options.language  ? options.language  : 'en';
    let _name_  = 'oauth2' + '-' + _op_ + '-' + _lang_;

    let authURl = '/oauth/authorize' + '?op=' + _op_ + '&lang=' + _lang_;

    options.authorizationURL  = idMeUrl(authURl);
    options.tokenURL          = idMeUrl('/oauth/token');

    super(options, verify);

    if(!options.operation && !options.language) {
      _name_ = 'oauth2';
    }

    this.name             = _name_;
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
  callbackURL:      appUrl(`/auth/oauth/callback/`),
  clientID:         clientID,
  clientSecret:     clientSecret
}, onAuthentication);

// en - English
const strategySignInEn = new Strategy({
  callbackURL:      appUrl(`/auth/oauth/callback/`),
  clientID:         clientID,
  clientSecret:     clientSecret,
  operation:        'signin',
  language:         'en'
}, onAuthentication);

const strategySignUpEn = new Strategy({
  callbackURL:      appUrl(`/auth/oauth/callback/`),
  clientID:         clientID,
  clientSecret:     clientSecret,
  operation:        'signup',
  language:         'en'
}, onAuthentication);

// es - Spanish
const strategySignInEs = new Strategy({
  callbackURL:      appUrl(`/auth/oauth/callback/`),
  clientID:         clientID,
  clientSecret:     clientSecret,
  operation:        'signin',
  language:         'es'
}, onAuthentication);

const strategySignUpEs = new Strategy({
  callbackURL:      appUrl(`/auth/oauth/callback/`),
  clientID:         clientID,
  clientSecret:     clientSecret,
  operation:        'signup',
  language:         'es'
}, onAuthentication);

// hi - Hindi
const strategySignInHi = new Strategy({
  callbackURL:      appUrl(`/auth/oauth/callback/`),
  clientID:         clientID,
  clientSecret:     clientSecret,
  operation:        'signin',
  language:         'hi'
}, onAuthentication);

const strategySignUpHi = new Strategy({
  callbackURL:      appUrl(`/auth/oauth/callback/`),
  clientID:         clientID,
  clientSecret:     clientSecret,
  operation:        'signup',
  language:         'hi'
}, onAuthentication);

// ja - Japanese
const strategySignInJa = new Strategy({
  callbackURL:      appUrl(`/auth/oauth/callback/`),
  clientID:         clientID,
  clientSecret:     clientSecret,
  operation:        'signin',
  language:         'ja'
}, onAuthentication);

const strategySignUpJa = new Strategy({
  callbackURL:      appUrl(`/auth/oauth/callback/`),
  clientID:         clientID,
  clientSecret:     clientSecret,
  operation:        'signup',
  language:         'ja'
}, onAuthentication);

// km - Khmer
const strategySignInKm = new Strategy({
  callbackURL:      appUrl(`/auth/oauth/callback/`),
  clientID:         clientID,
  clientSecret:     clientSecret,
  operation:        'signin',
  language:         'km'
}, onAuthentication);

const strategySignUpKm = new Strategy({
  callbackURL:      appUrl(`/auth/oauth/callback/`),
  clientID:         clientID,
  clientSecret:     clientSecret,
  operation:        'signup',
  language:         'km'
}, onAuthentication);

// ko - Korean
const strategySignInKo = new Strategy({
  callbackURL:      appUrl(`/auth/oauth/callback/`),
  clientID:         clientID,
  clientSecret:     clientSecret,
  operation:        'signin',
  language:         'ko'
}, onAuthentication);

const strategySignUpKo = new Strategy({
  callbackURL:      appUrl(`/auth/oauth/callback/`),
  clientID:         clientID,
  clientSecret:     clientSecret,
  operation:        'signup',
  language:         'ko'
}, onAuthentication);

// th - Thai
const strategySignInTh = new Strategy({
  callbackURL:      appUrl(`/auth/oauth/callback/`),
  clientID:         clientID,
  clientSecret:     clientSecret,
  operation:        'signin',
  language:         'th'
}, onAuthentication);

const strategySignUpTh = new Strategy({
  callbackURL:      appUrl(`/auth/oauth/callback/`),
  clientID:         clientID,
  clientSecret:     clientSecret,
  operation:        'signup',
  language:         'th'
}, onAuthentication);

// tl - Tagalog
const strategySignInTl = new Strategy({
  callbackURL:      appUrl(`/auth/oauth/callback/`),
  clientID:         clientID,
  clientSecret:     clientSecret,
  operation:        'signin',
  language:         'tl'
}, onAuthentication);

const strategySignUpTl = new Strategy({
  callbackURL:      appUrl(`/auth/oauth/callback/`),
  clientID:         clientID,
  clientSecret:     clientSecret,
  operation:        'signup',
  language:         'tl'
}, onAuthentication);

// vi - Vietnamese
const strategySignInVi = new Strategy({
  callbackURL:      appUrl(`/auth/oauth/callback/`),
  clientID:         clientID,
  clientSecret:     clientSecret,
  operation:        'signin',
  language:         'vi'
}, onAuthentication);

const strategySignUpVi = new Strategy({
  callbackURL:      appUrl(`/auth/oauth/callback/`),
  clientID:         clientID,
  clientSecret:     clientSecret,
  operation:        'signup',
  language:         'vi'
}, onAuthentication);

// zh - Chinese
const strategySignInZh = new Strategy({
  callbackURL:      appUrl(`/auth/oauth/callback/`),
  clientID:         clientID,
  clientSecret:     clientSecret,
  operation:        'signin',
  language:         'zh'
}, onAuthentication);

const strategySignUpZh = new Strategy({
  callbackURL:      appUrl(`/auth/oauth/callback/`),
  clientID:         clientID,
  clientSecret:     clientSecret,
  operation:        'signup',
  language:         'zh'
}, onAuthentication);

module.exports = {
  onAuthentication:   onAuthentication,
  Strategy:           Strategy,
  strategy:           strategy,
  //English
  strategySignInEn:   strategySignInEn,
  strategySignUpEn:   strategySignUpEn,
  //Spanish
  strategySignInEs:   strategySignInEs,
  strategySignUpEs:   strategySignUpEs,
  //Hindi
  strategySignInHi:   strategySignInHi,
  strategySignUpHi:   strategySignUpHi,
  //Japanese
  strategySignInJa:   strategySignInJa,
  strategySignUpJa:   strategySignUpJa,
  //Khmer
  strategySignInKm:   strategySignInKm,
  strategySignUpKm:   strategySignUpKm,
  //Korean
  strategySignInKo:   strategySignInKo,
  strategySignUpKo:   strategySignUpKo,
  //Thai
  strategySignInTh:   strategySignInTh,
  strategySignUpTh:   strategySignUpTh,
  //Tagalog
  strategySignInTl:   strategySignInTl,
  strategySignUpTl:   strategySignUpTl,
  //Vietnamese
  strategySignInVi:   strategySignInVi,
  strategySignUpVi:   strategySignUpVi,
  //Chinese
  strategySignInZh:   strategySignInZh,
  strategySignUpZh:   strategySignUpZh,

}