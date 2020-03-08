import { useEffect, useCallback } from 'react';
import { ApiResponse } from 'apisauce';

import api from 'api';
import useFetchReducer from './useFetchReducer';

const fetch = async <T>(
  url: string,
  params: Record<string, any>,
  onSuccess: (data: T) => void,
  onError: () => void
) => {
  const response: ApiResponse<T, any> = await api.get(url, params);
  if (response.ok && typeof response.data === 'object') {
    // TODO: add handling response headers
    onSuccess(response.data);
  } else {
    onError();
  }
};

const useFetchApi = (
  url: string,
  isList: boolean,
  params: Record<string, string | number | undefined> = {}
) => {
  const paramsString = JSON.stringify(params);
  const {
    state,
    fetchAttempt,
    fetchSuccess,
    fetchError,
    reset,
  } = useFetchReducer(isList);
  const fetcher = useCallback(
    () => {
      const apiParams = isList
        ? { ...params, offset: state.data.length }
        : params;
      fetch(url, apiParams, fetchSuccess, fetchError);
    },
    // use paramsString in deps instead of params as immutable value
    // also, don't include state as it shouldn't trigger re-fetch
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [fetchError, fetchSuccess, url, paramsString]
  );
  useEffect(() => {
    fetchAttempt();
    fetcher();
    if (isList) {
      return reset;
    }
  }, [fetchAttempt, fetcher, isList, reset]);
  return { state, fetcher, adder: fetchSuccess };
};

export default useFetchApi;
