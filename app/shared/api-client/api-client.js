import API, { graphqlOperation } from '@aws-amplify/api';

const graphql = async (operation, options) => {
  try {
    const { data } = await API.graphql(graphqlOperation(operation, options));
    return data;
  } catch (e) {
    const { errors } = e;
    if (errors) {
      const [error] = errors;
      const { message } = error;
      throw new Error(message);
    }
    throw e;
  }
};

export default graphql;
