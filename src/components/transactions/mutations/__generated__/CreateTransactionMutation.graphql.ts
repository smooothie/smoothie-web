/* tslint:disable */
/* eslint-disable */
/* @relayHash 98b8e7d6df029c9f38570bcadbd43c7c */

import { ConcreteRequest } from "relay-runtime";
export type CreateTransactionMutationInput = {
    itemType: string;
    amount: number;
    date?: string | null;
    accountFromId?: string | null;
    accountToId?: string | null;
    description?: string | null;
    category: string;
    isCompleted?: boolean | null;
    counterpartyName?: string | null;
    clientMutationId?: string | null;
};
export type CreateTransactionMutationVariables = {
    input: CreateTransactionMutationInput;
};
export type CreateTransactionMutationResponse = {
    readonly transaction: {
        readonly transaction: {
            readonly id: string;
        } | null;
    } | null;
};
export type CreateTransactionMutation = {
    readonly response: CreateTransactionMutationResponse;
    readonly variables: CreateTransactionMutationVariables;
};



/*
mutation CreateTransactionMutation(
  $input: CreateTransactionMutationInput!
) {
  transaction(input: $input) {
    transaction {
      id
    }
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "input",
            "type": "CreateTransactionMutationInput!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "LinkedField",
            "alias": null,
            "name": "transaction",
            "storageKey": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "input",
                    "variableName": "input"
                }
            ],
            "concreteType": "CreateTransactionMutationPayload",
            "plural": false,
            "selections": [
                {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "transaction",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "TransactionNode",
                    "plural": false,
                    "selections": [
                        {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "id",
                            "args": null,
                            "storageKey": null
                        }
                    ]
                }
            ]
        } as any)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "CreateTransactionMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "CreateTransactionMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "CreateTransactionMutation",
            "id": null,
            "text": "mutation CreateTransactionMutation(\n  $input: CreateTransactionMutationInput!\n) {\n  transaction(input: $input) {\n    transaction {\n      id\n    }\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = '933d0531508468fe5f1d9c41e4abe150';
export default node;
