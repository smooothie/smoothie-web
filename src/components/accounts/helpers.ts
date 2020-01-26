import React from 'react';
import { SvgIconProps } from '@material-ui/core/SvgIcon';
import AccountBalanceWalletRoundedIcon from '@material-ui/icons/AccountBalanceWalletRounded';
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import CreditCardRoundedIcon from '@material-ui/icons/CreditCardRounded';
import MonetizationOnRoundedIcon from '@material-ui/icons/MonetizationOnRounded';

export const iconsMap: Record<string, React.ComponentType<SvgIconProps>> = {
  cashaccount: AccountBalanceWalletRoundedIcon,
  counterpartyaccount: PersonRoundedIcon,
  bankaccount: CreditCardRoundedIcon,
  default: MonetizationOnRoundedIcon,
};
