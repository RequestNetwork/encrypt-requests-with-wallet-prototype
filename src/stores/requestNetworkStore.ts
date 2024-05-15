import { writable, type Writable } from "svelte/store";
import { RequestNetwork } from "@requestnetwork/request-client.js";
import { Web3SignatureProvider } from "@requestnetwork/web3-signature";

export const requestNetworkStore: Writable<{
  walletClient: any;
  requestNetwork: RequestNetwork | null;
} | null> = writable(null);

export const initializeRequestNetwork = async (
  walletClient: any
): Promise<void> => {
  try {
    const web3SignatureProvider = new Web3SignatureProvider(
      walletClient.provider
    );

    const requestNetwork = new RequestNetwork({
      nodeConnectionConfig: {
        baseURL: "https://sepolia.gateway.request.network/",
      },
      signatureProvider: web3SignatureProvider,
    });

    requestNetworkStore.set({
      walletClient,
      requestNetwork,
    });
    console.log("Request Network initialized successfully.");
  } catch (error) {
    console.error("Failed to initialize the Request Network:", error);
    requestNetworkStore.set(null);
  }
};
