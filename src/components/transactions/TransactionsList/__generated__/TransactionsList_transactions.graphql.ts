/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TransactionsList_transactions = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly " $fragmentRefs": FragmentRefs<"TransactionsListItem_transaction">;
            readonly __id: string;
        } | null;
    } | null>;
    readonly " $refType": "TransactionsList_transactions";
};
export type TransactionsList_transactions$data = TransactionsList_transactions;
export type TransactionsList_transactions$key = {
    readonly " $data"?: TransactionsList_transactions$data;
    readonly " $fragmentRefs": FragmentRefs<"TransactionsList_transactions">;
};



const node: ReaderFragment = ({
    "kind": "Fragment",
    "name": "TransactionsList_transactions",
    "type": "TransactionNodeConnection",
    "metadata": null,
    "argumentDefinitions": [],
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
                        {
                            "kind": "FragmentSpread",
                            "name": "TransactionsListItem_transaction",
                            "args": null
                        }
                    ]
                }
            ]
        }
    ]
} as any);
(node as any).hash = 'd27d90d327afbb51a460f32c9af59fa7';
export default node;
