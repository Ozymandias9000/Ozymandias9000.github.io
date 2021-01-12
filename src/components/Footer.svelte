<style>
  footer {
    border-top: 3px solid #e5d884;

    text-align: center;
    color: #c0ffee;
  }

  footer p {
    margin: 0;
  }

  footer img {
    height: 16px;
    /* position: relative;
    top: 3px; */
  }
</style>

<script>
  import Svelte from './icons/Svelte.svelte'
</script>

<footer class="h-10 w-full bg-pacific-500">
  <span class="prose prose-sm text-white mt-2 mx-auto block tracking-wide">
    <Svelte />
    Developed with Svelte + Tailwind | Nick Murphy
  </span>
</footer>
