import { createPortal } from 'react-dom';

export const HEADER_ACTIONS_GROUP_ID = 'extra-actions-group-id';

const NavHeaderActions = ({ children }) => {
  return createPortal(children, document.getElementById(HEADER_ACTIONS_GROUP_ID));
};

export default NavHeaderActions;
