import siwe from "siwe";
import { ethers } from "ethers";
import { lit } from "../../+page.server";
import type { RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ request }) => {
  try {
    const { address, signature, statement } = await request.json();

    let nonce = await lit.getLatestBlockhash();

    const checksumAddress = ethers.utils.getAddress(address);

    const domain = "localhost";
    const origin = "https://localhost/login";

    const expirationTime = new Date(
      Date.now() + 1000 * 60 * 60 * 24 * 7 * 10000
    ).toISOString();

    const siweMessage = new siwe.SiweMessage({
      domain,
      address: checksumAddress,
      statement,
      uri: origin,
      version: "1",
      chainId: 1,
      nonce,
      expirationTime,
    });
    const messageToSign = siweMessage.prepareMessage();

    const authSig = {
      sig: signature,
      derivedVia: "web3.eth.personal.sign",
      signedMessage: messageToSign,
      address: checksumAddress,
    };

    return new Response(JSON.stringify(authSig), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    console.error("Error getting Lit Signature:", error);

    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
