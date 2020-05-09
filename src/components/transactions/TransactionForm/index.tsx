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

import Autocomplete from 'components/organisms/Autocomplete';
import useFetchApi from 'helpers/hooks/useFetchApi';
import getSubmitHandler from 'helpers/getSubmitHandler';
import { Transaction, TransactionType, transactionTypes } from '../types';

type Props = {
  onSuccess: (transaction: Transaction) => void;
  currentAccountId?: number;
  goBack?: () => void;
};

type AccountOption = {
  id: number;
  name: string;
};

const TransactionFormSchema = Yup.object().shape({
  itemType: Yup.mixed<TransactionType>().oneOf(
    [...transactionTypes],
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

const TransactionForm: React.FC<Props> = ({
  onSuccess,
  currentAccountId,
  goBack,
}) => {
  const {
    state: { data },
  } = useFetchApi('accounts/options', true, { exclude_id: currentAccountId });
  const accountOptions = data as AccountOption[];
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
        {({ isSubmitting, status, values, setFieldValue }) => (
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
              <FormControl margin="normal" fullWidth>
                <InputLabel htmlFor="accountFromId">З рахунку</InputLabel>
                <Field
                  fullWidth
                  id="accountFromId"
                  name="accountFromId"
                  component={Select}
                >
                  {accountOptions.map(({ id, name }) => (
                    <MenuItem key={id} value={id}>
                      {name}
                    </MenuItem>
                  ))}
                </Field>
              </FormControl>
            )}
            {!currentAccountId ||
              (values.itemType === 'transfer' && (
                <FormControl margin="normal" fullWidth>
                  <InputLabel htmlFor="accountToId">На рахунок</InputLabel>
                  <Field
                    fullWidth
                    id="accountToId"
                    name="accountToId"
                    component={Select}
                  >
                    {accountOptions.map(({ id, name }) => (
                      <MenuItem key={id} value={id}>
                        {name}
                      </MenuItem>
                    ))}
                  </Field>
                </FormControl>
              ))}
            {['income', 'purchase'].includes(values.itemType) && (
              <FormControl margin="normal" fullWidth>
                <Autocomplete
                  fetchEndpoint="counterparties/autocomplete/"
                  label="Контрагент"
                  onChange={value => {
                    setFieldValue('counterpartyName', value ? value.name : '');
                  }}
                  onInputChange={input => {
                    setFieldValue('counterpartyName', input);
                  }}
                  getOptionLabel={option => option.name}
                />
              </FormControl>
            )}
            <FormControl margin="normal" fullWidth>
              <Autocomplete
                fetchEndpoint="categories/autocomplete/"
                label="Категорія"
                onChange={value => {
                  setFieldValue('categoryName', value ? value.name : '');
                }}
                onInputChange={input => {
                  setFieldValue('categoryName', input);
                }}
                getOptionLabel={option => option.name}
                required
              />
            </FormControl>
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
            {goBack && (
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
            )}
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default TransactionForm;
