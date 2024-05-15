import { type Writable } from "svelte/store";
import { RequestNetwork } from "@requestnetwork/request-client.js";
export declare const requestNetworkStore: Writable<{
    requestNetwork: RequestNetwork | null;
    signer: string;
} | null>;
export declare const initializeRequestNetwork: (walletClient: any, signer: string) => Promise<void>;
