import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, Select } from 'formik-material-ui';
import * as Yup from 'yup';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import getSubmitHandler from 'helpers/getSubmitHandler';
import { Account } from '../types';

type Props = {
  onSuccess: (account: Account) => void;
};

const AccountFormSchema = Yup.object().shape({
  itemType: Yup.mixed<'cashaccount' | 'counterpartyaccount'>().oneOf(
    ['cashaccount', 'counterpartyaccount'],
    'Недопустимий вибір'
  ),
  name: Yup.string().required("Обов'язкове поле"),
  balance: Yup.number().min(0, 'Число має бути додатним'),
  balanceCurrency: Yup.mixed<'UAH' | 'USD' | 'EUR'>().oneOf(
    ['UAH', 'USD', 'EUR'],
    'Недопустимий вибір'
  ),
  counterpartyName: Yup.string(),
});

const handleSubmit = getSubmitHandler('accounts/');

const AccountForm: React.FC<Props> = ({ onSuccess }) => {
  return (
    <Box>
      <Formik
        initialValues={{
          itemType: 'cashaccount',
          name: '',
          balance: 0,
          counterpartyName: '',
          balanceCurrency: 'UAH',
        }}
        onSubmit={(values, helpers) => {
          handleSubmit(values, helpers, onSuccess);
        }}
        validationSchema={AccountFormSchema}
      >
        {({ isSubmitting, status, values }) => (
          <Form>
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="itemType">Вид рахунку</InputLabel>
              <Field required id="itemType" name="itemType" component={Select}>
                <MenuItem value="cashaccount">Готівка</MenuItem>
                <MenuItem value="counterpartyaccount">Контрагент</MenuItem>
              </Field>
            </FormControl>
            <Field
              margin="normal"
              required
              fullWidth
              id="name"
              name="name"
              label="Назва рахунку"
              component={TextField}
            />
            {values.itemType === 'counterpartyaccount' && (
              <Field
                margin="normal"
                fullWidth
                id="counterpartyName"
                name="counterpartyName"
                label="Назва контрагента"
                placeholder={values.name}
                component={TextField}
              />
            )}
            <Field
              margin="normal"
              placeholder="0"
              fullWidth
              id="balance"
              name="balance"
              label="Баланс"
              type="number"
              inputProps={{ min: 0, step: 0.01 }}
              component={TextField}
            />
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="balanceCurrency">Валюта</InputLabel>
              <Field
                required
                id="balanceCurrency"
                name="balanceCurrency"
                component={Select}
              >
                <MenuItem value="UAH">UAH</MenuItem>
                <MenuItem value="USD">USD</MenuItem>
                <MenuItem value="EUR">EUR</MenuItem>
              </Field>
            </FormControl>
            {status !== null && <Typography color="error">{status}</Typography>}
            <Box paddingBottom={2} paddingTop={4}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={isSubmitting}
              >
                Готово
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default AccountForm;
