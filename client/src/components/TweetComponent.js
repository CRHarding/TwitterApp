import React, { Component } from 'react';
import TweetService from '../services/TweetServices';

class TweetComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweetDataLoaded: false,
      tweets: [],
    };
  }

  componentDidMount() {
    TweetService.getAllTweets()
      .then(responseTweets => {
        console.log(responseTweets.data.tweets);
        this.setState({
          tweetDataLoaded: true,
          tweets: responseTweets.data.tweets,
        });
      })
      .catch(e => console.log(e));
  }

  renderTweets(tweets) {
    return tweets.map((tweet, index) => {
      return <p key={index}>{tweet.tweet_text}</p>;
    });
  }

  render() {
    const tweets = this.state.tweets;
    return <div>{this.state.tweetDataLoaded && this.renderTweets(tweets)}</div>;
  }
}

export default TweetComponent;
