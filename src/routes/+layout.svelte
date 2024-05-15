<script>
  import "../app.css";
  import Navbar from "../lib/navbar.svelte";
</script>

<Navbar />
<slot />

<style>
  :global(body) {
    background-color: #fafafa;
  }
</style>
