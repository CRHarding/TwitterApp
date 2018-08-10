import axios from 'axios';

class UserServices {
  getAllUsers() {
    return axios.get('/api/users');
  }

  getCurrentUser(token) {
    return axios({
      method: 'GET',
      url: `/api/users/current`,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    });
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

  loginUser(user) {
    return axios({
      method: 'POST',
      url: `/api/users/sign_in`,
      data: {
        user: user,
      },
    });
  }

  logoutUser() {
    return axios.delete(`api/users/sign_out`);
  }

  updateUser(user) {
    return axios.put(`/api/users/${user.id}`);
  }

  deleteUser(id) {
    return axios.delete(`/api/users/${id}`);
  }
}

export default new UserServices();
