import React from 'react';
import mixin from 'cerebral/mixin';
import { Link } from 'react-router'

let Login = React.createClass({
  mixins: [mixin],

  getCerebralState() {
    return ['inputValue', 'list']
  },
  onInputValueSubmit(event) {
    event.preventDefault();
    if (this.state.inputValue) {
      this.signals.inputValueSubmitted();
    }
  },
  changeInputValue(event) {
    this.signals.inputValueChanged(event.target.value);
  },
  renderListItem(item, index) {
    return <li key={index}>{item}</li>
  },
  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.onInputValueSubmit}>
          <input type="text" value={this.state.inputValue} onChange={this.changeInputValue}/>
        </form>
        <ul>
          {this.state.list.map(this.renderListItem)}
        </ul>
        <Link to='login'>Login</Link>
      </div>
    );
  }
})

export default Login;
