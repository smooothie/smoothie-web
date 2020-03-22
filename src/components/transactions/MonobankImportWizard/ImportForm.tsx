import React from 'react';
import { Formik, Form, Field } from 'formik';
import { DatePicker } from 'formik-material-ui-pickers';
import moment from 'moment';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import getSubmitHandler from 'helpers/getSubmitHandler';
import { Transaction } from '../types';

type Props = {
  onSuccess: (transactions: Transaction[]) => void;
  goBack: () => void;
  apiAccountId: string;
};

const ImportFormSchema = Yup.object().shape({
  token: Yup.string().required("Обов'язкове поле"),
  fromTime: Yup.date()
    .nullable()
    .required("Обов'язкове поле"),
  toTime: Yup.date().nullable(),
  account: Yup.string(),
});

const handleSubmit = getSubmitHandler('monobank/transactions/');

const ImportForm: React.FC<Props> = ({ onSuccess, goBack, apiAccountId }) => {
  return (
    <Box>
      <Formik
        initialValues={{
          token: '',
          fromTime: null,
          toTime: moment().format(),
          account: apiAccountId,
        }}
        validationSchema={ImportFormSchema}
        onSubmit={(values, helpers) => {
          handleSubmit(values, helpers, onSuccess);
        }}
      >
        {({ isSubmitting, status }) => (
          <Form>
            <Field
              margin="normal"
              required
              fullWidth
              id="token"
              name="token"
              label="Особистий токен"
              component={TextField}
            />
            <Field
              margin="normal"
              fullWidth
              required
              id="fromTime"
              name="fromTime"
              label="З дати"
              component={DatePicker}
              format="DD.MM.YYYY"
            />
            <Field
              margin="normal"
              fullWidth
              id="toTime"
              name="toTime"
              label="До дати"
              component={DatePicker}
              format="DD.MM.YYYY"
            />
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

export default ImportForm;
