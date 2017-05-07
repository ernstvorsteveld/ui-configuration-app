import React, { Component } from 'react';
import InputAndLabel from './../inputAndLabel/inputAndLabel.jsx'
import SimpleButton from './../simplebutton/simplebutton.jsx'

class NameForm extends Component {

  propTypes: {
    configuration: React.propTypes.object.isRequired,
    data: React.propTypes.string.isRequired,
    key: React.propTypes.string.isRequired,
    text: React.propTypes.string,
    name: React.propTypes.string.isRequired,
    label: React.propTypes.string.isRequired,
    error: React.propType.string,
    onChange: React.propType.func.isRequired
  }

  render() {
    console.log("NameForm, props: ", this.props.data);
    return (
      <div>
        {this.props.configuration.components.map( (component) => {
          switch(component.component) {
            case 'InputAndLabel' : {
              return <InputAndLabel key={component.key}
                  defaultValue={this.props.data.data[component.attribute]}
                  name={component.attribute}
                  label={component.label}
                  error="unkonwn"
                  onChange={this.props.onChange}
                  />
            }
            default: {
              return null;
            }
          }
        })}

        <SimpleButton text='Save'
          onChange={this.props.onSave} />
      </div>
    )
  }
}

export default NameForm;
