<style lang="scss">
  .scrollContainer {
    font-family: 'IBM Plex Sans';
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
    clip-path: polygon(0 0, 100% 30%, 100% 70%, 0 100%);
  }

  .whatIDo {
    filter: drop-shadow(0 0 3px #03010a);

    transition: all 0.5s;
    &:hover {
      animation: neon 1s ease-in-out infinite alternate;
    }

    @keyframes neon {
      from {
        filter: drop-shadow(0 0 3px #03010a);
      }
      to {
        filter: drop-shadow(0 0 2px #edf0f7) drop-shadow(0 0 6px #edf0f7) drop-shadow(0 0 10px #edf0f7)
          drop-shadow(0 0 12px #5042a3) drop-shadow(0 0 14px #5042a3) drop-shadow(0 0 6px #5042a3);
      }
    }
  }
</style>

<script>
  import Aws from './icons/AWS.svelte'
  import Docker from './icons/Docker.svelte'
  import Dynamo from './icons/Dynamo.svelte'
  import Express from './icons/Express.svelte'
  import Jest from './icons/Jest.svelte'
  import Js from './icons/JS.svelte'
  import MaterialUi from './icons/MaterialUI.svelte'
  import Mongo from './icons/Mongo.svelte'
  import MySql from './icons/MySQL.svelte'
  import React from './icons/React.svelte'

  import Ts from './icons/TS.svelte'
  import IntersectionObs from './IntersectionObs.svelte'

  import ProfPic from './ProfPic.svelte'
  import SideLabel from './SideLabel.svelte'
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
      <div class="fixed top-2 right-4 z-50">
        <button class="prose pr-8 cursor-pointer {checked ? 'text-white hover:text-gray-400' : ''}">Projects</button>
        <button class="prose pr-8 cursor-pointer {checked ? 'text-white hover:text-gray-400' : ''}">Contact Me</button>
      </div>
      <div class="fixed top-2 left-4 z-50">
        <Switch text={checked ? 'Fiat Lux' : 'Fiat Noctem'} id="toggle" bind:checked />
      </div>
      <div class="flex flex-col justify-center items-center h-3/5">
        <IntersectionObs let:intersecting top={0}>
          <ProfPic />

          {#if !intersecting}
            <div
              class="fixed top-0 right-0 {checked ? 'bg-pacific-700' : 'bg-pacific-100'}  opacity-95 h-12 w-full pointer-events-none z-40" />
            <h1 class="prose font-serif text-2xl fixed {checked ? 'text-white' : ''} tracking-wide top-1 z-50">
              ~ nick murphy ~
            </h1>
          {/if}
        </IntersectionObs>
        <h1 class="prose font-serif text-2xl sticky {checked ? 'text-white' : ''} tracking-wide top-1">
          ~ nick murphy ~
        </h1>

        <select
          style="text-align-last: center;"
          class="prose duration-1000 w-30 {checked ? 'text-white bg-black' : ''}"
          name="adverbs"
          selected="skilled">
          <option value="wildly">wildly</option>
          <option value="passionately">passionately</option>
          <option value="consistently">consistently</option>
          <option value="indubitably">indubitably</option>
        </select>
        <select
          style="text-align-last: center;"
          class="prose duration-1000 w-30 {checked ? 'text-white bg-black' : ''}"
          name="adjectives"
          selected="skilled">
          <option value="skilled">skilled</option>
          <option value="enthusiastic">enthusiastic</option>
          <option value="involved">involved</option>
          <option value="humble">humble</option>
        </select>

        <span class=" text-md  relative {checked ? 'text-white' : ''} tracking-wider"> software engineer</span>
      </div>
      <!-- <div class="relative">
        <span
          class="relative top-56 transform w-8 h-8 rounded-md flex items-center justify-center m-auto z-10 transition-colors duration-1500 ease-in-out arrow-clip  bg-royalblue-300" />
        <span
          class="relative top-52 transform w-14 h-14 rounded-md flex items-center justify-center m-auto z-10 transition-colors duration-1500 ease-in-out arrow-clip bg-royalblue-500" />
        <span
          class="relative top-44 transform w-20 h-20 rounded-md flex items-center justify-center m-auto z-10 transition-colors duration-1500 ease-in-out arrow-clip  bg-royalblue-700" />
        <span
          class="relative top-30 transform w-26 h-26 rounded-md flex items-center justify-center m-auto z-10 transition-colors duration-1500 ease-in-out arrow-clip bg-royalblue-900" />
      </div> -->
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
      <div class="absolute top-20 z-10" style="width:1050px">
        <div class="transform -skew-x-12 -rotate-3 bg-royalblue-800 rounded-2xl shadow-2xl">
          <svg
            class="whatIDo"
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
          class="-skew-x-12 p-4 prose prose-lg text-white z-20 absolute top-4 right-8 transform -rotate-3 bg-carrot-400 rounded-2xl border-red-400 border-2 shadow-md  text-center font-bold">
          <span>Full Stack Development (mostly Typescript/React/Express)</span>
        </div>
      </div>

      <div class="bg-pacific-800 relative w-full p-40 pt-68 pb-68 clip-odd flex flex-col items-center justify-center">
        <div class="pr-44 pl-44">
          <div class="mb-10">
            <span class="prose prose-lg text-white ">Currently at
              <a href="https://www.minutemedia.com/" target="_blank">Minute Media</a>.</span>
          </div>

          <div class="prose prose-lg font-bold text-white mb-2">I solve problems.</div>

          <div class="prose prose-lg font-bold text-white mb-2">
            I love working in enthusiastic, self-motivated teams.
          </div>

          <div class="prose prose-lg font-bold text-white mb-10">And I write performant, testable, readable code.</div>

          <div class="prose prose-lg text-white mb-10">
            I've worked (and taken lead) on a number of projects that can't be shown here. However, I can provide a
            general sample of what I've done.
          </div>

          <SideLabel label="Projects" />

          <h4 class="font-serif font-bold uppercase text-orchid-300 tracking-wider">Content Import</h4>
          <div class="prose prose-lg text-white mb-10">
            <span> Service to crawl unstructured content and transform into structured JSON </span>

            <div class="mt-2 grid grid-cols-8">
              <Ts />
              <React />
              <Express />
              <Mongo />
              <Docker />
              <MaterialUi />
              <Aws />
            </div>
          </div>

          <h4 class="font-serif font-bold uppercase text-orchid-300 tracking-wider">Admin Portal</h4>
          <div class="prose prose-lg text-white mb-10">
            <span>Users + payments management service </span>

            <div class="mt-2 grid grid-cols-8">
              <Ts />
              <React />
              <Express />
              <Dynamo />
              <Docker />
              <Jest />
            </div>
          </div>

          <h4 class="font-serif font-bold uppercase text-orchid-300 tracking-wider">Front-end Redesign</h4>
          <div class="prose prose-lg text-white mb-10">
            <span> New front-end for CMS </span>

            <div class="mt-2 grid grid-cols-8">
              <Js />
              <React />
              <Express />
              <MySql />
              <Docker />
            </div>
          </div>

          <h4 class="font-serif font-bold uppercase text-orchid-300 tracking-wider">UI Framework</h4>
          <div class="prose prose-lg text-white mb-10">
            <span> UI component library </span>
            <div class="mt-2 grid grid-cols-8">
              <Js />
              <React />
            </div>
          </div>

          <!-- <div class="prose prose-lg text-white  mb-10">
            I've worked (and taken lead) on a number of projects that can't be shown here. However, I can provide a
            general description of what I've done.
          </div> -->

          <!-- <h2 class="prose text-2xl text-white block">Users</h2>
        <span class="mb-10">Typescript, Express, DynamoDB, Auth0</span>

        <h2 class="prose text-2xl text-white block">App</h2>
        <span class="mb-10">Typescript, React, Auth0</span>

        <h2 class="prose text-2xl text-white block">Analytics</h2>
        <span class="mb-10">PHP, Lumen, Google BigQuery</span>

        <h2 class="prose text-2xl text-white block">Migration Service</h2>
        <span class="mb-10">Typescript, React, Express, Auth0, MongoDB, SQS, ECS</span>

        <h2 class="prose text-2xl text-white block">Denali</h2>
        <span class="mb-10">React, Express, MySQL</span> -->
        </div>
      </div>
    </div>
  </section>
  <section class="bg-denim-300">
    <div class="flex flex-col justify-center items-center h-full relative">
      <div class="absolute z-10" style="width:500px;top: -15rem">
        <div class="transform skew-x-12 rotate-3 bg-royalblue-800 rounded-2xl shadow-2xl">
          <svg
            class="whatIDo"
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
            <g xmlns="http://www.w3.org/2000/svg" filter="url(#editing-outline)">
              <g transform="translate(71.98501300811768, 105.07999992370605)">
                <path
                  d="M33.92 0L33.92-20.22L11.33-20.22L11.33 0L5.95 0L5.95-44.67L11.33-44.67L11.33-24.96L33.92-24.96L33.92-44.67L39.30-44.67L39.30 0L33.92 0ZM63.17 0.77L63.17 0.77L63.17 0.77Q59.84 0.77 57.09-0.45L57.09-0.45L57.09-0.45Q54.34-1.66 52.38-3.94L52.38-3.94L52.38-3.94Q50.43-6.21 49.34-9.38L49.34-9.38L49.34-9.38Q48.26-12.54 48.26-16.51L48.26-16.51L48.26-16.51Q48.26-20.42 49.34-23.62L49.34-23.62L49.34-23.62Q50.43-26.82 52.38-29.09L52.38-29.09L52.38-29.09Q54.34-31.36 57.09-32.58L57.09-32.58L57.09-32.58Q59.84-33.79 63.17-33.79L63.17-33.79L63.17-33.79Q66.50-33.79 69.22-32.58L69.22-32.58L69.22-32.58Q71.94-31.36 73.92-29.09L73.92-29.09L73.92-29.09Q75.90-26.82 76.99-23.62L76.99-23.62L76.99-23.62Q78.08-20.42 78.08-16.51L78.08-16.51L78.08-16.51Q78.08-12.54 76.99-9.38L76.99-9.38L76.99-9.38Q75.90-6.21 73.92-3.94L73.92-3.94L73.92-3.94Q71.94-1.66 69.22-0.45L69.22-0.45L69.22-0.45Q66.50 0.77 63.17 0.77ZM63.17-3.78L63.17-3.78L63.17-3.78Q67.33-3.78 69.95-6.34L69.95-6.34L69.95-6.34Q72.58-8.90 72.58-14.14L72.58-14.14L72.58-18.88L72.58-18.88Q72.58-24.13 69.95-26.69L69.95-26.69L69.95-26.69Q67.33-29.25 63.17-29.25L63.17-29.25L63.17-29.25Q59.01-29.25 56.38-26.69L56.38-26.69L56.38-26.69Q53.76-24.13 53.76-18.88L53.76-18.88L53.76-14.14L53.76-14.14Q53.76-8.90 56.38-6.34L56.38-6.34L56.38-6.34Q59.01-3.78 63.17-3.78ZM86.53 0L86.53-47.36L91.65-47.36L91.65-27.65L91.90-27.65L91.90-27.65Q93.18-30.78 95.65-32.29L95.65-32.29L95.65-32.29Q98.11-33.79 101.57-33.79L101.57-33.79L101.57-33.79Q104.64-33.79 107.14-32.58L107.14-32.58L107.14-32.58Q109.63-31.36 111.39-29.12L111.39-29.12L111.39-29.12Q113.15-26.88 114.08-23.68L114.08-23.68L114.08-23.68Q115.01-20.48 115.01-16.51L115.01-16.51L115.01-16.51Q115.01-12.54 114.08-9.34L114.08-9.34L114.08-9.34Q113.15-6.14 111.39-3.90L111.39-3.90L111.39-3.90Q109.63-1.66 107.14-0.45L107.14-0.45L107.14-0.45Q104.64 0.77 101.57 0.77L101.57 0.77L101.57 0.77Q94.85 0.77 91.90-5.38L91.90-5.38L91.65-5.38L91.65 0L86.53 0ZM100.16-3.84L100.16-3.84L100.16-3.84Q104.51-3.84 107.01-6.56L107.01-6.56L107.01-6.56Q109.50-9.28 109.50-13.70L109.50-13.70L109.50-19.33L109.50-19.33Q109.50-23.74 107.01-26.46L107.01-26.46L107.01-26.46Q104.51-29.18 100.16-29.18L100.16-29.18L100.16-29.18Q98.43-29.18 96.86-28.70L96.86-28.70L96.86-28.70Q95.30-28.22 94.14-27.39L94.14-27.39L94.14-27.39Q92.99-26.56 92.32-25.38L92.32-25.38L92.32-25.38Q91.65-24.19 91.65-22.85L91.65-22.85L91.65-10.56L91.65-10.56Q91.65-8.96 92.32-7.71L92.32-7.71L92.32-7.71Q92.99-6.46 94.14-5.60L94.14-5.60L94.14-5.60Q95.30-4.74 96.86-4.29L96.86-4.29L96.86-4.29Q98.43-3.84 100.16-3.84ZM123.65 0L123.65-47.36L128.77-47.36L128.77-27.65L129.02-27.65L129.02-27.65Q130.30-30.78 132.77-32.29L132.77-32.29L132.77-32.29Q135.23-33.79 138.69-33.79L138.69-33.79L138.69-33.79Q141.76-33.79 144.26-32.58L144.26-32.58L144.26-32.58Q146.75-31.36 148.51-29.12L148.51-29.12L148.51-29.12Q150.27-26.88 151.20-23.68L151.20-23.68L151.20-23.68Q152.13-20.48 152.13-16.51L152.13-16.51L152.13-16.51Q152.13-12.54 151.20-9.34L151.20-9.34L151.20-9.34Q150.27-6.14 148.51-3.90L148.51-3.90L148.51-3.90Q146.75-1.66 144.26-0.45L144.26-0.45L144.26-0.45Q141.76 0.77 138.69 0.77L138.69 0.77L138.69 0.77Q131.97 0.77 129.02-5.38L129.02-5.38L128.77-5.38L128.77 0L123.65 0ZM137.28-3.84L137.28-3.84L137.28-3.84Q141.63-3.84 144.13-6.56L144.13-6.56L144.13-6.56Q146.62-9.28 146.62-13.70L146.62-13.70L146.62-19.33L146.62-19.33Q146.62-23.74 144.13-26.46L144.13-26.46L144.13-26.46Q141.63-29.18 137.28-29.18L137.28-29.18L137.28-29.18Q135.55-29.18 133.98-28.70L133.98-28.70L133.98-28.70Q132.42-28.22 131.26-27.39L131.26-27.39L131.26-27.39Q130.11-26.56 129.44-25.38L129.44-25.38L129.44-25.38Q128.77-24.19 128.77-22.85L128.77-22.85L128.77-10.56L128.77-10.56Q128.77-8.96 129.44-7.71L129.44-7.71L129.44-7.71Q130.11-6.46 131.26-5.60L131.26-5.60L131.26-5.60Q132.42-4.74 133.98-4.29L133.98-4.29L133.98-4.29Q135.55-3.84 137.28-3.84ZM172.80-10.56L180.80-33.02L185.86-33.02L171.07 7.68L171.07 7.68Q170.50 9.15 169.92 10.14L169.92 10.14L169.92 10.14Q169.34 11.14 168.51 11.71L168.51 11.71L168.51 11.71Q167.68 12.29 166.43 12.54L166.43 12.54L166.43 12.54Q165.18 12.80 163.39 12.80L163.39 12.80L160.77 12.80L160.77 8.32L165.95 8.32L168.45 1.28L156.10-33.02L161.22-33.02L169.15-10.56L170.69-5.18L171.01-5.18L172.80-10.56ZM220.16 0L214.21 0L203.33-44.67L209.02-44.67L213.82-23.17L217.54-6.46L217.66-6.46L221.82-23.17L227.46-44.67L233.60-44.67L239.04-23.17L243.20-6.53L243.39-6.53L247.23-23.17L252.29-44.67L257.79-44.67L246.34 0L240.38 0L234.56-22.27L230.46-38.66L230.34-38.66L226.11-22.27L220.16 0ZM276.03 0.77L276.03 0.77L276.03 0.77Q272.70 0.77 269.95-0.45L269.95-0.45L269.95-0.45Q267.20-1.66 265.25-3.94L265.25-3.94L265.25-3.94Q263.30-6.21 262.21-9.38L262.21-9.38L262.21-9.38Q261.12-12.54 261.12-16.51L261.12-16.51L261.12-16.51Q261.12-20.42 262.21-23.62L262.21-23.62L262.21-23.62Q263.30-26.82 265.25-29.09L265.25-29.09L265.25-29.09Q267.20-31.36 269.95-32.58L269.95-32.58L269.95-32.58Q272.70-33.79 276.03-33.79L276.03-33.79L276.03-33.79Q279.36-33.79 282.08-32.58L282.08-32.58L282.08-32.58Q284.80-31.36 286.78-29.09L286.78-29.09L286.78-29.09Q288.77-26.82 289.86-23.62L289.86-23.62L289.86-23.62Q290.94-20.42 290.94-16.51L290.94-16.51L290.94-16.51Q290.94-12.54 289.86-9.38L289.86-9.38L289.86-9.38Q288.77-6.21 286.78-3.94L286.78-3.94L286.78-3.94Q284.80-1.66 282.08-0.45L282.08-0.45L282.08-0.45Q279.36 0.77 276.03 0.77ZM276.03-3.78L276.03-3.78L276.03-3.78Q280.19-3.78 282.82-6.34L282.82-6.34L282.82-6.34Q285.44-8.90 285.44-14.14L285.44-14.14L285.44-18.88L285.44-18.88Q285.44-24.13 282.82-26.69L282.82-26.69L282.82-26.69Q280.19-29.25 276.03-29.25L276.03-29.25L276.03-29.25Q271.87-29.25 269.25-26.69L269.25-26.69L269.25-26.69Q266.62-24.13 266.62-18.88L266.62-18.88L266.62-14.14L266.62-14.14Q266.62-8.90 269.25-6.34L269.25-6.34L269.25-6.34Q271.87-3.78 276.03-3.78ZM304.51 0L299.39 0L299.39-33.02L304.51-33.02L304.51-26.94L304.83-26.94L304.83-26.94Q305.73-29.31 308.03-31.17L308.03-31.17L308.03-31.17Q310.34-33.02 314.37-33.02L314.37-33.02L316.35-33.02L316.35-27.90L313.34-27.90L313.34-27.90Q309.18-27.90 306.85-26.34L306.85-26.34L306.85-26.34Q304.51-24.77 304.51-22.40L304.51-22.40L304.51 0ZM322.88 0L322.88-47.36L328-47.36L328-17.34L328.26-17.34L333.31-22.98L342.66-33.02L348.86-33.02L336.64-19.97L350.08 0L343.87 0L332.93-16.83L328-11.78L328 0L322.88 0Z"
                  fill="url(#editing-outline-gradient)" />
              </g>
            </g>
          </svg>
        </div>
      </div>
      <div class="relative bottom-96 w-full p-40 pt-80 pb-68 flex flex-col items-center justify-center">dfgdfgdf</div>
    </div>
  </section>
</div>
