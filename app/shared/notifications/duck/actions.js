import types from './types';

const { PUSH_NOTIFICATION, DISMISS_NOTIFICATION } = types;

const pushNotification = (notification) => ({ type: PUSH_NOTIFICATION, notification });

const dismissNotification = (id) => ({ type: DISMISS_NOTIFICATION, id });

export default {
  pushNotification,
  dismissNotification,
};
