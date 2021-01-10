<style lang="scss">
  .scrollContainer {
    font-family: 'IBM Plex Sans';
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
    clip-path: polygon(0 0, 100% 40%, 100% 60%, 0 100%);
  }
</style>

<script>
  import ProfPic from './ProfPic.svelte'
  import Switch from './Switch.svelte'

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

      <!-- <circle cx={$coords.x} cy={$coords.y} r={$size} fill="blue" /> -->
    </svg>
    <div class="container relative h-screen">
      <div class="fixed top-4 right-4 z-20">
        <button class="pr-8 cursor-pointer {checked ? 'text-white hover:text-gray-400' : ''}">Projects</button>
        <button class="pr-8 cursor-pointer {checked ? 'text-white hover:text-gray-400' : ''}">Contact Me</button>
      </div>
      <div class="fixed top-4 left-4 z-20">
        <Switch text={checked ? 'Fiat Lux' : 'Fiat Noctem'} id="toggle" bind:checked />
      </div>
      <div class="flex flex-col justify-center items-center h-3/5">
        <ProfPic />
        <h1 class="prose text-2xl relative {checked ? 'text-white' : ''} tracking-wide">~ nick murphy ~</h1>
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
        <span class="prose text-md not-italic relative {checked ? 'text-white' : ''} tracking-wider">
          software engineer</span>
      </div>
      <div class="relative">
        <span
          class="relative top-56 transform w-8 h-8 rounded-md flex items-center justify-center m-auto z-10 transition-colors duration-1500 ease-in-out arrow-clip  bg-royalblue-300" />
        <span
          class="relative top-52 transform w-14 h-14 rounded-md flex items-center justify-center m-auto z-10 transition-colors duration-1500 ease-in-out arrow-clip bg-royalblue-500" />
        <span
          class="relative top-44 transform w-20 h-20 rounded-md flex items-center justify-center m-auto z-10 transition-colors duration-1500 ease-in-out arrow-clip  bg-royalblue-700" />
        <span
          class="relative top-30 transform w-26 h-26 rounded-md flex items-center justify-center m-auto z-10 transition-colors duration-1500 ease-in-out arrow-clip bg-royalblue-900" />
      </div>
    </div>
  </section>
  <section class="relative">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path
        fill="#5042A3"
        fill-opacity="1"
        d="M0,96L17.1,117.3C34.3,139,69,181,103,202.7C137.1,224,171,224,206,192C240,160,274,96,309,85.3C342.9,75,377,117,411,117.3C445.7,117,480,75,514,64C548.6,53,583,75,617,96C651.4,117,686,139,720,149.3C754.3,160,789,160,823,149.3C857.1,139,891,117,926,128C960,139,994,181,1029,176C1062.9,171,1097,117,1131,106.7C1165.7,96,1200,128,1234,133.3C1268.6,139,1303,117,1337,117.3C1371.4,117,1406,139,1423,149.3L1440,160L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z" /></svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="absolute top-7"><path
        fill="#a2d9ff"
        fill-opacity="1"
        d="M0,96L17.1,117.3C34.3,139,69,181,103,202.7C137.1,224,171,224,206,192C240,160,274,96,309,85.3C342.9,75,377,117,411,117.3C445.7,117,480,75,514,64C548.6,53,583,75,617,96C651.4,117,686,139,720,149.3C754.3,160,789,160,823,149.3C857.1,139,891,117,926,128C960,139,994,181,1029,176C1062.9,171,1097,117,1131,106.7C1165.7,96,1200,128,1234,133.3C1268.6,139,1303,117,1337,117.3C1371.4,117,1406,139,1423,149.3L1440,160L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z" /></svg>
  </section>

  <section class="bg-denim-300">
    <div class="flex flex-col justify-center items-center h-full relative">
      <div class="w-3/5 absolute top-20 z-10">
        <div class="transform -skew-x-12 -rotate-3 bg-royalblue-800 rounded-2xl shadow-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="490.0075317382812px"
            height="124.4224853515625px"
            viewBox="4.996234130859392 12.78875732421875 490.0075317382812 124.4224853515625"
            preserveAspectRatio="xMidYMid"><defs>
              <linearGradient
                id="editing-outline-gradient"
                x1="-0.41354545764260087"
                x2="1.4135454576426008"
                y1="0.09326335692419985"
                y2="0.9067366430758002">
                <stop offset="0" stop-color="#fff" />
                <stop offset="1" stop-color="#266082" />
              </linearGradient>
              <filter id="editing-outline" x="-100%" y="-100%" width="300%" height="300%">
                <feMorphology in="SourceGraphic" operator="dilate" radius="1" result="outline" />
                <feComposite operator="out" in="outline" in2="SourceAlpha" />
              </filter>
            </defs>
            <g filter="url(#editing-outline)">
              <g transform="translate(79.37500730156898, 99.29000091552734)">
                <path
                  d="M38.08-44.10L31.42 0L24.13 0L19.07-33.28L13.95 0L6.46 0L0.32-44.10L5.89-44.10L10.56-6.08L15.87-38.98L22.66-38.98L27.71-6.08L32.96-44.10L38.08-44.10ZM50.18-47.81L50.18-29.06L50.18-29.06Q52.16-31.62 55.04-33.02L55.04-33.02L55.04-33.02Q57.92-34.43 60.99-34.43L60.99-34.43L60.99-34.43Q70.46-34.43 70.46-24.45L70.46-24.45L70.46 0L65.09 0L65.09-24.38L65.09-24.38Q65.09-27.39 63.68-28.77L63.68-28.77L63.68-28.77Q62.27-30.14 59.20-30.14L59.20-30.14L59.20-30.14Q56.58-30.14 54.14-28.48L54.14-28.48L54.14-28.48Q51.71-26.82 50.18-24.58L50.18-24.58L50.18 0L44.80 0L44.80-47.23L50.18-47.81ZM107.39-7.36L107.39-7.36Q107.39-5.38 108.03-4.45L108.03-4.45L108.03-4.45Q108.67-3.52 110.14-3.07L110.14-3.07L108.80 0.77L108.80 0.77Q103.87 0.13 102.66-4.03L102.66-4.03L102.66-4.03Q100.86-1.73 98.14-0.51L98.14-0.51L98.14-0.51Q95.42 0.70 92.10 0.70L92.10 0.70L92.10 0.70Q87.04 0.70 84.13-2.11L84.13-2.11L84.13-2.11Q81.22-4.93 81.22-9.66L81.22-9.66L81.22-9.66Q81.22-14.85 85.28-17.66L85.28-17.66L85.28-17.66Q89.34-20.48 96.96-20.48L96.96-20.48L101.95-20.48L101.95-23.23L101.95-23.23Q101.95-26.82 99.90-28.38L99.90-28.38L99.90-28.38Q97.86-29.95 93.95-29.95L93.95-29.95L93.95-29.95Q90.11-29.95 85.18-28.22L85.18-28.22L83.71-32.32L83.71-32.32Q89.66-34.43 94.78-34.43L94.78-34.43L94.78-34.43Q100.93-34.43 104.16-31.55L104.16-31.55L104.16-31.55Q107.39-28.67 107.39-23.55L107.39-23.55L107.39-7.36ZM93.44-3.33L93.44-3.33Q95.94-3.33 98.21-4.61L98.21-4.61L98.21-4.61Q100.48-5.89 101.95-8.13L101.95-8.13L101.95-16.77L97.09-16.77L97.09-16.77Q91.71-16.77 89.34-14.98L89.34-14.98L89.34-14.98Q86.98-13.18 86.98-9.73L86.98-9.73L86.98-9.73Q86.98-3.33 93.44-3.33L93.44-3.33ZM148.42-1.73L148.42-1.73Q146.69-0.58 144.22 0.06L144.22 0.06L144.22 0.06Q141.76 0.70 139.33 0.70L139.33 0.70L139.33 0.70Q134.02 0.70 131.01-2.08L131.01-2.08L131.01-2.08Q128.00-4.86 128.00-9.41L128.00-9.41L128.00-29.50L120.26-29.50L120.26-33.73L128.00-33.73L128.00-41.34L133.38-41.98L133.38-33.73L145.09-33.73L144.38-29.50L133.38-29.50L133.38-9.47L133.38-9.47Q133.38-6.59 134.91-5.18L134.91-5.18L134.91-5.18Q136.45-3.78 139.84-3.78L139.84-3.78L139.84-3.78Q143.30-3.78 146.30-5.38L146.30-5.38L148.42-1.73ZM223.81-44.10L223.81-39.62L214.02-39.62L214.02-4.42L223.81-4.42L223.81 0L198.59 0L198.59-4.42L208.38-4.42L208.38-39.62L198.59-39.62L198.59-44.10L223.81-44.10ZM304.19-22.27L304.19-22.27Q304.19-9.73 298.43-4.86L298.43-4.86L298.43-4.86Q292.67 0 284.22 0L284.22 0L274.11 0L274.11-44.10L283.52-44.10L283.52-44.10Q292.80-44.10 298.50-39.42L298.50-39.42L298.50-39.42Q304.19-34.75 304.19-22.27L304.19-22.27ZM298.24-22.27L298.24-22.27Q298.24-29.44 296.29-33.25L296.29-33.25L296.29-33.25Q294.34-37.06 291.46-38.30L291.46-38.30L291.46-38.30Q288.58-39.55 284.86-39.55L284.86-39.55L279.68-39.55L279.68-4.48L284.93-4.48L284.93-4.48Q290.62-4.48 294.43-8.42L294.43-8.42L294.43-8.42Q298.24-12.35 298.24-22.27L298.24-22.27ZM326.46-34.43L326.46-34.43Q333.44-34.43 337.18-29.73L337.18-29.73L337.18-29.73Q340.93-25.02 340.93-16.90L340.93-16.90L340.93-16.90Q340.93-8.96 337.12-4.13L337.12-4.13L337.12-4.13Q333.31 0.70 326.40 0.70L326.40 0.70L326.40 0.70Q319.42 0.70 315.65-4L315.65-4L315.65-4Q311.87-8.70 311.87-16.83L311.87-16.83L311.87-16.83Q311.87-24.83 315.68-29.63L315.68-29.63L315.68-29.63Q319.49-34.43 326.46-34.43L326.46-34.43ZM326.46-30.02L326.46-30.02Q322.05-30.02 319.87-26.75L319.87-26.75L319.87-26.75Q317.70-23.49 317.70-16.83L317.70-16.83L317.70-16.83Q317.70-10.18 319.84-6.94L319.84-6.94L319.84-6.94Q321.98-3.71 326.40-3.71L326.40-3.71L326.40-3.71Q330.82-3.71 332.96-6.94L332.96-6.94L332.96-6.94Q335.10-10.18 335.10-16.90L335.10-16.90L335.10-16.90Q335.10-23.55 332.96-26.78L332.96-26.78L332.96-26.78Q330.82-30.02 326.46-30.02L326.46-30.02Z"
                  fill="url(#editing-outline-gradient)" />
              </g>
            </g>
          </svg>
        </div>

        <div
          class="-skew-x-12 p-4 prose text-xl text-white z-20 absolute top-4 right-8 w-1/2 transform -rotate-3 bg-carrot-400 rounded-2xl border-red-400 border-2 shadow-md not-italic">
          <span class=""> Full-stack development, primarily Typescript/Javascript</span>
        </div>
      </div>

      <div class="bg-pacific-700 relative w-full pt-68 pb-68 clip-odd flex flex-col items-center justify-center">
        <h2 class="prose text-2xl text-white block">Users</h2>
        <span class="mb-8">Typescript, Express, DynamoDB, Auth0</span>

        <h2 class="prose text-2xl text-white block">App</h2>
        <span class="mb-8">Typescript, React, Auth0</span>

        <h2 class="prose text-2xl text-white block">Analytics</h2>
        <span class="mb-8">PHP, Lumen, Google BigQuery</span>

        <h2 class="prose text-2xl text-white block">Migration Service</h2>
        <span class="mb-8">Typescript, React, Express, Auth0, MongoDB, SQS, ECS</span>

        <h2 class="prose text-2xl text-white block">Denali</h2>
        <span class="mb-8">React, Express, MySQL</span>
      </div>
    </div>
  </section>
</div>
