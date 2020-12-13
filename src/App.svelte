<style>
  :global(:root) {
    --color-dark: #03010a;
    color: var(--color-dark);
    min-height: 100vh;
    margin: 0;
    background: #fdfdf0;
    overflow: hidden;
  }
</style>

<script>
  import Tailwindcss from './TailwindStyles.svelte'
  import FrontPage from './components/FrontPage.svelte'
</script>

<FrontPage />
