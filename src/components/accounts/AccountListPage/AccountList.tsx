import React, { useCallback } from 'react';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Modal from 'components/organisms/Modal';
import AddButton from 'components/atoms/AddButton';
import useBooleanState from 'hooks/useBooleanState';

import AccountListItem from './AccountListItem';
import { AccountList_accounts } from './__generated__/AccountList_accounts.graphql';
import AccountForm from '../AccountForm';

type Props = {
  accounts: AccountList_accounts;
};

const PureAccountList: React.FC<Props> = ({ accounts }) => {
  const [
    isAccountModalOpen,
    openAccountModal,
    closeAccountModal,
  ] = useBooleanState();
  // TODO: find out how to use mutation updater instead
  const forceUpdate = useCallback(() => {
    window.location.reload();
  }, []);
  return (
    <Box marginTop={4}>
      <Typography component="h1" variant="h5" align="center">
        Рахунки
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
      <AddButton onClick={openAccountModal} />
      <Modal
        title="Додавання нового рахунку"
        isOpen={isAccountModalOpen}
        onClose={closeAccountModal}
      >
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
