/* tslint:disable */
/* eslint-disable */
/* @relayHash 16f24f156db09a1fe224356050e0fa03 */

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
  accounts(itemType: "visible") {
    ...AccountList_accounts
  }
}

fragment AccountListItem_account on AccountNode {
  id
  name
  itemType
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
            "name": "itemType",
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
                    "storageKey": "accounts(itemType:\"visible\")",
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
                    "storageKey": "accounts(itemType:\"visible\")",
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
                                            "name": "itemType",
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
            "text": "query AccountListPageQuery {\n  accounts(itemType: \"visible\") {\n    ...AccountList_accounts\n  }\n}\n\nfragment AccountListItem_account on AccountNode {\n  id\n  name\n  itemType\n  balance\n  balanceCurrency\n}\n\nfragment AccountList_accounts on AccountNodeConnection {\n  edges {\n    node {\n      ...AccountListItem_account\n      id\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '5334995e676624bfba7c92742f7cefa0';
export default node;
