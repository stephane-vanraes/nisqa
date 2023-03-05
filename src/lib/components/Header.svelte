<script lang="ts">
  import { page } from '$app/stores';
</script>

<div>
  <header>
    <span>Nisqa</span>
    <nav>
      <ul>
        <li>
          <a href="/" aria-current={$page.route.id == '/' ? 'page' : 'false'}>Home</a>
        </li>
        <li>
          <a href="/submit" aria-current={$page.route.id == '/submit' ? 'page' : 'false'}>Submit</a>
        </li>
      </ul>
    </nav>
  </header>
</div>

<style>
  div {
    background-color: var(--color-4);
    color: var(--textcolor-4);
  }
  header {
    align-items: flex-end;
    display: flex;
    margin: auto;
    max-inline-size: var(--container-width);
    padding: 1rem;
    inline-size: 100%;
  }
  span {
    font-size: 2rem;
    font-weight: 600;
  }
  nav {
    font-size: 1.5rem;
    font-weight: 600;
    margin-inline-start: auto;
  }
  ul {
    display: flex;
    gap: 1rem;
    list-style: none;
  }
  a {
    border-block-end: 2px solid var(--textcolor-4);
    display: block;
    padding: 0.25rem 0.5rem;
    text-decoration: none;
    transition: all 300ms ease-in-out;
  }
  a:where(:active, :focus, :hover) {
    background-color: var(--color-2);
    border-block-end-color: var(--textcolor-2);
    color: var(--textcolor-2);
  }
  a[aria-current~='page'] {
    background-color: var(--color-1);
    border-block-end-color: var(--color-1);
    color: var(--textcolor-1);
  }
</style>
