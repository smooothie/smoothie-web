import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';

import Modal from 'components/organisms/Modal';
import AddButton from 'components/atoms/AddButton';
import useBooleanState from 'hooks/useBooleanState';
// import TransactionForm from 'components/transactions/TransactionForm';
import { Account as AccountType } from '../types';
import { iconsMap } from '../helpers';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(1),
  },
}));

type Props = {
  account: AccountType;
};

const Account: React.FC<Props> = ({
  account: { id, itemType, name, balance, balanceCurrency },
}) => {
  const classes = useStyles();
  const [isModalOpen, openModal, closeModal] = useBooleanState();
  const Icon = iconsMap[itemType] || iconsMap.default;
  return (
    <Box marginTop={4}>
      <Box display="flex" alignItems="center" justifyContent="center">
        <Icon className={classes.icon} />
        <Typography component="h1" variant="h5" align="center">
          {name}
        </Typography>
      </Box>
      <Box marginTop={3}>
        <Box display="flex" justifyContent="space-between">
          <Typography>Баланс</Typography>
          <Typography>
            {balance.toLocaleString('uk-UA', {
              style: 'currency',
              currency: balanceCurrency,
            })}
          </Typography>
        </Box>
      </Box>
      <AddButton onClick={openModal} />
      <Modal
        title="Додавання операції"
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        {/*<TransactionForm onSuccess={forceUpdate} currentAccountId={id} />*/}
      </Modal>
    </Box>
  );
};

export default Account;
