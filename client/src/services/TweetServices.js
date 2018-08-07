import axios from 'axios';

class TweetServices {
  getAllTweets() {
    return axios.get('/api/tweets');
  }

  getTweetsByUserId(id) {
    return axios.get(`/api/tweets/${id}`);
  }
};

export default new TweetServices();
