import { Currency } from 'helpers/types';

export const bankAccountTypes = ['debitbankaccount', 'creditbankaccount'];

export const accountTypes = [
  'cashaccount',
  'counterpartyaccount',
  ...bankAccountTypes,
] as const;

export type AccountType = typeof accountTypes[number];

export type Account = {
  id: number;
  itemType: AccountType;
  name: string;
  balance: number;
  balanceCurrency: Currency;
};
