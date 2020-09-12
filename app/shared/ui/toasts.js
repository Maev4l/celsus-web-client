/*
import { useToasts } from 'react-toast-notifications';

const useCustomToasts = () => {
  const { addToast } = useToasts();
  return {
    addErrorToast: (content) => {
      if (content) {
        let message;
        const { errors } = content;
        if (errors) {
          const [e] = errors;
          message = e.message;
        } else {
          message = content.message;
        }
        addToast(message, { appearance: 'error' });
      }
    },
    addSuccessToast: (content) => addToast(content, { appearance: 'success' }),
  };
};
*/

const useCustomToasts = () => {};
export default useCustomToasts;
