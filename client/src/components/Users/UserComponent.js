import React, { Component } from 'react';

//components
import UserDetails from './UserDetails';
import TweetDetails from '../Tweets/TweetDetails';
import WriteTweet from '../Tweets/WriteTweet';

//axios services
import TweetServices from '../../services/TweetServices';

class UserComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: [],
    };
  }

  componentDidMount() {
    TweetServices.getTweetsByUserId(this.props.user.id, this.props.user.token)
      .then(tweets => {
        let saveTweets = tweets.data.tweets;
        saveTweets = saveTweets.map(tweet => {
          tweet.email = tweets.data.user.email;
          return tweet;
        });
        this.setState({ tweets: saveTweets });
      })
      .catch(e => console.log('Error getting user tweets--->' + e));
  }

  composeTweet = tweet => {
    TweetServices.createTweet(tweet, this.props.user.id, this.props.user.email)
      .then(tweet => {
        let tweetConfig = JSON.parse(tweet.config.data);
        let tweetData = tweet.data.tweet;
        tweetData.email = tweetConfig.email;

        let tweets = this.state.tweets;
        tweets.unshift(tweetData);
        this.setState({
          tweets: tweets,
        });
      })
      .catch(e => 'error in compose tweet--->' + e);
  };

  deleteTweet = removeTweet => {
    TweetServices.deleteTweet(removeTweet)
      .then(response => {
        const initialTweets = this.state.tweets;
        const removedTweets = initialTweets.filter(tweet => {
          if (tweet.id !== removeTweet.id) {
            return tweet;
          }
        });
        console.log(removedTweets);
        this.setState({
          tweets: removedTweets,
        });
      })
      .catch(e => console.log('error in deleting tweet'));
  };

  renderTweets = () => {
    return this.state.tweets.map((tweet, index) => {
      if (tweet) {
        return (
          <TweetDetails
            key={index}
            tweet={tweet}
            deleteTweet={this.deleteTweet}
          />
        );
      } else {
        return null;
      }
    });
  };

  render() {
    return (
      <div>
        <UserDetails user={this.props.user} />
        <WriteTweet composeTweet={this.composeTweet} />
        {this.state.tweets.length > 0 ? (
          this.renderTweets()
        ) : (
          <p>No current tweets! Tweet more to see something!</p>
        )}
      </div>
    );
  }
}

export default UserComponent;
