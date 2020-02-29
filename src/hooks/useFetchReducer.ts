import { useReducer, useCallback } from 'react';

import { Action } from 'helpers/types';

type State<T> = {
  data: T | null;
  fetching: boolean;
  error: boolean;
};

interface FetchAttemptAction extends Action {
  type: 'FETCH_ATTEMPT';
}

interface FetchSuccessAction<T> extends Action {
  type: 'FETCH_SUCCESS';
  data: T;
}

interface FetchErrorAction extends Action {
  type: 'FETCH_ERROR';
}

type FetchAction<T> =
  | FetchAttemptAction
  | FetchSuccessAction<T>
  | FetchErrorAction;

const initialState = {
  data: null,
  fetching: false,
  error: false,
};

const reducer = <T>(state: State<T>, action: FetchAction<T>): State<T> => {
  switch (action.type) {
    case 'FETCH_ATTEMPT':
      return { ...state, fetching: true, error: false };
    case 'FETCH_SUCCESS':
      return { data: action.data, fetching: false, error: false };
    case 'FETCH_ERROR':
      return { ...state, fetching: false, error: true };
  }
};

const useFetchReducer = <T>() => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchAttempt = useCallback(() => {
    dispatch({ type: 'FETCH_ATTEMPT' });
  }, []);
  const fetchSuccess = useCallback((data: T) => {
    dispatch({ type: 'FETCH_SUCCESS', data });
  }, []);
  const fetchError = useCallback(() => {
    dispatch({ type: 'FETCH_ERROR' });
  }, []);
  return {
    state,
    fetchAttempt,
    fetchSuccess,
    fetchError,
  };
};

export default useFetchReducer;
