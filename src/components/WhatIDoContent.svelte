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
    : 'bg-white'} relative w-full p-40 pt-68 pb-68 clip-odd flex flex-col items-center justify-center"
>
  <div class="md:pr-44 md:pl-44 p-0 md:w-auto w-56">
    <div class="mb-10 md:mt-0 mt-8">
      <span class="prose prose-lg {checked ? 'text-white' : ''}  "
        >Currently at
        <a href="https://www.bolt.com/" target="_blank">Bolt</a>.</span
      >
    </div>

    <div class="prose prose-lg font-bold {checked ? 'text-white' : ''}  mb-2">I solve problems.</div>

    <SideLabel {checked} label="About Me" />

    <div class="prose prose-lg font-bold {checked ? 'text-white' : ''}  mb-2">
      I love working in enthusiastic, self-motivated teams.
    </div>

    <div class="prose prose-lg font-bold {checked ? 'text-white' : ''}  mb-10">
      And I write performant, testable, human-readable code.
    </div>

    <div class="prose prose-lg {checked ? 'text-white' : ''}  mb-16">
      I've worked on (and led) a number of projects that can't be shown here. Here's a sample.
    </div>

    <SideLabel {checked} label="Projects" down={6} />

    <h4 class="font-serif font-bold uppercase text-orchid-300 tracking-wider">Content Importer</h4>
    <div class="prose prose-lg {checked ? 'text-white' : ''}  mb-10">
      <span>
        Crawl unstructured content using fleet of workers (ECS/EC2). Transform into structured JSON for consumption by
        custom CMS. Monitored and configured in an admin portal.
      </span>

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

    <h4 class="font-serif font-bold uppercase text-orchid-300 tracking-wider">Contributor Management Admin Portal</h4>
    <div class="prose prose-lg {checked ? 'text-white' : ''}  mb-10">
      <span>User + payments management service with custom RBAC auth</span>

      <div class="mt-4 grid grid-cols-4 md:grid-cols-8 gap-8">
        <Ts />
        <React />
        <Express {checked} />
        <Dynamo />
        <Docker />
        <Jest />
      </div>
    </div>

    <h4 class="font-serif font-bold uppercase text-orchid-300 tracking-wider">Application State Refactor</h4>
    <div class="prose prose-lg {checked ? 'text-white' : ''}  mb-10">
      <span> Proposed, designed, and led large-scale frontend state refactor project for checkout product </span>

      <div class="mt-4 grid grid-cols-4 md:grid-cols-8 gap-8">
        <Ts />
        <React />
        <Jest />
      </div>
    </div>

    <h4 class="font-serif font-bold uppercase text-orchid-300 tracking-wider">Front-end Redesign</h4>
    <div class="prose prose-lg {checked ? 'text-white' : ''}  mb-10">
      <span> New frontend for CMS </span>

      <div class="mt-4 grid grid-cols-4 md:grid-cols-8 gap-8">
        <Js />
        <React />
        <Express {checked} />
        <MySql {checked} />
        <Docker />
      </div>
    </div>

    <h4 class="font-serif font-bold uppercase text-orchid-300 tracking-wider">UI Component Libraries</h4>
    <div class="prose prose-lg {checked ? 'text-white' : ''}  mb-16">
      <span> Worked on several component libraries </span>
      <div class="mt-4 grid grid-cols-4 md:grid-cols-8 gap-8">
        <Ts />
        <Js />
        <React />
        <Jest />
      </div>
    </div>

    <SideLabel {checked} label="Other Interests" down={26} />
    <div class="prose prose-lg {checked ? 'text-white' : ''}  mb-20">
      <span> I'd be interested in working more with: </span>
      <ul>
        <li>Rust</li>
        <li>Terraform</li>
        <li>Svelte</li>
        <li>Bun</li>
      </ul>
    </div>
  </div>
</div>
