import React, { useCallback } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import Modal from 'components/organisms/Modal';
import AddButton from 'components/atoms/AddButton';
import useBooleanState from 'hooks/useBooleanState';
import { Account } from '../types';

import AccountListItem from './AccountListItem';
import AccountForm from '../AccountForm';

type Props = {
  accounts: Account[];
};

const AccountList: React.FC<Props> = ({ accounts }) => {
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
          {accounts.map(account => {
            return (
              <Grid
                item
                xs={12}
                key={account.id}
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

export default AccountList;
