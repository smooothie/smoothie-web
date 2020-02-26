import React from 'react';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import TransactionsListItem from './TransactionsListItem';
import { TransactionsList_transactions } from './__generated__/TransactionsList_transactions.graphql';

type Props = {
  transactions: TransactionsList_transactions;
  accountId?: string;
};

const PureTransactionsList: React.FC<Props> = ({ transactions, accountId }) => {
  return (
    <Box marginTop={4}>
      <Typography component="h1" variant="h5" align="center">
        Операції
      </Typography>
      <Box marginTop={3}>
        <Grid container spacing={3}>
          {transactions.edges.map(edge => {
            const transaction = edge && edge.node;
            if (transaction === null) return null;
            return (
              <Grid
                item
                xs={12}
                key={transaction.__id}
                style={{ position: 'relative' }}
              >
                <TransactionsListItem
                  transaction={transaction}
                  accountId={accountId}
                />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

const TransactionsList = createFragmentContainer(PureTransactionsList, {
  transactions: graphql`
    fragment TransactionsList_transactions on TransactionNodeConnection {
      edges {
        node {
          ...TransactionsListItem_transaction
        }
      }
    }
  `,
});

export default TransactionsList;