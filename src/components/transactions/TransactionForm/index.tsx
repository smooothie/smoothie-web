import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, Select, CheckboxWithLabel } from 'formik-material-ui';
import { DatePicker } from 'formik-material-ui-pickers';
import * as Yup from 'yup';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import moment from 'moment';

import getSubmitHandler from 'helpers/getSubmitHandler';
import { Transaction } from '../types';

type Props = {
  onSuccess: (transaction: Transaction) => void;
  currentAccountId?: number;
};

const TransactionFormSchema = Yup.object().shape({
  itemType: Yup.mixed<'income' | 'purchase' | 'transfer'>().oneOf(
    ['income', 'purchase', 'transfer'],
    'Недопустимий вибір'
  ),
  amount: Yup.number()
    .required("Обов'язкове поле")
    .min(0.01, 'Число має бути додатним'),
  date: Yup.date().nullable(),
  accountFromId: Yup.number().nullable(),
  accountToId: Yup.number().nullable(),
  categoryName: Yup.string().required("Обов'язкове поле"),
  description: Yup.string(),
  isCompleted: Yup.boolean(),
  counterpartyName: Yup.string().nullable(),
});

const handleSubmit = getSubmitHandler('transactions/');

const TransactionForm: React.FC<Props> = ({ onSuccess, currentAccountId }) => {
  return (
    <Box>
      <Formik
        initialValues={{
          itemType: 'purchase',
          amount: 0,
          date: moment().format(),
          accountFromId: null as number | null,
          accountToId: null as number | null,
          categoryName: '',
          description: '',
          isCompleted: true,
          counterpartyName: '',
        }}
        onSubmit={(values, helpers) => {
          let finalValues = values;
          if (values.itemType === 'income' && currentAccountId) {
            finalValues = {
              ...finalValues,
              accountToId: currentAccountId,
            };
          } else if (currentAccountId) {
            finalValues = {
              ...finalValues,
              accountFromId: currentAccountId,
            };
          }
          handleSubmit(finalValues, helpers, onSuccess);
        }}
        validationSchema={TransactionFormSchema}
      >
        {({ isSubmitting, status, values }) => (
          <Form>
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="itemType">Вид операції</InputLabel>
              <Field fullWidth id="itemType" name="itemType" component={Select}>
                <MenuItem value="purchase">Купівля</MenuItem>
                <MenuItem value="income">Дохід</MenuItem>
                <MenuItem value="transfer">Переказ</MenuItem>
              </Field>
            </FormControl>
            <Field
              margin="normal"
              required
              fullWidth
              id="amount"
              name="amount"
              label="Сума"
              type="number"
              inputProps={{ min: 0.01, step: 0.01 }}
              component={TextField}
            />
            <Field
              margin="normal"
              fullWidth
              id="date"
              name="date"
              label="Дата"
              component={DatePicker}
              format="DD.MM.YYYY"
            />
            {!currentAccountId && (
              <Field
                margin="normal"
                fullWidth
                required
                id="accountFromId"
                name="accountFromId"
                label="З рахунку"
                component={TextField}
              />
            )}
            {!currentAccountId ||
              (values.itemType === 'transfer' && (
                <Field
                  margin="normal"
                  fullWidth
                  required
                  id="accountToId"
                  name="accountToId"
                  label="На рахунок"
                  component={TextField}
                />
              ))}
            {['income', 'purchase'].includes(values.itemType) && (
              <Field
                margin="normal"
                fullWidth
                required
                id="counterpartyName"
                name="counterpartyName"
                label="Контрагент"
                component={TextField}
              />
            )}
            <Field
              margin="normal"
              fullWidth
              required
              id="categoryName"
              name="categoryName"
              label="Категорія"
              component={TextField}
            />
            <Field
              margin="normal"
              fullWidth
              id="description"
              name="description"
              label="Опис"
              component={TextField}
            />
            <FormControl margin="normal" fullWidth>
              <Field
                id="isCompleted"
                name="isCompleted"
                component={CheckboxWithLabel}
                Label={{ label: 'Завершено' }}
              />
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

export default TransactionForm;
