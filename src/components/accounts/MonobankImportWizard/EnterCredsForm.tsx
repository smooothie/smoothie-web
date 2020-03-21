import React from 'react';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-material-ui';
import * as Yup from 'yup';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import getSubmitHandler from 'helpers/getSubmitHandler';
import { MonobankRawAccount } from './types';

type Props = {
  onSuccess: ({ accounts }: { accounts: MonobankRawAccount[] }) => void;
  goBack: () => void;
};

const EnterCredsFormSchema = Yup.object().shape({
  token: Yup.string().required("Обов'язкове поле"),
});

const handleSubmit = getSubmitHandler('monobank/accounts/');

const EnterCredsForm: React.FC<Props> = ({ onSuccess, goBack }) => {
  return (
    <Box>
      <Formik
        initialValues={{ token: '' }}
        validationSchema={EnterCredsFormSchema}
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

export default EnterCredsForm;
