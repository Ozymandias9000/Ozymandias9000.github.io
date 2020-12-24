<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,200;1,200&display=swap');
  .scrollContainer {
    font-family: 'IBM Plex Serif';
    font-style: italic;
    height: 100vh;
    // scroll-snap-type: y mandatory;
    overflow-y: scroll;
    // > * {
    //   scroll-snap-align: start;
    // }
  }

  .full {
    min-height: 100vh;
    width: 100%;
    position: absolute;
    top: 0;
  }

  .second-container {
    background: #a2d9ff;
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

  .svgContainer {
    position: absolute;
    top: 0;
    height: 100vh;
    width: 100%;
    z-index: -1;
  }
  circle {
    position: relative;
    top: 100;
  }

  .arrow-clip {
    clip-path: polygon(100% 0, 0 0, 48% 43%);
  }
</style>

<script>
  import ProfPic from './ProfPic.svelte'
  import { spring } from 'svelte/motion'

  let checked = true

  //   let coords = spring({ x: 50, y: 50 })
  //   let size = spring(10)
</script>

<div class="scrollContainer transition-colors duration-2000">
  <section class="h-1/2">
    <svg class="svgContainer bg-white" xmlns="http://www.w3.org/2000/svg" width="100%" height="100vh">
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

      <!-- <circle cx={$coords.x} cy={$coords.y} r={$size} fill="blue" /> -->
    </svg>
    <div class="container relative h-screen">
      <div class="fixed top-4 right-4 z-20">
        <button class="pr-8 cursor-pointer {checked ? 'text-white hover:text-gray-400' : ''}">Projects</button>
        <button class="pr-8 cursor-pointer {checked ? 'text-white hover:text-gray-400' : ''}">Contact Me</button>
      </div>
      <div class="fixed top-4 left-4 z-20">
        <label>
          <span class="pr-2 transition-colors duration-2000 {checked ? 'text-white' : ''}">
            "{checked ? 'Dark' : 'Light'}" Mode

            <!-- {$coords.x} {$coords.y} -->
          </span>
          <input type="checkbox" bind:checked />
        </label>
      </div>
      <div class="flex flex-col justify-center items-center h-3/5 ">
        <ProfPic />
        <h1 class="prose text-2xl relative {checked ? 'text-white' : ''}">~ nick murphy ~</h1>
        <select
          style="text-align-last: center;"
          class="prose duration-1000 w-30 {checked ? 'text-white bg-black' : ''}"
          name="adverbs"
          selected="skilled">
          <option value="wildly">wildly</option>
          <option value="passionately">passionately</option>
          <option value="indubitably">indubitably</option>
          <option value="always">always</option>
        </select>
        <select
          style="text-align-last: center;"
          class="prose duration-1000 w-30 {checked ? 'text-white bg-black' : ''}"
          name="adjectives"
          selected="skilled">
          <option value="skilled">skilled</option>
          <option value="enthusiastic">enthusiastic</option>
          <option value="learning">learning</option>
          <option value="humble">humble</option>
        </select>
        <span class="prose text-md not-italic relative {checked ? 'text-white' : ''}"> software engineer</span>
      </div>
      <div class="relative">
        <span
          class="relative top-56 transform w-8 h-8 rounded-md flex items-center justify-center m-auto z-10 transition-colors duration-1500 ease-in-out arrow-clip  bg-blue-300" />
        <span
          class="relative top-52 transform w-14 h-14 rounded-md flex items-center justify-center m-auto z-10 transition-colors duration-1500 ease-in-out arrow-clip bg-blue-500" />
        <span
          class="relative top-44 transform w-20 h-20 rounded-md flex items-center justify-center m-auto z-10 transition-colors duration-1500 ease-in-out arrow-clip  bg-blue-700" />
        <span
          class="relative top-30 transform w-26 h-26 rounded-md flex items-center justify-center m-auto z-10 transition-colors duration-1500 ease-in-out arrow-clip bg-blue-900" />
      </div>
    </div>
  </section>
  <section class="relative">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path
        fill="#a2d "
        fill-opacity="1"
        d="M0,96L17.1,117.3C34.3,139,69,181,103,202.7C137.1,224,171,224,206,192C240,160,274,96,309,85.3C342.9,75,377,117,411,117.3C445.7,117,480,75,514,64C548.6,53,583,75,617,96C651.4,117,686,139,720,149.3C754.3,160,789,160,823,149.3C857.1,139,891,117,926,128C960,139,994,181,1029,176C1062.9,171,1097,117,1131,106.7C1165.7,96,1200,128,1234,133.3C1268.6,139,1303,117,1337,117.3C1371.4,117,1406,139,1423,149.3L1440,160L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z" /></svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="absolute top-7"><path
        fill="#a2d9ff"
        fill-opacity="1"
        d="M0,96L17.1,117.3C34.3,139,69,181,103,202.7C137.1,224,171,224,206,192C240,160,274,96,309,85.3C342.9,75,377,117,411,117.3C445.7,117,480,75,514,64C548.6,53,583,75,617,96C651.4,117,686,139,720,149.3C754.3,160,789,160,823,149.3C857.1,139,891,117,926,128C960,139,994,181,1029,176C1062.9,171,1097,117,1131,106.7C1165.7,96,1200,128,1234,133.3C1268.6,139,1303,117,1337,117.3C1371.4,117,1406,139,1423,149.3L1440,160L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z" /></svg>
  </section>

  <section class="second-container">
    <div class="container relative h-screen">
      <div class="flex flex-col justify-center items-center h-full ">
        <div class="p-4 w-40 bg-blue-900 text-center transform -skew-x-12 -rotate-6">
          <h1 class="prose text-2xl text-white">~ Projects ~</h1>
        </div>
      </div>
    </div>
  </section>
</div>
