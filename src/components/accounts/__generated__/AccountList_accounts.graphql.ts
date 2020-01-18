/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AccountList_accounts = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly " $fragmentRefs": FragmentRefs<"Account_account">;
            readonly __id: string;
        } | null;
    } | null>;
    readonly " $refType": "AccountList_accounts";
};
export type AccountList_accounts$data = AccountList_accounts;
export type AccountList_accounts$key = {
    readonly " $data"?: AccountList_accounts$data;
    readonly " $fragmentRefs": FragmentRefs<"AccountList_accounts">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "AccountList_accounts",
    "type": "AccountNodeConnection",
    "metadata": null,
    "argumentDefinitions": [],
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
                            "kind": "FragmentSpread",
                            "name": "Account_account",
                            "args": null
                        }
                    ]
                }
            ]
        }
    ]
} as any);
(node as any).hash = 'd55c14cc1f60a034903089e6cc53a985';
export default node;
