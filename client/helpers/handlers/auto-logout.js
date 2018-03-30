// from demux's answer at https://stackoverflow.com/questions/38143993/session-auto-logout-after-inactivity
import fetch                from 'isomorphic-fetch';
import { buildLoggedOut }   from '../data/cookies';

class AutoLogout {
  constructor(history, appName) {
    this.events = ['load', 'mousedown', 'touchstart',
                   'click', 'keypress'];

    this.warn = this.warn.bind(this);
    this.logout = this.logout.bind(this);
    this.resetTimeout = this.resetTimeout.bind(this);
    this.history = history;
    this.appName = appName;

    for(var i in this.events) {
      window.addEventListener(this.events[i], this.resetTimeout);
    }

    this.setTimeout();
  }

  clearTimeout() {
    if(this.warnTimeout)
      clearTimeout(this.warnTimeout);

    if(this.logoutTimeout)
      clearTimeout(this.logoutTimeout);
  }

  setTimeout() {
    //this.warnTimeout = setTimeout(this.warn, 1.83 * 60 * 1000);
    this.logoutTimeout = setTimeout(this.logout, 2 * 60 * 1000);
  }

  resetTimeout(e) {
    this.clearTimeout();
    this.setTimeout();
  }

  warn() {
    //alert('You will be logged out automatically in 10 seconds.');
  }

  logout() {
    let that = this;

    buildLoggedOut();

    let redirect = `/apply/${this.appName}/sign-in`;
    return fetch('/apply/log-out', {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((res) => {
      that.destroy();
      return that.history.push(redirect);
    });
  }

  destroy() {
    this.clearTimeout();

    for(var i in this.events) {
      window.removeEventListener(this.events[i], this.resetTimeout);
    }
  }
}

export default AutoLogout;