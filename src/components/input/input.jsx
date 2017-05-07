import React, { Component } from 'react';

class Input extends Component {

  propTypes: {
    value: React.propTypes.string.isRequired,
    name: React.propTypes.string.isRequired,
    onChange: React.propType.func.isRequired
  }

  render() {
    return (
      <div>
        <input type="text"
          value={this.props.text}
          name={this.props.name}
          onChange={this.props.onChange}
        />
      </div>
    )
  }
}

export default Input;
