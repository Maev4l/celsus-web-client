import API, { graphqlOperation } from '@aws-amplify/api';
import Auth from '@aws-amplify/auth';

const graphql = async (operation, options) => {
  const currentSession = await Auth.currentSession();
  const {
    idToken: { jwtToken },
  } = currentSession;

  const headers = {
    Accept: 'application/json;charset=UTF-8',
    Authorization: jwtToken,
  };

  let result;
  try {
    const { data } = await API.graphql(graphqlOperation(operation, options), headers);
    result = data;
  } catch (e) {
    const { errors } = e;
    if (errors) {
      const [error] = errors;
      const { message } = error;
      throw new Error(message);
    }
  }
  return result;
};

export default graphql;
