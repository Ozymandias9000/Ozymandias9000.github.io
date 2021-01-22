<style lang="scss">
  .clip-odd {
    clip-path: polygon(0 0, 100% 20%, 100% 80%, 0 100%);

    @media only screen and (max-width: 1000px) {
      clip-path: polygon(0 0, 100% 7%, 100% 86%, 0 95%);
    }
  }

  span {
    transition-duration: 2s;
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

  import SideLabel from './SideLabel.svelte'

  export let checked
</script>

<div
  class="transition-colors duration-2000 {checked
    ? 'bg-pacific-800'
    : 'bg-pacific-100'} relative w-full p-40 pt-68 pb-68 clip-odd flex flex-col items-center justify-center"
>
  <div class="md:pr-44 md:pl-44 p-0 md:w-auto w-56">
    <div class="mb-10 md:mt-0 mt-8">
      <span class="prose prose-lg {checked ? 'text-white' : ''}  "
        >Currently at
        <a href="https://www.minutemedia.com/" target="_blank">Minute Media</a>.</span
      >
    </div>

    <div class="prose prose-lg font-bold {checked ? 'text-white' : ''}  mb-2">I solve problems.</div>

    <SideLabel {checked} label="About Me" />

    <div class="prose prose-lg font-bold {checked ? 'text-white' : ''}  mb-2">
      I love working in enthusiastic, self-motivated teams.
    </div>

    <div class="prose prose-lg font-bold {checked ? 'text-white' : ''}  mb-10">
      And I write performant, testable, readable code.
    </div>

    <div class="prose prose-lg {checked ? 'text-white' : ''}  mb-16">
      I've worked (and taken lead) on a number of projects that can't be shown here. However, I can provide a general
      sample of what I've done.
    </div>

    <SideLabel {checked} label="Projects" down={6} />

    <h4 class="font-serif font-bold uppercase text-orchid-300 tracking-wider">Content Import</h4>
    <div class="prose prose-lg {checked ? 'text-white' : ''}  mb-10">
      <span> Service to crawl unstructured content and transform into structured JSON </span>

      <div class="mt-4 grid grid-cols-4 md:grid-cols-8 gap-8">
        <Ts />
        <React />
        <Express {checked} />
        <Mongo />
        <Docker />
        <MaterialUi />
        <Aws {checked} />
      </div>
    </div>

    <h4 class="font-serif font-bold uppercase text-orchid-300 tracking-wider">Admin Portal</h4>
    <div class="prose prose-lg {checked ? 'text-white' : ''}  mb-10">
      <span>Users + payments management service </span>

      <div class="mt-4 grid grid-cols-4 md:grid-cols-8 gap-8">
        <Ts />
        <React />
        <Express {checked} />
        <Dynamo />
        <Docker />
        <Jest />
      </div>
    </div>

    <h4 class="font-serif font-bold uppercase text-orchid-300 tracking-wider">Front-end Redesign</h4>
    <div class="prose prose-lg {checked ? 'text-white' : ''}  mb-10">
      <span> New front-end for CMS </span>

      <div class="mt-4 grid grid-cols-4 md:grid-cols-8 gap-8">
        <Js />
        <React />
        <Express {checked} />
        <MySql {checked} />
        <Docker />
      </div>
    </div>

    <h4 class="font-serif font-bold uppercase text-orchid-300 tracking-wider">UI Framework</h4>
    <div class="prose prose-lg {checked ? 'text-white' : ''}  mb-16">
      <span> UI component library </span>
      <div class="mt-4 grid grid-cols-4 md:grid-cols-8 gap-8">
        <Js />
        <React />
      </div>
    </div>

    <SideLabel {checked} label="Other Interests" down={26} />
    <div class="prose prose-lg {checked ? 'text-white' : ''}  mb-20">
      <span> Things I'm keeping an eye on. </span>
      <ul>
        <li>Worked a little in Go. Interested in learning more.</li>
        <li>Terraform</li>
        <li>Svelte + Snowpack</li>
        <li>Deno</li>
      </ul>
    </div>
  </div>
</div>
