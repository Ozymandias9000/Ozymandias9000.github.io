<style lang="scss">
  .scrollContainer {
    height: 100vh;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    > * {
      scroll-snap-align: start;
    }
  }
  .whiteText {
    * {
      color: white;
    }
  }

  .full {
    min-height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
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

  pattern rect {
    animation: scaleshift 1s cubic-bezier(0.36, 0.17, 0.86, 0.67);
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

  svg {
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100%;
    z-index: -1;
  }
</style>

<script>
  let checked = true
</script>

<div class="scrollContainer {checked ? 'whiteText' : ''}">
  <section>
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
    <div class="container relative h-screen">
      <label class="absolute top-4 right-4">
        <span class="pr-2"> {checked ? 'Dark' : 'Light'} </span>
        <input type="checkbox" bind:checked />
      </label>
      <div class="flex flex-col justify-center items-center h-full">
        <h1 class="prose text-2xl">Hi there I'm nick</h1>
      </div>
    </div>
  </section>
  <section>
    <div class="container relative h-screen">
      <div class="flex flex-col justify-center items-center h-full bg-red-400">
        <h1 class="prose text-2xl">Yooooohooo</h1>
      </div>
    </div>
  </section>
</div>
