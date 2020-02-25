import React, { useCallback } from 'react';
import { createFragmentContainer } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core';

import Modal from 'components/organisms/Modal';
import AddButton from 'components/atoms/AddButton';
import useBooleanState from 'hooks/useBooleanState';
import TransactionForm from 'components/transactions/TransactionForm';

import { Account_account } from './__generated__/Account_account.graphql';
import { iconsMap } from '../helpers';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(1),
  },
}));

type Props = {
  account: Account_account;
};

const PureAccount: React.FC<Props> = ({
  account: { itemType, name, balance, balanceCurrency },
}) => {
  const classes = useStyles();
  const [isModalOpen, openModal, closeModal] = useBooleanState();
  // TODO: find out how to use mutation updater instead
  const forceUpdate = useCallback(() => {
    window.location.reload();
  }, []);
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
        <TransactionForm onSuccess={forceUpdate} />
      </Modal>
    </Box>
  );
};

const Account = createFragmentContainer(PureAccount, {
  account: graphql`
    fragment Account_account on AccountNode {
      id
      name
      itemType
      balance
      balanceCurrency
    }
  `,
});

Account.displayName = 'Account';

export default Account;
