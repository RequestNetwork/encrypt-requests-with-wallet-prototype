import { providers } from "ethers";

export const publicClientToProvider = (publicClient: any) => {
  const { chains, provider } = publicClient;
  const network = {
    chainId: parseInt(chains[0].id, 16),
    name: chains[0].name,
  };

  return new providers.JsonRpcProvider(provider.url as string, network);
};
