// from demux's answer at https://stackoverflow.com/questions/38143993/session-auto-logout-after-inactivity

class AutoLogout {
  constructor(history, appName) {
    this.events = ['load', 'mousemove', 'mousedown',
                   'click', 'scroll', 'keypress'];

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

  resetTimeout() {
    this.clearTimeout();
    this.setTimeout();
  }

  warn() {
    //alert('You will be logged out automatically in 10 seconds.');
  }

  logout() {
    // Send a logout request to the API
    if (this.appName) {
      this.history.push(`/apply/${this.appName}/logout`);
    }
    else {
      // have this for now until the sign-in story is merged
      this.history.push('/apply/logout');
    }
    this.destroy();  // Cleanup
  }

  destroy() {
    this.clearTimeout();

    for(var i in this.events) {
      window.removeEventListener(this.events[i], this.resetTimeout);
    }
  }
}

export default AutoLogout;