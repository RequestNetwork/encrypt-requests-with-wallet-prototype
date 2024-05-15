<script lang="ts">
  export let config;
  export let lineCount = 5;
  export let heights = ["h-2", "h-3", "h-4"];

  $: actualHeights =
    heights?.length >= lineCount
      ? heights
      : [...heights, ...Array(lineCount - heights?.length).fill("h-2")];
</script>

<div
  role="status"
  class="skeleton-wrapper"
  style="
  --mainColor: {config.colors.main};
  --secondaryColor: {config.colors.secondary};
"
>
  {#each Array(lineCount) as _, index}
    <div
      class={`${actualHeights[index % actualHeights?.length]} skeleton`}
    ></div>
  {/each}
  <span class="sr-only">Loading...</span>
</div>

<style>
  .skeleton-wrapper {
    width: 100%;
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }

  .skeleton {
    border-radius: 0.5rem;
    width: 100%;
    background: var(--mainColor);
    background: linear-gradient(
      90deg,
      var(--mainColor) 25%,
      var(--secondaryColor) 37%,
      var(--mainColor) 63%
    );
    background-size: 400% 400%;
    margin-bottom: 12px;
  }

  .skeleton:last-child {
    margin-bottom: 0;
  }

  @keyframes pulse {
    50% {
      opacity: 0.5;
    }
  }
</style>
