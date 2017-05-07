import React, { Component } from 'react';
import Input from './../input/input.jsx'

class InputAndLabel extends Component {

  propTypes: {
    text: React.propTypes.string.isRequired,
    name: React.propTypes.string.isRequired,
    label: React.propTypes.string.isRequired,
    onChange: React.propType.func.isRequired,
    error: React.propType.string
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.name}>{this.props.label}</label>
        <Input text={this.props.defaultValue}
          name={this.props.name}
          label={this.props.label}
          onChange={this.props.onChange}
        />
        <div className="input">{this.props.error}</div>
      </div>
    )
  }
}

export default InputAndLabel;
