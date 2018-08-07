import React, { Component } from 'react';
import UserService from '../../services/UserServices';
import UserDetails from './UserDetails';
import TweetDetails from '../Tweets/TweetDetails';

class UserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDataLoaded: false,
      users: [],
    };
  }

  componentDidMount() {
    UserService.getUserById(1)
      .then(responseUser => {
        console.log(responseUser.data);
        this.setState({
          userDataLoaded: true,
          user: responseUser.data,
        });
      })
      .catch(e => console.log(e));
  }

  renderUsers(user) {
    return (
      <div>
        <UserDetails user={user.user} />
      </div>
    );
  }

  renderTweets(user) {
    return user.tweets.map((tweet, index) => {
      return <TweetDetails key={index} tweet={tweet} />;
    });
  }

  render() {
    const user = this.state.user;
    return (
      <div>
        {this.state.userDataLoaded && this.renderUsers(user)}
        {this.state.userDataLoaded && this.renderTweets(user)}
      </div>
    );
  }
}

export default UserComponent;
