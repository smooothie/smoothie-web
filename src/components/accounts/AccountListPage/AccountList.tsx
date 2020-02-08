import React, { useState, useCallback } from 'react';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';

import Modal from 'components/organisms/Modal';

import AccountListItem from './AccountListItem';
import { AccountList_accounts } from './__generated__/AccountList_accounts.graphql';
import AccountForm from '../AccountForm';

const useStyles = makeStyles(theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  edit: {
    position: 'absolute',
    right: theme.spacing(2),
    top: 'calc(50% - 24px)',
  },
}));

type Props = {
  accounts: AccountList_accounts;
};

const PureAccountList: React.FC<Props> = ({ accounts }) => {
  const classes = useStyles();
  const [isAccountModalOpen, setAccountModalOpen] = useState(false);
  const openAccountModal = useCallback(() => setAccountModalOpen(true), []);
  const closeAccountModal = useCallback(() => {
    setAccountModalOpen(false);
  }, []);
  // TODO: find out how to use mutation updater instead
  const forceUpdate = useCallback(() => {
    window.location.reload();
  }, []);
  return (
    <Box marginTop={4}>
      <Typography component="h1" variant="h5" align="center">
        Перелік рахунків
      </Typography>
      <Box marginTop={3}>
        <Grid container spacing={3}>
          {accounts.edges.map(edge => {
            const account = edge && edge.node;
            if (account === null) return null;
            return (
              <Grid
                item
                xs={12}
                key={account.__id}
                style={{ position: 'relative' }}
              >
                <AccountListItem account={account} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Fab
        color="primary"
        aria-label="add"
        className={classes.fab}
        onClick={openAccountModal}
      >
        <AddIcon />
      </Fab>
      <Modal isOpen={isAccountModalOpen} onClose={closeAccountModal}>
        <AccountForm onSuccess={forceUpdate} />
      </Modal>
    </Box>
  );
};

const AccountList = createFragmentContainer(PureAccountList, {
  accounts: graphql`
    fragment AccountList_accounts on AccountNodeConnection {
      edges {
        node {
          ...AccountListItem_account
        }
      }
    }
  `,
});

AccountList.displayName = 'AccountList';

export default AccountList;
