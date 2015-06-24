import React from 'react';
import mixin from 'cerebral/mixin';
import { Link } from 'react-router'

let Login = React.createClass({
  mixins: [mixin],

  getCerebralState() {
    return {
      user: ['currentUser'],
      variables: ['currentVariables']
    }
  },
  render() {
    return (
      <div>
        <div>Current User: {this.state.user.name}</div>
        <br />
        <div>Current Variables: {this.state.variables}</div>
        <br />
        <button onClick={this.setCurrentUser}>Set Current User</button>
      </div>
    );
  },

  setCurrentUser() {
    this.signals.setCurrentUser()
  }
})

export default Login;
