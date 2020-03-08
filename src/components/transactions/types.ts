import { Currency } from 'helpers/types';

type SimpleAccount = {
  id: number;
  name: string;
  balance: number;
};

export const transactionTypes = ['purchase', 'income', 'transfer'] as const;

export type TransactionType = typeof transactionTypes[number];

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
  itemType: TransactionType;
};
