import { init } from '@rematch/core';
import { auth } from '../../modules/auth/models';
import { user } from './models/user';

const store = init({
  models: {
    auth,
    user
  }
});

export default store;
