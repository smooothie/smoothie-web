/* tslint:disable */
/* eslint-disable */
/* @relayHash a9bf9e1855ed85a19c2941b744363d77 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AccountListPageQueryVariables = {};
export type AccountListPageQueryResponse = {
    readonly accounts: {
        readonly " $fragmentRefs": FragmentRefs<"AccountList_accounts">;
    } | null;
};
export type AccountListPageQuery = {
    readonly response: AccountListPageQueryResponse;
    readonly variables: AccountListPageQueryVariables;
};



/*
query AccountListPageQuery {
  accounts {
    ...AccountList_accounts
  }
}

fragment AccountList_accounts on AccountNodeConnection {
  edges {
    node {
      ...Account_account
      id
    }
  }
}

fragment Account_account on AccountNode {
  id
  name
  accountType
  balance
  balanceCurrency
}
*/

const node: ConcreteRequest = ({
    "kind": "Request",
    "fragment": {
        "kind": "Fragment",
        "name": "AccountListPageQuery",
        "type": "Query",
        "metadata": null,
        "argumentDefinitions": [],
        "selections": [
            {
                "kind": "LinkedField",
                "alias": null,
                "name": "accounts",
                "storageKey": null,
                "args": null,
                "concreteType": "AccountNodeConnection",
                "plural": false,
                "selections": [
                    {
                        "kind": "FragmentSpread",
                        "name": "AccountList_accounts",
                        "args": null
                    }
                ]
            }
        ]
    },
    "operation": {
        "kind": "Operation",
        "name": "AccountListPageQuery",
        "argumentDefinitions": [],
        "selections": [
            {
                "kind": "LinkedField",
                "alias": null,
                "name": "accounts",
                "storageKey": null,
                "args": null,
                "concreteType": "AccountNodeConnection",
                "plural": false,
                "selections": [
                    {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "edges",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "AccountNodeEdge",
                        "plural": true,
                        "selections": [
                            {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "node",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "AccountNode",
                                "plural": false,
                                "selections": [
                                    {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "id",
                                        "args": null,
                                        "storageKey": null
                                    },
                                    {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "name",
                                        "args": null,
                                        "storageKey": null
                                    },
                                    {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "accountType",
                                        "args": null,
                                        "storageKey": null
                                    },
                                    {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "balance",
                                        "args": null,
                                        "storageKey": null
                                    },
                                    {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "balanceCurrency",
                                        "args": null,
                                        "storageKey": null
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "params": {
        "operationKind": "query",
        "name": "AccountListPageQuery",
        "id": null,
        "text": "query AccountListPageQuery {\n  accounts {\n    ...AccountList_accounts\n  }\n}\n\nfragment AccountList_accounts on AccountNodeConnection {\n  edges {\n    node {\n      ...Account_account\n      id\n    }\n  }\n}\n\nfragment Account_account on AccountNode {\n  id\n  name\n  accountType\n  balance\n  balanceCurrency\n}\n",
        "metadata": {}
    }
} as any);
(node as any).hash = '6221e15014c0da5691ef8335d6d5efa9';
export default node;
