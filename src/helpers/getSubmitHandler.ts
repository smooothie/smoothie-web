import { ApiResponse } from 'apisauce';
import { FormikHelpers } from 'formik';

import api, { parseApiErrors, ApiErrors } from 'api';

const getSubmitHandler = (
  url: string,
  method: 'post' | 'put' | 'patch' = 'post'
) => {
  async function handleSubmit<Values, ResponseData>(
    values: Values,
    { setSubmitting, setStatus, setErrors }: FormikHelpers<Values>,
    onSuccess: (data: ResponseData) => void
  ) {
    const response: ApiResponse<ResponseData, ApiErrors<Values>> = await api[
      method
    ](url, values);
    setSubmitting(false);
    if (response.ok && response.data) {
      onSuccess(response.data);
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
  return handleSubmit;
};

export default getSubmitHandler;
