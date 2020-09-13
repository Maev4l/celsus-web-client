import types from './types';

const { PUSH_NOTIFICATION, DISMISS_NOTIFICATION } = types;

/*
notification = {
    id,
    type,
    message,
}
*/
const INITIAL_STATE = {
  notifications: [],
};

const notifications = (state = INITIAL_STATE, action) => {
  const { type } = action;
  switch (type) {
    case PUSH_NOTIFICATION: {
      const { notification } = action;
      return { ...state, notifications: [...state.notifications, notification] };
    }

    case DISMISS_NOTIFICATION: {
      const { id } = action;
      return { ...state, notifications: state.notifications.filter((n) => n.id !== id) };
    }

    default:
      return { ...state };
  }
};

export default notifications;
