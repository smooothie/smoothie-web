/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TransactionAmountCurrency = "AED" | "AFN" | "ALL" | "AMD" | "ANG" | "AOA" | "ARS" | "AUD" | "AWG" | "AZN" | "BAM" | "BBD" | "BDT" | "BGN" | "BHD" | "BIF" | "BMD" | "BND" | "BOB" | "BOV" | "BRL" | "BSD" | "BTN" | "BWP" | "BYN" | "BYR" | "BZD" | "CAD" | "CDF" | "CHE" | "CHF" | "CHW" | "CLF" | "CLP" | "CNY" | "COP" | "COU" | "CRC" | "CUC" | "CUP" | "CVE" | "CZK" | "DJF" | "DKK" | "DOP" | "DZD" | "EGP" | "ERN" | "ETB" | "EUR" | "FJD" | "FKP" | "GBP" | "GEL" | "GHS" | "GIP" | "GMD" | "GNF" | "GTQ" | "GYD" | "HKD" | "HNL" | "HRK" | "HTG" | "HUF" | "IDR" | "ILS" | "IMP" | "INR" | "IQD" | "IRR" | "ISK" | "JMD" | "JOD" | "JPY" | "KES" | "KGS" | "KHR" | "KMF" | "KPW" | "KRW" | "KWD" | "KYD" | "KZT" | "LAK" | "LBP" | "LKR" | "LRD" | "LSL" | "LTL" | "LVL" | "LYD" | "MAD" | "MDL" | "MGA" | "MKD" | "MMK" | "MNT" | "MOP" | "MRO" | "MUR" | "MVR" | "MWK" | "MXN" | "MXV" | "MYR" | "MZN" | "NAD" | "NGN" | "NIO" | "NOK" | "NPR" | "NZD" | "OMR" | "PAB" | "PEN" | "PGK" | "PHP" | "PKR" | "PLN" | "PYG" | "QAR" | "RON" | "RSD" | "RUB" | "RWF" | "SAR" | "SBD" | "SCR" | "SDG" | "SEK" | "SGD" | "SHP" | "SLL" | "SOS" | "SRD" | "SSP" | "STD" | "SVC" | "SYP" | "SZL" | "THB" | "TJS" | "TMM" | "TMT" | "TND" | "TOP" | "TRY" | "TTD" | "TVD" | "TWD" | "TZS" | "UAH" | "UGX" | "USD" | "USN" | "UYI" | "UYU" | "UZS" | "VEF" | "VND" | "VUV" | "WST" | "XAF" | "XAG" | "XAU" | "XBA" | "XBB" | "XBC" | "XBD" | "XCD" | "XDR" | "XFO" | "XFU" | "XOF" | "XPD" | "XPF" | "XPT" | "XSU" | "XTS" | "XUA" | "XXX" | "YER" | "ZAR" | "ZMK" | "ZMW" | "ZWD" | "ZWL" | "ZWN" | "%future added value";
export type TransactionsListItem_transaction = {
    readonly id: string;
    readonly date: string;
    readonly amount: number;
    readonly amountCurrency: TransactionAmountCurrency;
    readonly description: string;
    readonly accountFrom: {
        readonly id: string;
        readonly name: string;
    };
    readonly accountTo: {
        readonly id: string;
        readonly name: string;
    };
    readonly category: {
        readonly name: string;
    };
    readonly isCompleted: boolean;
    readonly " $refType": "TransactionsListItem_transaction";
};
export type TransactionsListItem_transaction$data = TransactionsListItem_transaction;
export type TransactionsListItem_transaction$key = {
    readonly " $data"?: TransactionsListItem_transaction$data;
    readonly " $fragmentRefs": FragmentRefs<"TransactionsListItem_transaction">;
};



const node: ReaderFragment = (function () {
    var v0 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
    } as any), v1 = ({
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
    } as any), v2 = [
        (v0 /*: any*/),
        (v1 /*: any*/)
    ];
    return {
        "kind": "Fragment",
        "name": "TransactionsListItem_transaction",
        "type": "TransactionNode",
        "metadata": null,
        "argumentDefinitions": [],
        "selections": [
            (v0 /*: any*/),
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
                "selections": (v2 /*: any*/)
            },
            {
                "kind": "LinkedField",
                "alias": null,
                "name": "accountTo",
                "storageKey": null,
                "args": null,
                "concreteType": "AccountNode",
                "plural": false,
                "selections": (v2 /*: any*/)
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
                    (v1 /*: any*/)
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
    } as any;
})();
(node as any).hash = 'e86c38b6e81ddc0b54ab6929f9fbfc46';
export default node;
