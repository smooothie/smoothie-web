import {
  Environment,
  Network,
  RecordSource,
  Store,
  FetchFunction,
} from 'relay-runtime';
import Cookies from 'js-cookie';

import { AUTH_TOKEN_COOKIE } from 'helpers/constants';

const fetchQuery: FetchFunction = (operation, variables) => {
  return fetch(`${process.env.REACT_APP_API_URL}/graphql`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `JWT ${Cookies.get(AUTH_TOKEN_COOKIE) || ''}`,
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => {
    return response.json();
  });
};

const network = Network.create(fetchQuery);

const store = new Store(new RecordSource());

const environment = new Environment({
  network,
  store,
});

export default environment;
