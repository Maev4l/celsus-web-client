import { useDispatch } from 'react-redux';

import { operations } from './duck';

export const useNotification = () => {
  const dispatch = useDispatch();
  return {
    notify: (type, message) => {
      const { notify } = operations;
      dispatch(notify(type, message));
    },
  };
};

export { default as NotificationsManager } from './NotificationsManager';
