import { ApiResponse } from 'apisauce';
import { FormikHelpers } from 'formik';
import Cookies from 'js-cookie';

import api, { parseApiErrors, ApiErrors } from 'api';
import { AUTH_TOKEN_COOKIE } from 'helpers/constants';
import { Values } from './types';

type Response = ApiResponse<
  { access: string; refresh: string },
  ApiErrors<Values>
>;

async function handleSubmit(
  values: Values,
  { setSubmitting, setStatus, setErrors }: FormikHelpers<Values>,
  onSuccess: () => void
) {
  Cookies.remove(AUTH_TOKEN_COOKIE);
  const response: Response = await api.post('token/', values);
  setSubmitting(false);
  if (response.ok && response.data) {
    Cookies.set(AUTH_TOKEN_COOKIE, response.data.access);
    onSuccess();
  } else if (!response.ok && response.data) {
    const { errors, nonFieldError } = parseApiErrors(response.data);
    setErrors(errors);
    if (nonFieldError) {
      setStatus(nonFieldError);
    }
  } else {
    setStatus('Щось пішло не так');
  }
}

export default handleSubmit;
