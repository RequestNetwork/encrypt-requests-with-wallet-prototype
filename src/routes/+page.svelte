<script lang="ts">
  import { config } from "$src/utils";
  import { ViewRequests } from "$lib/index";
  import { requestNetworkStore } from "$stores/requestNetworkStore";
</script>

<div class="container m-auto w-full">
  <ViewRequests
    {config}
    wallet={$requestNetworkStore?.walletClient}
    requestNetwork={$requestNetworkStore?.requestNetwork}
  />
</div>
