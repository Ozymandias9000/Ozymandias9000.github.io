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

  .clip-odd {
    clip-path: polygon(100% 0, 100% 100%, 0 60%, 0 40%);
  }
</style>

<script>
  import ProfPic from './ProfPic.svelte'
  import { spring } from 'svelte/motion'
  import Switch from './Switch.svelte'
  import { text } from 'svelte/internal'

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
        <Switch text="{checked ? '"Dark"' : '"Light"'} Mode" id="toggle" bind:checked />
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
    <div class="flex flex-col justify-center items-center h-full ">
      <div class="pt-52 transform -skew-x-12 -rotate-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="437.77501220703124px"
          height="124.42252197265624px"
          viewBox="31.11249389648438 12.78873901367188 437.77501220703124 124.42252197265624"
          preserveAspectRatio="xMidYMid"
          style="background: rgb(162, 217, 255);top: 1rem;position: relative;left: -22rem;transform: rotate(-6deg);"><defs>
            <linearGradient
              id="editing-outline-gradient"
              x1="-0.41354545764260087"
              x2="1.4135454576426008"
              y1="0.09326335692419985"
              y2="0.9067366430758002">
              <stop offset="0" stop-color="#FFDf92" />
              <stop offset="1" stop-color="#1d4ed8" />
            </linearGradient>
            <filter id="editing-outline" x="-100%" y="-100%" width="300%" height="300%">
              <feMorphology in="SourceGraphic" operator="dilate" radius="1" result="outline" />
              <feComposite operator="out" in="outline" in2="SourceAlpha" />
            </filter>
          </defs>
          <g filter="url(#editing-outline)">
            <g transform="translate(95.86001396179199, 106.52000045776367)">
              <path
                d="M35.65-30.53L35.65-30.53Q35.65-23.17 31.10-19.78L31.10-19.78L31.10-19.78Q26.56-16.38 18.62-16.38L18.62-16.38L12.93-16.38L12.93 0L7.42 0L7.42-44.10L18.62-44.10L18.62-44.10Q26.75-44.10 31.20-40.70L31.20-40.70L31.20-40.70Q35.65-37.31 35.65-30.53L35.65-30.53ZM29.70-30.46L29.70-30.46Q29.70-35.26 26.91-37.47L26.91-37.47L26.91-37.47Q24.13-39.68 19.33-39.68L19.33-39.68L12.93-39.68L12.93-20.80L19.14-20.80L19.14-20.80Q24.13-20.80 26.91-22.98L26.91-22.98L26.91-22.98Q29.70-25.15 29.70-30.46L29.70-30.46ZM67.58-34.43L67.58-34.43Q69.63-34.43 72.32-33.73L72.32-33.73L71.55-22.27L67.20-22.27L67.20-29.50L66.88-29.50L66.88-29.50Q59.07-29.50 55.81-18.37L55.81-18.37L55.81-4.16L62.66-4.16L62.66 0L45.12 0L45.12-4.16L50.43-4.16L50.43-29.57L45.12-29.57L45.12-33.73L54.46-33.73L55.49-25.73L55.49-25.73Q57.54-30.08 60.38-32.26L60.38-32.26L60.38-32.26Q63.23-34.43 67.58-34.43L67.58-34.43ZM96.06-34.43L96.06-34.43Q103.04-34.43 106.78-29.73L106.78-29.73L106.78-29.73Q110.53-25.02 110.53-16.90L110.53-16.90L110.53-16.90Q110.53-8.96 106.72-4.13L106.72-4.13L106.72-4.13Q102.91 0.70 96 0.70L96 0.70L96 0.70Q89.02 0.70 85.25-4L85.25-4L85.25-4Q81.47-8.70 81.47-16.83L81.47-16.83L81.47-16.83Q81.47-24.83 85.28-29.63L85.28-29.63L85.28-29.63Q89.09-34.43 96.06-34.43L96.06-34.43ZM96.06-30.02L96.06-30.02Q91.65-30.02 89.47-26.75L89.47-26.75L89.47-26.75Q87.30-23.49 87.30-16.83L87.30-16.83L87.30-16.83Q87.30-10.18 89.44-6.94L89.44-6.94L89.44-6.94Q91.58-3.71 96-3.71L96-3.71L96-3.71Q100.42-3.71 102.56-6.94L102.56-6.94L102.56-6.94Q104.70-10.18 104.70-16.90L104.70-16.90L104.70-16.90Q104.70-23.55 102.56-26.78L102.56-26.78L102.56-26.78Q100.42-30.02 96.06-30.02L96.06-30.02ZM138.69-49.47L138.69-49.47Q140.42-49.47 141.50-48.42L141.50-48.42L141.50-48.42Q142.59-47.36 142.59-45.70L142.59-45.70L142.59-45.70Q142.59-44.03 141.50-42.98L141.50-42.98L141.50-42.98Q140.42-41.92 138.69-41.92L138.69-41.92L138.69-41.92Q136.96-41.92 135.87-42.98L135.87-42.98L135.87-42.98Q134.78-44.03 134.78-45.70L134.78-45.70L134.78-45.70Q134.78-47.36 135.87-48.42L135.87-48.42L135.87-48.42Q136.96-49.47 138.69-49.47L138.69-49.47ZM143.68-33.73L143.68-5.38L143.68-5.38Q143.68 2.75 138.27 7.26L138.27 7.26L138.27 7.26Q132.86 11.78 122.24 13.57L122.24 13.57L121.34 9.41L121.34 9.41Q129.47 8.06 133.89 4.70L133.89 4.70L133.89 4.70Q138.30 1.34 138.30-5.06L138.30-5.06L138.30-29.44L124.29-29.44L124.29-33.73L143.68-33.73ZM164.29-14.98L164.29-14.98Q164.48-9.41 167.20-6.59L167.20-6.59L167.20-6.59Q169.92-3.78 174.08-3.78L174.08-3.78L174.08-3.78Q176.58-3.78 178.66-4.51L178.66-4.51L178.66-4.51Q180.74-5.25 183.10-6.78L183.10-6.78L185.60-3.20L185.60-3.20Q183.23-1.34 180.19-0.32L180.19-0.32L180.19-0.32Q177.15 0.70 174.08 0.70L174.08 0.70L174.08 0.70Q166.78 0.70 162.72-4.06L162.72-4.06L162.72-4.06Q158.66-8.83 158.66-16.83L158.66-16.83L158.66-16.83Q158.66-21.89 160.45-25.89L160.45-25.89L160.45-25.89Q162.24-29.89 165.57-32.16L165.57-32.16L165.57-32.16Q168.90-34.43 173.31-34.43L173.31-34.43L173.31-34.43Q179.71-34.43 183.39-29.98L183.39-29.98L183.39-29.98Q187.07-25.54 187.07-17.86L187.07-17.86L187.07-17.86Q187.07-16.38 186.94-14.98L186.94-14.98L164.29-14.98ZM173.38-30.02L173.38-30.02Q169.47-30.02 167.04-27.23L167.04-27.23L167.04-27.23Q164.61-24.45 164.29-19.07L164.29-19.07L181.82-19.07L181.82-19.07Q181.76-24.38 179.52-27.20L179.52-27.20L179.52-27.20Q177.28-30.02 173.38-30.02L173.38-30.02ZM213.70-3.90L213.70-3.90Q218.11-3.90 222.46-6.85L222.46-6.85L225.02-3.33L225.02-3.33Q222.91-1.47 219.78-0.38L219.78-0.38L219.78-0.38Q216.64 0.70 213.70 0.70L213.70 0.70L213.70 0.70Q206.21 0.70 202.02-4L202.02-4L202.02-4Q197.82-8.70 197.82-16.70L197.82-16.70L197.82-16.70Q197.82-21.76 199.71-25.79L199.71-25.79L199.71-25.79Q201.60-29.82 205.18-32.13L205.18-32.13L205.18-32.13Q208.77-34.43 213.70-34.43L213.70-34.43L213.70-34.43Q220.22-34.43 224.96-30.46L224.96-30.46L222.34-26.94L222.34-26.94Q217.92-29.89 213.63-29.89L213.63-29.89L213.63-29.89Q209.09-29.89 206.37-26.53L206.37-26.53L206.37-26.53Q203.65-23.17 203.65-16.70L203.65-16.70L203.65-16.70Q203.65-10.24 206.37-7.07L206.37-7.07L206.37-7.07Q209.09-3.90 213.70-3.90L213.70-3.90ZM263.62-1.73L263.62-1.73Q261.89-0.58 259.42 0.06L259.42 0.06L259.42 0.06Q256.96 0.70 254.53 0.70L254.53 0.70L254.53 0.70Q249.22 0.70 246.21-2.08L246.21-2.08L246.21-2.08Q243.20-4.86 243.20-9.41L243.20-9.41L243.20-29.50L235.46-29.50L235.46-33.73L243.20-33.73L243.20-41.34L248.58-41.98L248.58-33.73L260.29-33.73L259.58-29.50L248.58-29.50L248.58-9.47L248.58-9.47Q248.58-6.59 250.11-5.18L250.11-5.18L250.11-5.18Q251.65-3.78 255.04-3.78L255.04-3.78L255.04-3.78Q258.50-3.78 261.50-5.38L261.50-5.38L263.62-1.73ZM286.72-3.71L286.72-3.71Q290.56-3.71 292.80-5.18L292.80-5.18L292.80-5.18Q295.04-6.66 295.04-9.09L295.04-9.09L295.04-9.09Q295.04-10.75 294.46-11.81L294.46-11.81L294.46-11.81Q293.89-12.86 292.16-13.73L292.16-13.73L292.16-13.73Q290.43-14.59 286.91-15.49L286.91-15.49L286.91-15.49Q281.02-16.96 278.21-19.04L278.21-19.04L278.21-19.04Q275.39-21.12 275.39-25.22L275.39-25.22L275.39-25.22Q275.39-29.44 278.91-31.94L278.91-31.94L278.91-31.94Q282.43-34.43 288.19-34.43L288.19-34.43L288.19-34.43Q295.23-34.43 300.48-30.72L300.48-30.72L298.05-27.01L298.05-27.01Q295.94-28.48 293.63-29.28L293.63-29.28L293.63-29.28Q291.33-30.08 288.32-30.08L288.32-30.08L288.32-30.08Q281.02-30.08 281.02-25.66L281.02-25.66L281.02-25.66Q281.02-24.13 281.82-23.17L281.82-23.17L281.82-23.17Q282.62-22.21 284.45-21.47L284.45-21.47L284.45-21.47Q286.27-20.74 289.92-19.71L289.92-19.71L289.92-19.71Q295.42-18.24 298.14-15.97L298.14-15.97L298.14-15.97Q300.86-13.70 300.86-9.34L300.86-9.34L300.86-9.34Q300.86-4.29 296.77-1.79L296.77-1.79L296.77-1.79Q292.67 0.70 286.72 0.70L286.72 0.70L286.72 0.70Q278.78 0.70 273.54-3.84L273.54-3.84L276.54-7.36L276.54-7.36Q278.59-5.70 281.22-4.70L281.22-4.70L281.22-4.70Q283.84-3.71 286.72-3.71L286.72-3.71Z"
                fill="url(#editing-outline-gradient)" />
            </g>
          </g></svg>
      </div>

      <div class="bg-blue-700 relative w-full h-140 clip-odd" />
    </div>
  </section>
</div>
