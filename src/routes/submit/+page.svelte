<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<form>
  <label for="form-title">Title</label>
  <input id="form-title" name="title" />
  <label for="form-description">Description</label>
  <input id="form-description" name="description" />
  <label for="form-content">Content</label>
  <textarea id="form-content" />
  <button>Submit</button>
</form>

<style>
  form {
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 1rem;
  }
  textarea {
    min-block-size: 10rem;
  }
  button {
    justify-self: end;
    grid-column: 1 / -1;
    inline-size: max-content;
    padding: 0.5rem 1rem;
  }

  @media (max-width: 120ch) {
    form {
      gap: 0.5rem;
      grid-template-columns: 1fr;
    }
  }
</style>
