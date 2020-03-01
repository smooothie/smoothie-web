import { create } from 'apisauce';
import Cookies from 'js-cookie';
import { mapObjIndexed } from 'ramda';
import { FormikValues } from 'formik';
import { omit } from 'lodash';

import { AUTH_TOKEN_COOKIE } from 'helpers/constants';

export type ApiErrors<V> = {
  [K in keyof Partial<V>]: string[];
} & {
  nonFieldErrors?: string[];
  detail?: string;
};

export const parseApiErrors = <V extends FormikValues>(
  apiErrors: ApiErrors<V>
): {
  errors: Record<string, string>;
  nonFieldError?: string;
} => {
  const detail = apiErrors.detail;
  if (detail) {
    delete apiErrors.detail;
  }
  const errors = mapObjIndexed((fieldErrors: string[]) => fieldErrors[0])(
    apiErrors
  );
  return {
    errors: omit(errors, ['nonFieldErrors']),
    nonFieldError: detail || errors.nonFieldErrors,
  };
};

const api = create({
  baseURL: `${process.env.REACT_APP_API_URL}/api/`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
});

api.addRequestTransform(request => {
  const authCookie = Cookies.get(AUTH_TOKEN_COOKIE);
  if (authCookie) {
    request.headers['Authorization'] = `${AUTH_TOKEN_COOKIE} ${authCookie}`;
  }
});

export default api;
