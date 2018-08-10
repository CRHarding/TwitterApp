import React, { Component } from 'react';

//@material-ui components
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 700,
  },
  menu: {
    width: 200,
  },
  button: {
    justifyContent: 'center',
  },
});

class WriteTweet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet_text: '',
      errorMessage: '',
    };
  }

  handleChange = name => e => {
    if (this.state.tweet_text.length + e.target.value.length > 160) {
      const tweetText = e.target.value.slice(0, 160);

      this.setState({
        tweet_text: tweetText,
        errorMessage: 'Tweets can only be 160 characters or less!',
      });
    } else {
      this.setState({
        [name]: e.target.value,
      });
    }
  };

  onTweetSubmit = e => {
    const tweet = {};
    tweet.tweet_text = this.state.tweet_text;
    this.setState({
      tweet_text: '',
    });
    this.props.composeTweet(tweet);
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.state.errorMessage && (
          <p color="red">{this.state.errorMessage}</p>
        )}
        <Grid container spacing={24}>
          <form
            className={classes.container}
            onChange={this.onChange}
            onSubmit={this.onTweetSubmit}
          >
            <Grid item xs={12}>
              <TextField
                id="tweet_text"
                label="Tweet"
                multiline
                rows="1"
                fullWidth
                className={classes.textField}
                margin="normal"
                value={this.state.tweet_text}
                onChange={this.handleChange('tweet_text')}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="outlined"
                color="primary"
                onClick={this.onTweetSubmit}
              >
                Tweet It!
              </Button>
            </Grid>
          </form>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(WriteTweet);
