import { graphql } from 'babel-plugin-relay/macro';
import { commitMutation } from 'relay-runtime';

import environment from 'environment';

import {
  CreateTransactionMutation,
  CreateTransactionMutationInput,
} from './__generated__/CreateTransactionMutation.graphql';

// TODO: retrieve more info from response when we are able to put directly to store
const mutation = graphql`
  mutation CreateTransactionMutation($input: CreateTransactionMutationInput!) {
    transaction(input: $input) {
      transaction {
        id
      }
    }
  }
`;

export default (
  input: CreateTransactionMutationInput,
  callback: () => void,
  errorHandler: (errorMessage: string) => void
) =>
  commitMutation<CreateTransactionMutation>(environment, {
    mutation,
    variables: { input },
    onCompleted: (response, errors) => {
      if (errors) {
        errorHandler(errors[0].message);
        return;
      }

      const respData = response.transaction?.transaction;
      if (respData) {
        callback();
      } else {
        errorHandler('Щось пішло не так');
      }
    },
    onError: () => errorHandler('Щось пішло не так'),
  });
