<style lang="scss">
  .positioning {
    left: -100px;
    text-decoration: underline;
    text-decoration-thickness: from-font;
    text-underline-offset: 16px;
    letter-spacing: 0.025em;
  }
</style>

<script>
  export let label
  export let down
  export let checked
</script>

<div class="relative">
  <h2
    class="prose text-2xl text-white block bold tracking-tighter {down ? `top-${down}` : 'top-0'} {checked ? `text-chocolate-200` : `text-chocolate-700`} transform -rotate-90 w-28  positioning absolute whitespace-nowrap">
    {label}
  </h2>
</div>
