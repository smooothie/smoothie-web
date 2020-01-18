import { commitMutation } from 'relay-runtime';
import { graphql } from 'babel-plugin-relay/macro';
import Cookies from 'js-cookie';

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

export default (input: ObtainJSONWebTokenInput) =>
  commitMutation<TokenMutation>(environment, {
    mutation,
    variables: { input },
    onCompleted: response => {
      const token = response.tokenAuth?.token;
      if (token) {
        Cookies.set('JWT', token);
        window.location.reload();
      }
    },
  });
