import { Currency } from 'helpers/types';

export type StructureData = {
  categoryName: string;
  totalAmount: number;
  currency: Currency;
};

export type DynamicsData = {
  period: string;
  totalAmount: number;
  currency: Currency;
};

export const periodTypes = ['year', 'quarter', 'month', 'week', 'day'] as const;

export type PeriodType = typeof periodTypes[number];
