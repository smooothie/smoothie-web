import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DoneIcon from '@material-ui/icons/Done';
import ScheduleIcon from '@material-ui/icons/Schedule';
import { Transaction } from '../types';

type Props = {
  transaction: Transaction;
  accountId?: number;
};

const TransactionsListItem: React.FC<Props> = ({
  transaction: {
    isCompleted,
    category,
    description,
    amount,
    amountCurrency,
    date,
    accountTo,
  },
  accountId,
}) => {
  const isIncome = accountTo.id === accountId;
  return (
    <Paper elevation={3}>
      <Box padding={1} display="flex" alignItems="center">
        <Box marginRight={1}>
          {isCompleted ? <DoneIcon /> : <ScheduleIcon />}
        </Box>
        <Box width="100%">
          <Typography variant="h6" component="h3">
            {category.name}
          </Typography>
          <Typography>{description}</Typography>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography>
              {new Date(date).toLocaleDateString('uk-UA')}
            </Typography>
            <Typography color={isIncome ? 'primary' : 'error'}>
              {isIncome ? '+' : '-'}
              {amount.toLocaleString('uk-UA', {
                style: 'currency',
                currency: amountCurrency,
              })}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default TransactionsListItem;
