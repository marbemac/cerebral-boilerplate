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
    if (this.props.inputValue) {
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
        <form onSubmit={this.onInputValueSubmit.bind(this)}>
          <input type="text" value={this.props.inputValue} onChange={this.changeInputValue.bind(this)}/>
        </form>
        <ul>
          {this.props.list.map(this.renderListItem)}
        </ul>
        <Link to='login'>Login</Link>
      </div>
    );
  }
})

export default Login;
