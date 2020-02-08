/* tslint:disable */
/* eslint-disable */
/* @relayHash 27626c3d31d3984a0d1853dbff6bec00 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AccountPageQueryVariables = {
    accountID: string;
};
export type AccountPageQueryResponse = {
    readonly account: {
        readonly " $fragmentRefs": FragmentRefs<"Account_account">;
        readonly __id: string;
    } | null;
    readonly transactions: {
        readonly " $fragmentRefs": FragmentRefs<"TransactionsList_transactions">;
    } | null;
};
export type AccountPageQuery = {
    readonly response: AccountPageQueryResponse;
    readonly variables: AccountPageQueryVariables;
};



/*
query AccountPageQuery(
  $accountID: ID!
) {
  account(id: $accountID) {
    ...Account_account
    id
  }
  transactions(accountFrom: $accountID) {
    ...TransactionsList_transactions
  }
}

fragment Account_account on AccountNode {
  id
  name
  accountType
  balance
  balanceCurrency
}

fragment TransactionsListItem_transaction on TransactionNode {
  id
  date
  amount
  amountCurrency
  description
  accountFrom {
    id
    name
  }
  accountTo {
    id
    name
  }
  category {
    name
  }
  isCompleted
}

fragment TransactionsList_transactions on TransactionNodeConnection {
  edges {
    node {
      ...TransactionsListItem_transaction
      id
    }
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "accountID",
            "type": "ID!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "Variable",
            "name": "id",
            "variableName": "accountID"
        } as any)
    ], v2 = [
        ({
            "kind": "Variable",
            "name": "accountFrom",
            "variableName": "accountID"
        } as any)
    ], v3 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    } as any), v4 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
    } as any), v5 = [
        (v3 /*: any*/),
        (v4 /*: any*/)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "AccountPageQuery",
            "type": "Query",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "account",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "AccountNode",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "FragmentSpread",
                            "name": "Account_account",
                            "args": null
                        }
                    ]
                },
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "transactions",
                    "storageKey": null,
                    "args": (v2 /*: any*/),
                    "concreteType": "TransactionNodeConnection",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "FragmentSpread",
                            "name": "TransactionsList_transactions",
                            "args": null
                        }
                    ]
                }
            ]
        },
        "operation": {
            "kind": "Operation",
            "name": "AccountPageQuery",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "account",
                    "storageKey": null,
                    "args": (v1 /*: any*/),
                    "concreteType": "AccountNode",
                    "plural": false,
                    "selections": [
                        (v3 /*: any*/),
                        (v4 /*: any*/),
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
                },
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "transactions",
                    "storageKey": null,
                    "args": (v2 /*: any*/),
                    "concreteType": "TransactionNodeConnection",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "edges",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "TransactionNodeEdge",
                            "plural": true,
                            "selections": [
                                {
                                    "kind": "LinkedField",
                                    "alias": null,
                                    "name": "node",
                                    "storageKey": null,
                                    "args": null,
                                    "concreteType": "TransactionNode",
                                    "plural": false,
                                    "selections": [
                                        (v3 /*: any*/),
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "date",
                                            "args": null,
                                            "storageKey": null
                                        },
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "amount",
                                            "args": null,
                                            "storageKey": null
                                        },
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "amountCurrency",
                                            "args": null,
                                            "storageKey": null
                                        },
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "description",
                                            "args": null,
                                            "storageKey": null
                                        },
                                        {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "accountFrom",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "AccountNode",
                                            "plural": false,
                                            "selections": (v5 /*: any*/)
                                        },
                                        {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "accountTo",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "AccountNode",
                                            "plural": false,
                                            "selections": (v5 /*: any*/)
                                        },
                                        {
                                            "kind": "LinkedField",
                                            "alias": null,
                                            "name": "category",
                                            "storageKey": null,
                                            "args": null,
                                            "concreteType": "TransactionCategoryNode",
                                            "plural": false,
                                            "selections": [
                                                (v4 /*: any*/)
                                            ]
                                        },
                                        {
                                            "kind": "ScalarField",
                                            "alias": null,
                                            "name": "isCompleted",
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
            "name": "AccountPageQuery",
            "id": null,
            "text": "query AccountPageQuery(\n  $accountID: ID!\n) {\n  account(id: $accountID) {\n    ...Account_account\n    id\n  }\n  transactions(accountFrom: $accountID) {\n    ...TransactionsList_transactions\n  }\n}\n\nfragment Account_account on AccountNode {\n  id\n  name\n  accountType\n  balance\n  balanceCurrency\n}\n\nfragment TransactionsListItem_transaction on TransactionNode {\n  id\n  date\n  amount\n  amountCurrency\n  description\n  accountFrom {\n    id\n    name\n  }\n  accountTo {\n    id\n    name\n  }\n  category {\n    name\n  }\n  isCompleted\n}\n\nfragment TransactionsList_transactions on TransactionNodeConnection {\n  edges {\n    node {\n      ...TransactionsListItem_transaction\n      id\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '54f1cd63d74b98ecdb2cba6d7277eff2';
export default node;
