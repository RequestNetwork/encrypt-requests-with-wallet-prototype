<script lang="ts">
  import { page } from "$app/stores";
  import { config, connectWallet, formatAddress } from "$utils";
  import { requestNetworkStore } from "$stores/requestNetworkStore";
  import { Button } from "$lib/ui";

  let signer: string | undefined;
  requestNetworkStore.subscribe((value) => {
    signer = value?.walletClient?.accounts?.[0]?.address;
  });

  const links = [
    {
      name: "My dashboard",
      href: "/",
    },
    {
      name: "Create a Request",
      href: "/create-request",
    },
  ];
</script>

<nav
  class="h-full flex items-center p-[20px] gap-[60px] bg-white shadow-small mb-[80px]"
  style="--mainColor: {config.colors.main}; --secondaryColor: {config.colors
    .secondary}"
>
  <a href="/"
    ><img
      src="assets/logo.svg"
      alt="Request Network Logo"
      class="w-[120px]"
    /></a
  >
  <ul class="h-full flex gap-[60px]">
    {#each links as link}
      <li class={`h-full relative`}>
        <a href={link.href}>{link.name}</a>
        <div
          class={`${$page.url.pathname === link.href && "h-[4px] bg-light-green w-full absolute bottom-[-28px]"}`}
        ></div>
      </li>
    {/each}
  </ul>
  <Button
    text={signer ? formatAddress(signer) : "Connect Wallet"}
    onClick={connectWallet}
    className="ml-auto"
  />
</nav>
