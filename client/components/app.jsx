import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link }  from 'react-router-dom';

import Router from './router.jsx';

class App extends React.Component {
  render() {
    return <div>
      <Router />
    </div>;
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
