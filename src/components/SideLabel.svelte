<style lang="scss">
  .positioning {
    top: 20px;
    left: -100px;
    text-decoration: underline;
    text-decoration-thickness: from-font;
    text-underline-offset: 16px;
    letter-spacing: 0.025em;
  }
</style>

<script>
  export let label
</script>

<div class="relative">
  <h2
    class="prose text-2xl text-white block bold tracking-tighter text-chocolate-200 transform -rotate-90 w-28  positioning absolute">
    {label}
  </h2>
</div>
