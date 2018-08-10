import axios from 'axios';

class TweetServices {
  getAllTweets() {
    return axios.get('/api/tweets');
  }

  getTweetsByUserId(id, token) {
    return axios({
      method: 'GET',
      url: `/api/tweets/${id}`,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
  }

  createTweet(tweet, id, email) {
    const token = sessionStorage.getItem('jwt');
    return axios({
      method: 'POST',
      url: `/api/tweets`,
      headers: {
        Authorization: 'Bearer ' + token,
      },
      data: {
        tweet: tweet,
        user_id: id,
        email: email,
      },
    });
  }
}

export default new TweetServices();
