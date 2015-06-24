import React from 'react';
import mixin from 'cerebral/mixin';
import { Link } from 'react-router'

let Login = React.createClass({
  mixins: [mixin],

  getCerebralState() {
    return {
      user: ['currentUser'],
      variables: ['currentVariables'],
      unsetTest: ['unsetTest']
    }
  },
  render() {
    return (
      <div>
        <div>Current User: {this.state.user.name}</div>
        <br />
        <div>Current Variables: {this.state.variables}</div>
        <br />
        <button onClick={this.signals.setCurrentUser}>Set Current User</button>
        <br />
        <br />
        <div>
          unsetTest: {JSON.stringify(this.state.unsetTest.toJS())}
        </div>
        <button onClick={this.signals.runUnsetTest}>Run Unset Test</button>
      </div>
    );
  }
})

export default Login;
