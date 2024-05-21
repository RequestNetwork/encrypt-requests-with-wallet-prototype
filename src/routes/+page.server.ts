import * as LitJsSdk from "@lit-protocol/lit-node-client-nodejs";

const lit = new LitJsSdk.LitNodeClientNodeJs({
  alertWhenUnauthorized: false,
  litNetwork: "manzano",
});

await lit.connect();

export { lit };
