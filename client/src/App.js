import React, { Component } from 'react';
import UserComponent from './components/Users/UserComponent';
import Authentication from './components/Authentication/Authentication';
import UserServices from './services/UserServices';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loggedIn: false,
    };
  }

  onAuthSubmit = (user) => {
    UserServices.createUser({
      email: user.email,
      password: user.password,
      repeat_password: user.repeatPassword,
    })
      .then(user => {
        console.log(user.data.user);
        this.setState({
          user: user.data.user,
        });
      })
      .catch(e => console.log(e));
  }
;
  render() {
    if (this.state.loggedIn) {
      return (
        <div>
          <UserComponent user={this.state.user} />
        </div>
      );
    } else {
      return (
        <div>
          <Authentication onAuthSubmit={this.onAuthSubmit} />
        </div>
      );
    }
  }
}

export default App;
