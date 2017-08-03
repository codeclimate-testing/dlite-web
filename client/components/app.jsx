import React    from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter }  from 'react-router-dom';

import AppContents from './app-contents.jsx';

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <AppContents />
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<Router/>, document.getElementById('app'));
