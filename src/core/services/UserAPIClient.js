import HTTPClient from './HTTPClient';

export default {
  getInfoPlayer: async (payload) => {
    return await HTTPClient.get('api/users/profile', payload);
  }
}
