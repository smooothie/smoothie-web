import React from 'react';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import { Account_account } from './__generated__/Account_account.graphql';

type Props = {
  account: Account_account;
};

const PureAccount: React.FC<Props> = ({
  account: { name, accountType, balance, balanceCurrency },
}) => (
  <div style={{ textAlign: 'center', margin: '40px' }}>
    <div>Name: {name}</div>
    <div>Account type: {accountType}</div>
    <div>Balance: {balance}</div>
    <div>Currency: {balanceCurrency}</div>
  </div>
);

const Account = createFragmentContainer(PureAccount, {
  account: graphql`
    fragment Account_account on AccountNode {
      id
      name
      accountType
      balance
      balanceCurrency
    }
  `,
});

Account.displayName = 'Account';

export default Account;
