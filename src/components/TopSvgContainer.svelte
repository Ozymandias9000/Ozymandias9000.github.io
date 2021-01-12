<style>
  .svgContainer {
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100%;
    z-index: -1;
  }

  pattern rect {
    animation: scaleshift 1s cubic-bezier(0.36, 0.17, 0.86, 0.67);
    fill: text-pacific-700;
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
</style>

<script>
  export let checked
</script>

<svg class="svgContainer bg-pacific-100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100vh">
  <defs>
    {#key checked}
      <pattern id="blocks" patternUnits="userSpaceOnUse" width="200" height="200">
        <rect width="100" height="100" class="topleft {checked ? '' : 'toWhite'} fill-current text-pacific-700" />
        <rect
          width="100"
          height="100"
          x="100"
          class="topright {checked ? '' : 'toWhite'} fill-current text-pacific-700" />
        <rect
          width="100"
          height="100"
          y="100"
          class="bottomleft {checked ? '' : 'toWhite'} fill-current text-pacific-700" />
        <rect
          width="100"
          height="100"
          x="100"
          y="100"
          class="bottomright {checked ? '' : 'toWhite'} fill-current text-pacific-700" />
      </pattern>
    {/key}
  </defs>
  <rect width="100%" height="100%" fill="url(#blocks)" />
</svg>
