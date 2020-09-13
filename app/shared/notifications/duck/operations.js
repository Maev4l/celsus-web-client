import actions from './actions';

const { pushNotification, dismissNotification } = actions;

const generateId = () => Math.floor(Math.random() * Math.floor(100));

const notify = (type, message) => (dispatch) => {
  const notification = {
    id: generateId(),
    type,
    message,
  };
  dispatch(pushNotification(notification));
};

const dismiss = (id) => (dispatch) => {
  dispatch(dismissNotification(id));
};

export default {
  notify,
  dismiss,
};
