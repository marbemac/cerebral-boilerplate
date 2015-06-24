import React from 'react';
import { Link, RouteHandler } from 'react-router';

let App = React.createClass({
  propTypes: {
    cerebral: React.PropTypes.object.isRequired
  },

  childContextTypes: {
    cerebral: React.PropTypes.object
  },

  getChildContext: function() {
    return {
      cerebral: this.props.cerebral
    }
  },

  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <RouteHandler />
        <br />
        <Link to='variables'>Variables</Link>
      </div>
    );
  }
})

export default App;
