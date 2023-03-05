<script>
  import Icon from './Icon.svelte';
</script>

<footer>
  <span>&copy; 2023 - Stephane Vanraes</span>
  <a href="https://github.com/stephane-vanraes/nisqa">
    <Icon name="github" />
    <span>Github</span>
  </a>
</footer>

<style>
  footer {
    display: flex;
    padding: 1rem;
  }
  a {
    align-items: center;
    display: flex;
    gap: 1ch;
    margin-inline-start: auto;
    text-decoration: none;
  }
  a > span {
    text-decoration: underline;
  }
  a:where(:active, :focus, :hover) {
    outline: 0.25rem solid var(--color-3);
    outline-offset: 0.25rem;
  }
</style>
