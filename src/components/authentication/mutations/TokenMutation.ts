import { commitMutation } from 'relay-runtime';
import { graphql } from 'babel-plugin-relay/macro';

import environment from 'environment';

import {
  ObtainJSONWebTokenInput,
  TokenMutation,
} from './__generated__/TokenMutation.graphql';

const mutation = graphql`
  mutation TokenMutation($input: ObtainJSONWebTokenInput!) {
    tokenAuth(input: $input) {
      token
    }
  }
`;

export default (
  input: ObtainJSONWebTokenInput,
  callback: (token: string) => void,
  errorHandler: (errorMessage: string) => void
) =>
  commitMutation<TokenMutation>(environment, {
    mutation,
    variables: { input },
    onCompleted: (response, errors) => {
      if (errors) {
        errorHandler(errors[0].message);
        return;
      }

      const token = response.tokenAuth?.token;
      if (token) {
        callback(token);
      } else {
        errorHandler('Щось пішло не так');
      }
    },
    onError: () => errorHandler('Щось пішло не так'),
  });
