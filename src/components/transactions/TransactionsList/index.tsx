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
import TransactionsListItem from './TransactionsListItem';
import TransactionForm from '../TransactionForm';
import { Transaction } from '../types';

type Props = {
  accountId?: number;
};

const TransactionsList: React.FC<Props> = ({ accountId }) => {
  const {
    state: { data, fetching, error },
    adder,
  } = useFetchApi('transactions/', true, { account_from: accountId });
  const [isModalOpen, openModal, closeModal] = useBooleanState();
  const addTransaction = useCallback(
    (transaction: Transaction) => {
      adder([transaction], true);
      closeModal();
    },
    [adder, closeModal]
  );
  if (error) {
    return <ErrorMessage />;
  }
  const transactions = data as Transaction[];
  return (
    <>
      <Box marginTop={4}>
        <Typography component="h1" variant="h5" align="center">
          Операції
        </Typography>
        <Box marginTop={3}>
          <Grid container spacing={3}>
            {transactions.map(transaction => {
              return (
                <Grid item xs={12} key={transaction.id}>
                  <TransactionsListItem
                    transaction={transaction}
                    accountId={accountId}
                  />
                </Grid>
              );
            })}
            {fetching && <Loader />}
            {!fetching && transactions.length === 0 && (
              <Box width="100%" marginTop={3}>
                <Typography align="center">Поки що операцій немає</Typography>
              </Box>
            )}
          </Grid>
        </Box>
      </Box>
      <AddButton onClick={openModal} />
      <Modal
        title="Додавання операції"
        isOpen={isModalOpen}
        onClose={closeModal}
      >
        <TransactionForm
          onSuccess={addTransaction}
          currentAccountId={accountId}
        />
      </Modal>
    </>
  );
};

export default TransactionsList;
