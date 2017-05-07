import React, { Component } from 'react';

class SimpleButton extends Component {

  propTypes: {
    text: React.propTypes.string.isRequired,
    onChange: React.propType.func.isRequired
  }

  render() {
    return (
      <button onClick={this.props.onChange}>{this.props.text}</button>
    )
  }
}

export default SimpleButton;
