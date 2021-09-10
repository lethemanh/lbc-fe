import HTTPClient from '../../../core/services/HTTPClient';

export default {
  createBet: async (payload) => {
    return await HTTPClient.post('api/bet', payload);
  },
  userBet: async (payload) => {
    return await HTTPClient.get('api/bet/user-bet', payload);
  },
}
