import React, { useCallback } from 'react';
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
import AccountForm from '../AccountForm';

const AccountList: React.FC = () => {
  const {
    state: { data, fetching, error },
    adder,
  } = useFetchApi('accounts/', true);
  const accounts = data as Account[];
  const [
    isAccountModalOpen,
    openAccountModal,
    closeAccountModal,
  ] = useBooleanState();
  const addAccount = useCallback(
    (account: Account) => {
      adder([account]);
      closeAccountModal();
    },
    [adder, closeAccountModal]
  );
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
        <AccountForm onSuccess={addAccount} />
      </Modal>
    </Box>
  );
};

export default AccountList;
