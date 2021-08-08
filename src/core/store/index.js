import { init } from '@rematch/core';
import { auth } from '../../modules/auth/models';

const store = init({
  models: {
    auth
  }
});

export default store;
