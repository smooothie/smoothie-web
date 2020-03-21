export type MonobankRawAccount = {
  id: string;
  currencyCode: number;
  balance: number;
  creditLimit: number;
  maskedPan: string[];
  type: string;
};
