import React, { Component } from 'react';

const TweetDetails = props => {
  const tweet = props.tweet;
  return (
    <div>
      <p>{tweet.created_at}</p>
      <p>{tweet.tweet_text}</p>
    </div>
  );
};

export default TweetDetails;
