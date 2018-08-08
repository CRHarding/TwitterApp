import axios from 'axios';

class UserServices {
  getAllUsers() {
    return axios.get('/api/users');
  }

  getUserById(id) {
    return axios.get(`/api/users/${id}`);
  }

  createUser(user) {
    return axios({
      method: 'POST',
      url: `/api/users`,
      data: {
        user: user,
      },
    });
  }

  loginUser(user) {
    return axios({
      method: 'POST',
      url: `/api/users`,
      data: {
        user: user,
      },
    });
  }

  logoutUser() {
    return axios.delete(`/users/sign_out`);
  }

  updateUser(user) {
    return axios.put(`/api/users/${user.id}`);
  }

  deleteUser(id) {
    return axios.delete(`/api/users/${id}`);
  }
}

export default new UserServices();
