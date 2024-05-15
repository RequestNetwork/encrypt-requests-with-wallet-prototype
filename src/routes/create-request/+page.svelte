<script lang="ts">
  import { CreateInvoiceForm } from "$lib/index";
  import { requestNetworkStore } from "$stores/requestNetworkStore";
</script>

<div class="container m-auto w-full">
  <CreateInvoiceForm
    signer={$requestNetworkStore?.walletClient?.accounts[0]?.address}
    requestNetwork={$requestNetworkStore?.requestNetwork}
  />
</div>
