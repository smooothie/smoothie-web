import React from 'react';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import Account from './Account';
import { AccountList_accounts } from './__generated__/AccountList_accounts.graphql';

type Props = {
  accounts: AccountList_accounts;
};

const PureAccountList: React.FC<Props> = ({ accounts }) => (
  <div style={{ textAlign: 'center', margin: '40px' }}>
    Account List
    {accounts.edges.map(edge =>
      edge === null || edge.node === null ? null : (
        <Account key={edge.node.__id} account={edge.node} />
      )
    )}
  </div>
);

const AccountList = createFragmentContainer(PureAccountList, {
  accounts: graphql`
    fragment AccountList_accounts on AccountNodeConnection {
      edges {
        node {
          ...Account_account
        }
      }
    }
  `,
});

AccountList.displayName = 'AccountList';

export default AccountList;
