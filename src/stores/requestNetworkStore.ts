import axios from "axios";
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
    const statement =
      "This is a test statement.  You can put anything you want here.";
    const address = walletClient.accounts[0].address.toLowerCase();

    const web3SignatureProvider = new Web3SignatureProvider(
      walletClient.provider
    );

    const requestNetwork = new RequestNetwork({
      nodeConnectionConfig: {
        baseURL: "https://sepolia.gateway.request.network/",
      },
      signatureProvider: web3SignatureProvider,
    });

    const signature = await walletClient.provider.request({
      method: "personal_sign",
      params: [statement, address],
    });

    const res = await axios.post("/api/getSignature", {
      address,
      signature,
      statement,
    });

    // TODO: Add localstorage to store the signature
    console.log(res.data);

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
