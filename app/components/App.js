import React from 'react';
import { RouteHandler } from 'react-router';

let App = React.createClass({
  childContextTypes: {
    cerebral: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      cerebral: this.props.cerebral
    };
  },

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
