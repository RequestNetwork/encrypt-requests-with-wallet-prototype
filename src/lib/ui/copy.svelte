<script lang="ts">
  export let textToCopy = "";
  let showNotification = false;

  const copyToClipboard = async () => {
    if (!textToCopy) return;
    try {
      await navigator.clipboard.writeText(textToCopy);
      showNotification = true;
      setTimeout(() => {
        showNotification = false;
      }, 1500);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };
</script>

<div class="copy">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <i
    class="fa-regular fa-copy"
    on:click={copyToClipboard}
    role="button"
    tabindex="0"
    aria-label={`Copy text: ${textToCopy}`}
    title="Copy to clipboard"
  ></i>
  {#if showNotification}
    <div class="toast">Copied!</div>
  {/if}
</div>

<style>
  .copy {
    position: relative;
  }

  .copy i {
    cursor: pointer;
    border: 1px solid #9ca3af;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    padding: 0.25rem;
    border-radius: 0.375rem;
    transition:
      background-color 0.2s ease-in-out,
      border-color 0.2s ease-in-out;
  }

  .toast {
    position: absolute;
    top: -30px;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    padding: 0.5rem;
    color: #111827;
    border-radius: 0.375rem;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    background-color: #fff;
    border: 0.5px solid #d1d5db;
  }
</style>
