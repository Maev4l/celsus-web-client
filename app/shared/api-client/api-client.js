import API, { graphqlOperation } from '@aws-amplify/api';
import Auth from '@aws-amplify/auth';

const graphql = async (operation) => {
  const currentSession = await Auth.currentSession();
  const {
    idToken: { jwtToken },
  } = currentSession;

  const headers = {
    Accept: 'application/json;charset=UTF-8',
    Authorization: jwtToken,
  };

  const result = await API.graphql(graphqlOperation(operation), headers);
  return result;
};

export default graphql;
