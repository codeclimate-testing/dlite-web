// from demux's answer at https://stackoverflow.com/questions/38143993/session-auto-logout-after-inactivity
import fetch                from 'isomorphic-fetch';
require('es6-promise').polyfill();
import { logOut }           from '../../actions/log-out';

class AutoLogout {
  constructor(dispatch) {
    this.events = ['load', 'mousedown', 'touchstart',
                   'click', 'keypress'];

    this.warn = this.warn.bind(this);
    this.logout = this.logout.bind(this);
    this.resetTimeout = this.resetTimeout.bind(this);
    this.dispatch = dispatch;

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
    this.logoutTimeout = setTimeout(this.logout, APP_TIMEOUT);
  }

  resetTimeout(e) {
    this.clearTimeout();
    this.setTimeout();
  }

  warn() {
    //alert('You will be logged out automatically in 10 seconds.');
  }

  logout() {
    this.dispatch(logOut());
    this.destroy();
  }

  destroy() {
    this.clearTimeout();

    for(var i in this.events) {
      window.removeEventListener(this.events[i], this.resetTimeout);
    }
  }
}

export default AutoLogout;