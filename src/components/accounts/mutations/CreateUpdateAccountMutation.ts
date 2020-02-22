import { graphql } from 'babel-plugin-relay/macro';
import { commitMutation } from 'relay-runtime';

import environment from 'environment';

import {
  CreateUpdateAccountMutationInput,
  CreateUpdateAccountMutation,
  AccountBalanceCurrency,
} from './__generated__/CreateUpdateAccountMutation.graphql';

// TODO: is it possible to infer from Response?
type Account = {
  readonly id: string;
  readonly itemType: string;
  readonly name: string;
  readonly balance: number;
  readonly balanceCurrency: AccountBalanceCurrency;
};

const mutation = graphql`
  mutation CreateUpdateAccountMutation(
    $input: CreateUpdateAccountMutationInput!
  ) {
    account(input: $input) {
      account {
        id
        itemType
        name
        balance
        balanceCurrency
      }
    }
  }
`;

export default (
  input: CreateUpdateAccountMutationInput,
  callback: (account: Account) => void,
  errorHandler: (errorMessage: string) => void
) =>
  commitMutation<CreateUpdateAccountMutation>(environment, {
    mutation,
    variables: { input },
    onCompleted: (response, errors) => {
      if (errors) {
        errorHandler(errors[0].message);
        return;
      }

      const account = response.account?.account;
      if (account) {
        callback(account);
      } else {
        errorHandler('Щось пішло не так');
      }
    },
    onError: () => errorHandler('Щось пішло не так'),
  });
