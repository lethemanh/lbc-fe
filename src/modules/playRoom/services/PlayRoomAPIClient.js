import HTTPClient from '../../../core/services/HTTPClient';

export default {
  createBet: async (payload) => {
    return await HTTPClient.post('api/bet', payload);
  }
}
