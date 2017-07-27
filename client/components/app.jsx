import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    
  }
}

class AuthenticateLinks extends React.Component {
  render() {
    return <p>
      <a href='/sign-in'>Sign in</a> - or - <a href='/create-account'>create an account</a>
    </p>;
  }
}

ReactDOM.render(<AuthenticateLinks/>, document.getElementById('app'));
