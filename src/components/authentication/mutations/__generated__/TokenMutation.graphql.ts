/* tslint:disable */
/* eslint-disable */
/* @relayHash a302b4d78cadf0ae6bfa43db80817169 */

import { ConcreteRequest } from "relay-runtime";
export type ObtainJSONWebTokenInput = {
    clientMutationId?: string | null;
    email: string;
    password: string;
};
export type TokenMutationVariables = {
    input: ObtainJSONWebTokenInput;
};
export type TokenMutationResponse = {
    readonly tokenAuth: {
        readonly token: string | null;
    } | null;
};
export type TokenMutation = {
    readonly response: TokenMutationResponse;
    readonly variables: TokenMutationVariables;
};



/*
mutation TokenMutation(
  $input: ObtainJSONWebTokenInput!
) {
  tokenAuth(input: $input) {
    token
  }
}
*/

const node: ConcreteRequest = (function () {
    var v0 = [
        ({
            "kind": "LocalArgument",
            "name": "input",
            "type": "ObtainJSONWebTokenInput!",
            "defaultValue": null
        } as any)
    ], v1 = [
        ({
            "kind": "LinkedField",
            "alias": null,
            "name": "tokenAuth",
            "storageKey": null,
            "args": [
                {
                    "kind": "Variable",
                    "name": "input",
                    "variableName": "input"
                }
            ],
            "concreteType": "ObtainJSONWebTokenPayload",
            "plural": false,
            "selections": [
                {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "token",
                    "args": null,
                    "storageKey": null
                }
            ]
        } as any)
    ];
    return {
        "kind": "Request",
        "fragment": {
            "kind": "Fragment",
            "name": "TokenMutation",
            "type": "Mutation",
            "metadata": null,
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "operation": {
            "kind": "Operation",
            "name": "TokenMutation",
            "argumentDefinitions": (v0 /*: any*/),
            "selections": (v1 /*: any*/)
        },
        "params": {
            "operationKind": "mutation",
            "name": "TokenMutation",
            "id": null,
            "text": "mutation TokenMutation(\n  $input: ObtainJSONWebTokenInput!\n) {\n  tokenAuth(input: $input) {\n    token\n  }\n}\n",
            "metadata": {}
        }
    } as any;
})();
(node as any).hash = 'ea958f97574ffee4954d9e34e0cb7501';
export default node;
