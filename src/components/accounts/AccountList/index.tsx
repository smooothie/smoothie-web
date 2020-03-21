import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Modal from 'components/organisms/Modal';
import AddButton from 'components/atoms/AddButton';
import Loader from 'components/atoms/Loader';
import ErrorMessage from 'components/atoms/ErrorMessage';
import useBooleanState from 'hooks/useBooleanState';
import useFetchApi from 'hooks/useFetchApi';
import { Account } from '../types';

import AccountListItem from './AccountListItem';
import AccountAddWizard from '../AccountAddWizard';

const AccountList: React.FC = () => {
  const {
    state: { data, fetching, error },
    adder: addAccounts,
  } = useFetchApi('accounts/', true);
  const accounts = data as Account[];
  const [
    isAccountModalOpen,
    openAccountModal,
    closeAccountModal,
  ] = useBooleanState();
  if (error) {
    return <ErrorMessage />;
  }
  return (
    <Box marginTop={4}>
      <Typography component="h1" variant="h5" align="center">
        Рахунки
      </Typography>
      <Box marginTop={3}>
        <Grid container spacing={3}>
          {accounts.map(account => {
            return (
              <Grid item xs={12} key={account.id}>
                <AccountListItem account={account} />
              </Grid>
            );
          })}
          {fetching && <Loader />}
        </Grid>
      </Box>
      <AddButton onClick={openAccountModal} />
      <Modal
        title="Додавання нового рахунку"
        isOpen={isAccountModalOpen}
        onClose={closeAccountModal}
      >
        <AccountAddWizard
          addAccounts={addAccounts}
          onSuccess={closeAccountModal}
        />
      </Modal>
    </Box>
  );
};

export default AccountList;
