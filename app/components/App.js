import React from 'react';
import { RouteHandler } from 'react-router';

let App = React.createClass({
  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <RouteHandler />
      </div>
    );
  }
})

export default App;
