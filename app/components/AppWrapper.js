import React from 'react';

let AppWrapper = React.createClass({
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
})

export default AppWrapper;
