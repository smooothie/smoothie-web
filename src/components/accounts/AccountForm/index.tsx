import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField, Select } from 'formik-material-ui';
import * as Yup from 'yup';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
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
  counterpartyName: Yup.string(),
});

const AccountForm: React.FC<Props> = ({ onSuccess }) => {
  return (
    <Box>
      <Box marginTop={2}>
        <Formik
          initialValues={{
            itemType: 'cashaccount',
            name: '',
            balance: 0,
            counterpartyName: '',
          }}
          onSubmit={(values, { setSubmitting, setStatus }) => {
            // createUpdateAccountMutation(
            //   values,
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
          validationSchema={AccountFormSchema}
        >
          {({ isSubmitting, status, values }) => (
            <Form>
              <Field
                fullWidth
                id="itemType"
                label="Вид рахунку"
                name="itemType"
                component={Select}
              >
                <MenuItem value="cashaccount">Готівка</MenuItem>
                <MenuItem value="counterpartyaccount">Контрагент</MenuItem>
              </Field>
              <Field
                margin="normal"
                required
                fullWidth
                id="name"
                label="Назва рахунку"
                name="name"
                component={TextField}
              />
              {values.itemType === 'counterpartyaccount' && (
                <Field
                  margin="normal"
                  fullWidth
                  id="counterpartyName"
                  label="Назва контрагента"
                  name="counterpartyName"
                  placeholder={values.name}
                  component={TextField}
                />
              )}
              <Field
                margin="normal"
                placeholder="0"
                fullWidth
                id="balance"
                label="Баланс"
                name="balance"
                type="number"
                inputProps={{ min: 0, step: 0.01 }}
                component={TextField}
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

export default AccountForm;
