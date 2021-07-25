import HTTPClient from '../../../core/services/HTTPClient';

export default {
  login: async (payload) => {
    return await HTTPClient.post('api/v1/auth/login', payload);
  },
  register: async (payload) => {
    return await HTTPClient.post('api/auth/register', payload);
  }
}
