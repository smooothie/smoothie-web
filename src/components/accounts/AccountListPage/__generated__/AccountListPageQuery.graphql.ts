/* tslint:disable */
/* eslint-disable */
/* @relayHash 9c2194f0adcaaf5b37e534931d1a730d */

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
  accounts(accountType: "visible") {
    ...AccountList_accounts
  }
}

fragment AccountListItem_account on AccountNode {
  id
  name
  accountType
  balance
  balanceCurrency
}

fragment AccountList_accounts on AccountNodeConnection {
  edges {
    node {
      ...AccountListItem_account
      id
    }
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "Literal",
            "name": "accountType",
            "value": "visible"
        } as any)
    ];
    return {
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
                    "storageKey": "accounts(accountType:\"visible\")",
                    "args": (v0 /*: any*/),
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
                    "storageKey": "accounts(accountType:\"visible\")",
                    "args": (v0 /*: any*/),
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
            "text": "query AccountListPageQuery {\n  accounts(accountType: \"visible\") {\n    ...AccountList_accounts\n  }\n}\n\nfragment AccountListItem_account on AccountNode {\n  id\n  name\n  accountType\n  balance\n  balanceCurrency\n}\n\nfragment AccountList_accounts on AccountNodeConnection {\n  edges {\n    node {\n      ...AccountListItem_account\n      id\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '24abc6ec766017375ca5d5ad48bacb2e';
export default node;