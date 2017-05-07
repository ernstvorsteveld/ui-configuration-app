import React, { Component } from 'react';
import './App.css';
import NameForm from './components/nameform/nameform.jsx'

class App extends Component {

  constructor() {
    super();
    this.configuration = {
      components : [
        {
          key: "IL_Firstname",
          component: "InputAndLabel",
          label: "First name",
          name: "firstname",
          text: "victor",
          attribute: "firstname",
          validators: [
            {
              type: "mandatory"
            },
            {
              type: "minlength",
              value: 3,
              error: "First name minimum length is 3."
            }
          ]
        },
        {
          key: "IL_Lastname",
          component: "InputAndLabel",
          label: "Last name",
          name: "lastname",
          text: "Boer",
          attribute: "lastname",
          validators: [
            {
              type: "mandatory"
            },
            {
              type: 'minlength',
              value: 3,
              error: 'Lastname minimum length is 3.'
            }
          ]
        }
      ]
    }

    this.state = this.getInitialState();

    this.setData = this.setData.bind(this);
    this.saveState = this.saveState.bind(this);
  }

  getInitialState() {
    return {
      data: {
        firstname: 'victor',
        middlename: '',
        lastname: 'Boer'
      },
      errors: {}
    };
  }

  setData(event) {
    console.log("setState, name:", event.target.name);
    console.log("setState, value:", event.target.value);
    console.log("setState", event.target.attributes);
    var data = this.state.data;
    data[event.target.name] = event.target.value;
    this.setState({data: data});
  }

  isValid() {
    var isFormValid = true;
    this.setState({data: this.state.data, errors : {}});

    if(this.state.data.firstname.length < 3) {
      this.setState({data: this.state.data, errors: {firstname: "First name minimum length is 3."}});
      isFormValid = false;
    }

    if(this.state.data.lastname.length < 3) {
      this.setState({data: this.state.data, errors: {lastname: "Last name minimum length is 3."}});
      isFormValid = false;
    }

    return isFormValid;
  }

  saveState(event) {
    event.preventDefault();

    if(!this.isValid()) {
      console.log("Error", this.state.errors);
      return;
    }

    var data = this.state.data
    alert("Firstname: " + data.firstname + ", last name: " + data.lastname);
  }

  render() {
    return (
      <div className="App">
        <div className="todo-app">
          <NameForm configuration={this.configuration}
            data={this.state}
            onChange={this.setData}
            onSave={this.saveState} />
        </div>
      </div>
    );
  }
}

export default App;
