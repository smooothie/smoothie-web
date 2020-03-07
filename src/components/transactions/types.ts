import { Currency } from 'helpers/types';

type SimpleAccount = {
  id: number;
  name: string;
  // to be used to update balance
  balance: number;
};

export type Transaction = {
  id: number;
  date: string;
  amount: number;
  amountCurrency: Currency;
  accountFrom: SimpleAccount;
  accountTo: SimpleAccount;
  description: string;
  category: {
    name: string;
  };
  isCompleted: boolean;
  itemType: 'purchase' | 'income' | 'transfer';
};
