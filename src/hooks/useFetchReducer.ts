import { useReducer, useCallback } from 'react';

import { Action } from 'helpers/types';

interface FetchState {
  data: any;
  fetching: boolean;
  error: boolean;
}

interface ItemState<T> extends FetchState {
  data: T | null;
}

interface ListState<T> extends FetchState {
  data: Array<T>;
}

type State<T> = ItemState<T> | ListState<T>;

interface FetchAttemptAction extends Action {
  type: 'FETCH_ATTEMPT';
}

interface FetchSuccessAction extends Action {
  type: 'FETCH_SUCCESS';
  data: any;
}

interface ItemFetchSuccessAction<T> extends FetchSuccessAction {
  data: T;
}

interface ListFetchSuccessAction<T> extends FetchSuccessAction {
  data: Array<T>;
}

interface FetchErrorAction extends Action {
  type: 'FETCH_ERROR';
}

interface ResetAction extends Action {
  type: 'RESET';
}

type ItemFetchAction<T> =
  | FetchAttemptAction
  | ItemFetchSuccessAction<T>
  | FetchErrorAction
  | ResetAction;

type ListFetchAction<T> =
  | FetchAttemptAction
  | ListFetchSuccessAction<T>
  | FetchErrorAction
  | ResetAction;

type FetchAction<T> = ItemFetchAction<T> | ListFetchAction<T>;

const itemInitialState: ItemState<any> = {
  data: null,
  fetching: false,
  error: false,
};

const listInitialState: ListState<any> = {
  data: [],
  fetching: false,
  error: false,
};

const getInitialState = <T>(isList: boolean): State<T> =>
  isList ? listInitialState : itemInitialState;

type Reducer<T> = (state: State<T>, action: FetchAction<T>) => State<T>;

const baseReducer = <T>(state: State<T>, action: FetchAction<T>) => {
  switch (action.type) {
    case 'FETCH_ATTEMPT':
      return { ...state, fetching: true, error: false };
    case 'FETCH_ERROR':
      return { ...state, fetching: false, error: true };
    default:
      throw new Error();
  }
};

const itemReducer = <T>(state: ItemState<T>, action: ItemFetchAction<T>) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return { data: action.data, fetching: false, error: false };
    case 'RESET':
      return itemInitialState;
    default:
      return baseReducer(state, action);
  }
};

const listReducer = <T>(state: ListState<T>, action: ListFetchAction<T>) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        data: [...state.data, ...action.data],
        fetching: false,
        error: false,
      };
    case 'RESET':
      return listInitialState;
    default:
      return baseReducer(state, action);
  }
};

const getReducer = (isList: boolean) => (isList ? listReducer : itemReducer);

const useFetchReducer = <T>(isList: boolean) => {
  const reducer = getReducer(isList);
  const initialState = getInitialState(isList);
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
  const reset = useCallback(() => {
    dispatch({ type: 'RESET' });
  }, []);
  return {
    state,
    fetchAttempt,
    fetchSuccess,
    fetchError,
    reset,
  };
};

export default useFetchReducer;
