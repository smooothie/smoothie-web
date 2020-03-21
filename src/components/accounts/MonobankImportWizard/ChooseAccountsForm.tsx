import React from 'react';
import { Formik, Form } from 'formik';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Typography from '@material-ui/core/Typography';
import cc from 'currency-codes';
import * as Yup from 'yup';
import { prop } from 'ramda';

import getSubmitHandler from 'helpers/getSubmitHandler';
import { MonobankRawAccount } from './types';
import { Account } from '../types';

type Props = {
  rawAccounts: MonobankRawAccount[];
  onSuccess: (accounts: Account[]) => void;
  goBack: () => void;
};

const ChooseAccountsFormSchema = Yup.object().shape({
  selected: Yup.array()
    .of(Yup.object())
    .required('Виберіть хоча б один рахунок'),
});

const handleSubmit = getSubmitHandler('monobank/accounts/import/');

const getAccountLabel = (rawAccount: MonobankRawAccount): string => {
  const currencyCode =
    cc.number(String(rawAccount.currencyCode))?.code || 'UAH';
  const balance = (
    (rawAccount.balance - rawAccount.creditLimit) /
    100
  ).toLocaleString('uk-UA', {
    style: 'currency',
    currency: currencyCode,
  });
  return `${rawAccount.type} ${rawAccount.maskedPan[0]} ${balance}`;
};

const ChooseAccountsForm: React.FC<Props> = ({
  rawAccounts,
  onSuccess,
  goBack,
}) => {
  const getNewSelected = (
    event: React.ChangeEvent<HTMLInputElement>,
    currentSelected: MonobankRawAccount[]
  ) => {
    if (event.target.checked) {
      return [
        ...currentSelected,
        rawAccounts.find(i => i.id === event.target.name),
      ];
    }
    return currentSelected.filter(i => i.id !== event.target.name);
  };
  return (
    <Box>
      <Formik
        initialValues={{ selected: rawAccounts }}
        validationSchema={ChooseAccountsFormSchema}
        onSubmit={(values, helpers) => {
          handleSubmit(values.selected, helpers, onSuccess);
        }}
      >
        {({ isSubmitting, status, values, setFieldValue, errors }) => (
          <Form>
            <FormControl component="fieldset">
              <FormLabel component="legend">
                Виберіть рахунки для імпорту
              </FormLabel>
              <FormGroup>
                {rawAccounts.map(account => (
                  <FormControlLabel
                    key={account.id}
                    control={
                      <Checkbox
                        checked={values.selected
                          .map(prop('id'))
                          .includes(account.id)}
                        onChange={event => {
                          setFieldValue(
                            'selected',
                            getNewSelected(event, values.selected)
                          );
                        }}
                        name={account.id}
                      />
                    }
                    label={getAccountLabel(account)}
                  />
                ))}
              </FormGroup>
            </FormControl>
            {errors.selected && (
              <Typography color="error">{errors.selected}</Typography>
            )}
            {status !== null && <Typography color="error">{status}</Typography>}
            <Box paddingBottom={2} paddingTop={4}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={isSubmitting}
              >
                Далі
              </Button>
            </Box>
            <Box paddingBottom={2}>
              <Button
                fullWidth
                variant="contained"
                color="default"
                onClick={() => goBack()}
              >
                Назад
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default ChooseAccountsForm;
