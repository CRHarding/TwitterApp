import axios from 'axios';

class TweetServices {
  getAllTweets() {
    return axios.get('/api/tweets');
  }

  createUser(user) {
    return axios({
      method: 'POST',
      url: `/api/users/sign_up`,
      data: {
        user: user,
      },
    });
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
}

export default new TweetServices();
