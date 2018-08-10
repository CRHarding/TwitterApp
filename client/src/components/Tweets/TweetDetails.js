import React from 'react';

//material-ui helper components
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const TweetDetails = props => {
  const tweet = props.tweet;
  let tweetDate = new Date(tweet.created_at);
  tweetDate = tweetDate.toString().slice(0, 21);

  return (
    <Grid container spacing={24}>
      <Grid item xs={6}>
        <Paper elevation={1}>
          <Typography variant="headline" component="h4">
            {tweet.tweet_text}
          </Typography>
          <Typography component="p">{tweet.email}</Typography>
          <Typography component="p">{tweetDate}</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TweetDetails;
