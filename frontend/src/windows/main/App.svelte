<script lang="ts">
  import Parrot from "$lib/Parrot.svelte"
  import nsLogo from "@/assets/neutralino-svelte.png"
</script>

<main>
  <div>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={nsLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Neutralino + Svelte</h1>

  <div class="card">
    <Parrot />
  </div>

  <p>
    <code>npm run build</code> to package your app for Window, Linux, and mac.
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
</style>
