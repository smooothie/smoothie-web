import { Currency } from 'helpers/types';

export const accountTypes = [
  'cashaccount',
  'bankaccount',
  'counterpartyaccount',
] as const;

export type AccountType = typeof accountTypes[number];

export type Account = {
  id: number;
  itemType: AccountType;
  name: string;
  balance: number;
  balanceCurrency: Currency;
  creditLimit: number;
};
