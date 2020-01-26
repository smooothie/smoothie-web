/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AccountList_accounts = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly " $fragmentRefs": FragmentRefs<"AccountListItem_account">;
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
                            "name": "AccountListItem_account",
                            "args": null
                        }
                    ]
                }
            ]
        }
    ]
} as any);
(node as any).hash = 'f276c67e75998b892291172086716121';
export default node;
