import { createPortal } from 'react-dom';

export const HEADER_ACTIONS_GROUP_ID = 'extra-actions-group-id';

export const addHeaderActions = (component) => {
  return createPortal(component, document.getElementById(HEADER_ACTIONS_GROUP_ID));
};
