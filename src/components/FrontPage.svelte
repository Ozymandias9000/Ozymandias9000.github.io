<style>
  :global(:root) {
    --color-dark: #03010a;
    color: var(--color-dark);
  }
  .whiteText {
    color: white;
  }

  @keyframes scaleshift {
    0% {
      transform: scale(0.001);
      rx: 50;
    }
    35% {
      rx: 20;
    }
    100% {
      transform: scale(1);
      rx: 0;
    }
  }
  svg {
    min-height: 100vh;
    position: absolute;
    top: 0;
    z-index: -1;
  }
  pattern rect {
    animation: scaleshift 1.5s cubic-bezier(0.36, 0.17, 0.86, 0.67);
    fill: var(--color-dark);
  }
  .toWhite {
    animation-direction: reverse;
    transform: scale(0);
  }
  .topleft {
    transform-origin: 50px 50px;
  }
  .bottomleft {
    transform-origin: 50px 150px;
  }
  .topright {
    transform-origin: 150px 50px;
  }
  .bottomright {
    transform-origin: 150px 150px;
  }
</style>

<script>
  let checked = true
</script>

<input type="checkbox" bind:checked />
<span class={checked ? 'whiteText' : ''}>{checked ? 'dark' : 'light'} </span>
<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100vh">
  <defs>
    {#key checked}
      <pattern id="blocks" patternUnits="userSpaceOnUse" width="200" height="200">
        <rect width="100" height="100" class="topleft {checked ? '' : 'toWhite'}" />
        <rect width="100" height="100" class="topright {checked ? '' : 'toWhite'}" x="100" />
        <rect width="100" height="100" class="bottomleft {checked ? '' : 'toWhite'}" y="100" />
        <rect width="100" height="100" x="100" y="100" class="bottomright {checked ? '' : 'toWhite'}" />
      </pattern>
    {/key}
  </defs>
  <rect width="100%" height="100%" fill="url(#blocks)" />
</svg>
