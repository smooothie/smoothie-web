import { Currency } from 'helpers/types';

export type Account = {
  id: number;
  itemType: 'counterpartyaccount' | 'cashaccount';
  name: string;
  balance: number;
  balanceCurrency: Currency;
};
