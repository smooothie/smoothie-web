import React from 'react';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Account from './Account';
import { AccountList_accounts } from './__generated__/AccountList_accounts.graphql';

type Props = {
  accounts: AccountList_accounts;
};

const PureAccountList: React.FC<Props> = ({ accounts }) => {
  return (
    <Box marginTop={4}>
      <Typography component="h1" variant="h5" align="center">
        Account List
      </Typography>
      <Box marginTop={3}>
        <Grid container spacing={3}>
          {accounts.edges.map(edge =>
            edge === null || edge.node === null ? null : (
              <Grid item xs={12}>
                <Account key={edge.node.__id} account={edge.node} />
              </Grid>
            )
          )}
        </Grid>
      </Box>
    </Box>
  );
};

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
