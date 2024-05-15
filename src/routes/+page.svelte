<script lang="ts">
  import { ViewRequests } from "$lib/index";
  import { requestNetworkStore } from "$stores/requestNetworkStore";
</script>

<div class="container m-auto w-full">
  <ViewRequests
    wallet={$requestNetworkStore?.walletClient}
    requestNetwork={$requestNetworkStore?.requestNetwork}
  />
</div>
