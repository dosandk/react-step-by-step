import React, {Component} from 'react';
import {TextField} from 'material-ui';

export default class Authorization extends Component {
  constructor (...args) {
    super(...args);

    this.state = {
      name: '',
      pass: ''
    };

    this.onInputChanged = this.onInputChanged.bind(this);
    this.login = this.login.bind(this);
  }

  onInputChanged (e) {
    const field = e.target.name;
    const {value} = e.target;

    this.setState({[field]: value});
  }

  login () {
    localStorage.setItem('user', this.state.name);
    location.reload();
  }

  render () {
    return (
      <div>
        <div>
          <TextField fullWidth={true}
                     value={this.state.name}
                     name="name"
                     onChange={this.onInputChanged}
                     placeholder="name"
                     type="text"/>
        </div>
        <div>
          <TextField fullWidth={true}
                     value={this.state.pass}
                     name="pass"
                     onChange={this.onInputChanged}
                     placeholder="name"
                     type="text"/>
        </div>
        <button onClick={this.login}>Login</button>
      </div>
    );
  }
}
