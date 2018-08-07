import React, { Component } from 'react';

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      email: '',
      password: '',
      repeatPassword: '',
    };
  }

  onChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
      repeatPassword: this.state.repeatPassword,
    };
    this.props.onAuthSubmit(user);
  };

  render() {
    return (
      <form onChange={this.onChange} onSubmit={this.onSubmit}>
        Email:<br/>
        <input type="text" name="email"/><br/>
        Password:<br/>
        <input type="password" name="password"/><br/>
        Repeat Password:<br/>
        <input type="password" name="repeatPassword"/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Authentication;
