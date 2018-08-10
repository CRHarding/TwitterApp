import React, { Component } from 'react';
import UserDetails from './UserDetails';
import TweetDetails from '../Tweets/TweetDetails';
import TweetServices from '../../services/TweetServices';

class UserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: null,
    };
  }

  componentDidMount() {
    console.log(this.props.user);
    TweetServices.getTweetsByUserId(this.props.user.id, this.props.user.token)
      .then(tweets => {
        console.log(tweets);
        this.setState({ tweets: tweets });
      })
      .catch(e => console.log('Error getting user tweets--->' + e));
  }

  renderTweets(user) {
    if (user.tweets) {
      return user.tweets.map((tweet, index) => {
        if (tweet) {
          return <TweetDetails key={index} tweet={tweet} />;
        } else {
          return null;
        }
      });
    } else {
      return <p>No current tweets! Tweet more to see something!</p>;
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
