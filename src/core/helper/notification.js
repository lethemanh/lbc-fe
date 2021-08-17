import { notification } from 'antd';
import { NOTIFICATION_ERROR } from '../constants/errorMessage';
import { NOTIFICATION_SUCCESS, BET_SUCCESS } from '../constants/successMessage';

export const openNotification = (amount, choice) => {
  notification.success({
    message: NOTIFICATION_SUCCESS,
    description: BET_SUCCESS(amount, choice),
  });
};

export const errorNotification = (message) => {
  notification.error({
    message: NOTIFICATION_ERROR,
    description: message,
  });
};
