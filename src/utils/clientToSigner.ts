import { providers } from "ethers";

export const walletClientToSigner = (walletClient: any): any => {
  if (walletClient) {
    const { accounts, chains, provider } = walletClient;
    const network = {
      chainId: parseInt(chains[0].id, 16),
      name: chains[0].name,
    };

    const _provider = new providers.Web3Provider(provider, network);

    const signer = _provider.getSigner(accounts?.[0]?.address);
    return signer;
  }
};
