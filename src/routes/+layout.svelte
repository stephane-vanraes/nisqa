<script lang="ts">
  import '../app.css';
  import Footer from '$lib/components/Footer.svelte';
  import Header from '$lib/components/Header.svelte';
  import Icons from '$lib/components/Icons.svelte';
</script>

<Header />

<main>
  <slot />
</main>

<Footer />
<Icons />

<style>
  main {
    flex: 1;
    inline-size: 100%;
    margin: auto;
    max-inline-size: var(--container-width);
    padding: 1rem;
  }
</style>
