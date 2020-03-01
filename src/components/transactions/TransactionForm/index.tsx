import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, Select, CheckboxWithLabel } from 'formik-material-ui';
import { DatePicker } from 'formik-material-ui-pickers';
import * as Yup from 'yup';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import moment from 'moment';

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
  category: Yup.string().required("Обов'язкове поле"),
  description: Yup.string(),
  isCompleted: Yup.boolean(),
  counterpartyName: Yup.string().nullable(),
});

const TransactionForm: React.FC<Props> = ({ onSuccess, currentAccountId }) => {
  return (
    <Box>
      <Box marginTop={2}>
        <Formik
          initialValues={{
            itemType: 'purchase',
            amount: 0,
            date: moment().format(),
            accountFromId: null as number | null,
            accountToId: null as number | null,
            category: '',
            description: '',
            isCompleted: true,
            counterpartyName: '',
          }}
          onSubmit={(values, { setSubmitting, setStatus }) => {
            // let finalValues = values;
            // if (values.itemType === 'income' && currentAccountId) {
            //   finalValues = {
            //     ...finalValues,
            //     accountToId: currentAccountId,
            //   };
            // } else if (currentAccountId) {
            //   finalValues = {
            //     ...finalValues,
            //     accountFromId: currentAccountId,
            //   };
            // }
            // createTransactionMutation(
            //   finalValues,
            //   () => {
            //     setSubmitting(false);
            //     onSuccess();
            //   },
            //   errorMessage => {
            //     setStatus(errorMessage);
            //     setSubmitting(false);
            //   }
            // );
          }}
          validationSchema={TransactionFormSchema}
        >
          {({ isSubmitting, status, values }) => (
            <Form>
              <Field
                fullWidth
                id="itemType"
                label="Вид операції"
                name="itemType"
                component={Select}
              >
                <MenuItem value="purchase">Купівля</MenuItem>
                <MenuItem value="income">Дохід</MenuItem>
                <MenuItem value="transfer">Переказ</MenuItem>
              </Field>
              <Field
                margin="normal"
                required
                fullWidth
                id="amount"
                label="Сума"
                name="amount"
                type="number"
                inputProps={{ min: 0.01, step: 0.01 }}
                component={TextField}
              />
              <Field
                margin="normal"
                fullWidth
                id="date"
                label="Дата"
                name="date"
                component={DatePicker}
                format="DD.MM.YYYY"
              />
              {!currentAccountId && (
                <Field
                  margin="normal"
                  fullWidth
                  required
                  id="accountFromId"
                  label="З рахунку"
                  name="accountFromId"
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
                    label="На рахунок"
                    name="accountToId"
                    component={TextField}
                  />
                ))}
              {['income', 'purchase'].includes(values.itemType) && (
                <Field
                  margin="normal"
                  fullWidth
                  required
                  id="counterpartyName"
                  label="Контрагент"
                  name="counterpartyName"
                  component={TextField}
                />
              )}
              <Field
                margin="normal"
                fullWidth
                required
                id="category"
                label="Категорія"
                name="category"
                component={TextField}
              />
              <Field
                margin="normal"
                fullWidth
                id="description"
                label="Опис"
                name="description"
                component={TextField}
              />
              <Field
                id="isCompleted"
                name="isCompleted"
                component={CheckboxWithLabel}
                Label={{ label: 'Завершено' }}
              />
              {status !== null && (
                <Typography color="error">{status}</Typography>
              )}
              <Box paddingBottom={2} paddingTop={2}>
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
    </Box>
  );
};

export default TransactionForm;
