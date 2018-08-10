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
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const drawerWidth = 140;

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  toolbar: theme.mixins.toolbar,
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      loggedIn: false,
      renderLogin: true,
    };
  }

  componentDidMount() {
    const token = sessionStorage.getItem('jwt');
    UserServices.getCurrentUser(token)
      .then(user => {
        user = user.data.user;
        console.log(user);
        user.token = token;
        sessionStorage.setItem('jwt', token);
        sessionStorage.setItem('email', user.email);
        this.setState({
          user: user,
          loggedIn: true,
          renderLogin: false,
        });
      })
      .catch(e => console.log('No currently signed in user...'));
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
      .then(res => console.log('LOG OUT SUCCESS'))
      .catch(e => console.log('LOGOUT FAILURE'));
  }

  updateUser = (user, token) => {
    user = JSON.parse(user);
    user.token = token;
    sessionStorage.setItem('jwt', token);
    sessionStorage.setItem('email', user.email);
    this.setState({
      user: user,
      loggedIn: true,
      renderLogin: false,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="absolute" className={classes.appBar}>
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
        <Drawer
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.toolbar} />
          <List>Casey</List>
          <Divider />
          <List>Casey</List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {this.state.renderLogin ? (
            <Authentication updateUser={this.updateUser} />
          ) : (
            <UserComponent user={this.state.user} />
          )}
        </main>
      </div>
    );
  }
}

export default withStyles(styles)(App);
