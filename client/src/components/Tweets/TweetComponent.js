import React, { Component } from 'react';
import TweetDetails from './TweetDetails';

const TweetComponent = props => {
  return props.tweets.map((tweet, index) => {
    if (tweet) {
      return <TweetDetails key={index} tweet={tweet} />;
    } else {
      return null;
    }
  });
};

export default TweetComponent;
