/* tslint:disable */
/* eslint-disable */
/* @relayHash 1215bf2b009607fb82c893802a70c4bf */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AccountPageQueryVariables = {
    accountID: string;
};
export type AccountPageQueryResponse = {
    readonly account: {
        readonly " $fragmentRefs": FragmentRefs<"Account_account">;
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
}

fragment Account_account on AccountNode {
  id
  name
  accountType
  balance
  balanceCurrency
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
        },
        "params": {
            "operationKind": "query",
            "name": "AccountPageQuery",
            "id": null,
            "text": "query AccountPageQuery(\n  $accountID: ID!\n) {\n  account(id: $accountID) {\n    ...Account_account\n    id\n  }\n}\n\nfragment Account_account on AccountNode {\n  id\n  name\n  accountType\n  balance\n  balanceCurrency\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '164c21cc43b18b267a3f9a691afcb354';
export default node;
