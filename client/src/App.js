import React, { Component } from 'react';

//components
import UserComponent from './components/Users/UserComponent';
import Authentication from './components/Authentication/Authentication';

//axios services
import UserServices from './services/UserServices';

//material-ui styling components
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loggedIn: false,
      renderLogin: false,
    };
  }

  authCheck = () => {
    if (this.state.loggedIn) {
      this.handleLogout();
    } else {
      this.setState({
        renderLogin: true,
      });
    }
  };

  handleLogout() {
    UserServices.logoutUser()
      .then(res => console.log('LOGGED OUT SUCCESS'))
      .catch(e => console.log('LOGOUT FAILURE'));
  }

  renderLogin() {
    return <Authentication updateUser={this.updateUser} />;
  }

  updateUser = user => {
    this.setState({
      user: user,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              Twitter
            </Typography>
            <Button color="inherit" onClick={this.authCheck}>
              {this.state.loggedIn ? 'Logout' : 'Sign up / Log in'}
            </Button>
          </Toolbar>
        </AppBar>
        <UserComponent user={this.state.user} />
        {this.state.renderLogin && this.renderLogin()}
      </div>
    );
  }
}

export default withStyles(styles)(App);
