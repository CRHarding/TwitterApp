import React, { Component } from 'react';
import UserService from '../../services/UserServices';
import UserDetails from './UserDetails';
import TweetDetails from '../Tweets/TweetDetails';

class UserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  renderUsers(user) {
    return (
      <div>
        <UserDetails user={user.user} />
      </div>
    );
  }

  renderTweets(user) {
    if (user.tweets) {
      return user.tweets.map((tweet, index) => {
        return <TweetDetails key={index} tweet={tweet} />;
      });
    } else {
      return <p>No current tweets! Tweet more to see something!</p>
    }
  }

  render() {
    return (
      <div>
        <UserDetails user={this.props.user} />
        {this.renderTweets(this.props.user)}
      </div>
    );
  }
}

export default UserComponent;
