import React, { Component } from 'react';

//axios services
import UserServices from '../../services/UserServices';

//material-ui components
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
  button: {
    justifyContent: 'center',
  },
});

class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      repeatPassword: '',
      errorMessage: '',
      login: false,
    };
  }

  handleChange = name => e => {
    this.setState({
      [name]: e.target.value,
    });
  };

  onAuthSubmit = e => {
    e.preventDefault();
    console.log(this.state.login);
    if (this.state.login) {
      UserServices.loginUser({
        email: this.state.email,
        password: this.state.password,
      })
        .then(user => {
          this.props.updateUser(user.data.user);
        })
        .catch(e => console.log(e));
    } else {
      if (this.state.password !== this.state.repeatPassword) {
        this.setState({
          errorMessage: 'Password and Repeat Password must match!',
        });
      } else {
        UserServices.createUser({
          email: this.state.email,
          password: this.state.password,
          repeatPassword: this.state.repeatPassword,
        })
          .then(user => {
            console.log(user.data.user);
            this.props.updateUser(user.data.user);
          })
          .catch(e => console.log(e));
      }
    }
  };

  changeToLogin = login => {
    this.setState({
      login: login,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.state.errorMessage && (
          <p color="red">{this.state.errorMessage}</p>
        )}
        <Button
          style={{ justifyContent: 'center' }}
          variant="outlined"
          color="primary"
          onClick={() => this.changeToLogin(true)}
        >
          Login
        </Button>
        <Button
          style={{ justifyContent: 'center' }}
          variant="outlined"
          color="primary"
          onClick={() => this.changeToLogin(false)}
        >
          Sign up
        </Button>
        <form
          className={classes.container}
          onChange={this.onChange}
          onSubmit={this.onSubmit}
        >
          <TextField
            id="email"
            label="Email"
            className={classes.textField}
            value={this.state.email}
            onChange={this.handleChange('email')}
            margin="normal"
          />
          <TextField
            id="password-input"
            label="Password"
            value={this.state.password}
            onChange={this.handleChange('password')}
            className={classes.textField}
            type="password"
            margin="normal"
          />
          {!this.state.login && (
            <TextField
              id="repeat-password-input"
              label="Repeat Password"
              value={this.state.repeatPassword}
              onChange={this.handleChange('repeatPassword')}
              className={classes.textField}
              type="password"
              margin="normal"
            />
          )}
          <br />
          <Button variant="outlined" color="primary" onClick={this.onAuthSubmit}>
            {this.state.login ? 'Login' : 'Sign up'}
          </Button>
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(Authentication);
