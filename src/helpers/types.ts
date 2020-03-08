export interface Action {
  type: string;
}

export const currencies = ['UAH', 'USD', 'EUR'] as const;

export type Currency = typeof currencies[number];
