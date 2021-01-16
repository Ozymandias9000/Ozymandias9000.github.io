<style lang="scss">
  .scrollContainer {
    font-family: 'IBM Plex Sans';
    height: 100vh;

    overflow-y: scroll;
  }
</style>

<script>
  import ContactForm from './ContactForm.svelte'
  import ContactMe from './ContactMe.svelte'
  import Footer from './Footer.svelte'

  import Codepen from './icons/Codepen.svelte'
  import Github from './icons/Github.svelte'

  import IntersectionObs from './IntersectionObs.svelte'

  import TopSvgContainer from './TopSvgContainer.svelte'
  import ProfPic from './ProfPic.svelte'
  import Switch from './Switch.svelte'
  import WhatIDo from './WhatIDo.svelte'
  import WhatIDoContent from './WhatIDoContent.svelte'

  let checked = true
  let scrollContainer
  let projectsAnchor
  let windowWidth

  $: mobile = windowWidth < 768
  //   $: tablet = windowWidth < 1000 && windowWidth > 768
  $: desktop = windowWidth >= 1000
  //   $: {
  //     console.log(windowWidth)
  //     console.log(mobile)
  //   }
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div class="scrollContainer transition-colors duration-2000 overflow-x-hidden" bind:this={scrollContainer}>
  <section class="h-1/2">
    <TopSvgContainer {checked} />

    <div class="container relative h-screen">
      <div class="fixed top-2 right-4 z-50">
        <Codepen {checked} {mobile} />
        <Github {checked} {mobile} />
        {#if desktop}
          <button
            on:click={() => projectsAnchor.scrollIntoView({ behavior: 'smooth' })}
            class="prose pr-8 cursor-pointer transform transition-colors duration-2000 {checked
              ? 'text-white hover:text-gray-400'
              : ''}">What I Do</button
          >
          <button
            on:click={() =>
              scrollContainer.scrollTo({ top: scrollContainer.scrollHeight, left: 0, behavior: 'smooth' })}
            class="prose pr-8 cursor-pointer transform transition-colors duration-2000 {checked
              ? 'text-white hover:text-gray-400'
              : ''}">Contact Me</button
          >
        {/if}
      </div>
      <div class="fixed top-2 left-4 z-50">
        <Switch text={!mobile ? (checked ? 'Night' : 'Day') : ''} id="toggle" bind:checked />
      </div>
      <div class="flex flex-col justify-center items-center h-3/5">
        <IntersectionObs let:intersecting top={0}>
          <ProfPic />

          {#if !intersecting}
            <div
              class="fixed top-0 right-0 transform transition-colors duration-2000 {checked
                ? 'bg-pacific-700'
                : 'bg-pacific-100'}  opacity-95 h-12 w-full pointer-events-none z-40"
            />
            <h1
              class="prose font-serif {mobile ? 'text-md' : 'text-2xl'} fixed {checked
                ? 'text-white'
                : ''} tracking-wide {mobile ? 'top-2' : 'top-1'} z-50"
            >~ nick murphy ~</h1>
          {/if}
        </IntersectionObs>
        <h1
          class="prose font-serif {mobile ? 'text-md' : 'text-2xl'} sticky {checked
            ? 'text-white'
            : ''} tracking-wide{mobile ? 'top-2' : 'top-1'}"
        >~ nick murphy ~</h1>

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
    </div>
  </section>
  <section class="relative">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
      ><path
        class="transition-colors duration-2000"
        fill={checked ? '#2e635b' : '#3ba08d'}
        fill-opacity="1"
        d="M0,96L17.1,117.3C34.3,139,69,181,103,202.7C137.1,224,171,224,206,192C240,160,274,96,309,85.3C342.9,75,377,117,411,117.3C445.7,117,480,75,514,64C548.6,53,583,75,617,96C651.4,117,686,139,720,149.3C754.3,160,789,160,823,149.3C857.1,139,891,117,926,128C960,139,994,181,1029,176C1062.9,171,1097,117,1131,106.7C1165.7,96,1200,128,1234,133.3C1268.6,139,1303,117,1337,117.3C1371.4,117,1406,139,1423,149.3L1440,160L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"
      /></svg
    >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" class="absolute {mobile ? 'top-4' : 'top-7'}"
      ><path
        fill="#a2d9ff"
        fill-opacity="1"
        d="M0,96L17.1,117.3C34.3,139,69,181,103,202.7C137.1,224,171,224,206,192C240,160,274,96,309,85.3C342.9,75,377,117,411,117.3C445.7,117,480,75,514,64C548.6,53,583,75,617,96C651.4,117,686,139,720,149.3C754.3,160,789,160,823,149.3C857.1,139,891,117,926,128C960,139,994,181,1029,176C1062.9,171,1097,117,1131,106.7C1165.7,96,1200,128,1234,133.3C1268.6,139,1303,117,1337,117.3C1371.4,117,1406,139,1423,149.3L1440,160L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"
      /></svg
    >
  </section>

  <section class="bg-denim-300" bind:this={projectsAnchor}>
    <div class="flex flex-col justify-center items-center h-full relative">
      <WhatIDo {mobile} />

      <WhatIDoContent {checked} />
    </div>
  </section>

  <section class="bg-denim-300" style="height:400px">
    <div class="flex flex-col justify-center items-center h-full relative">
      <ContactMe {mobile} />

      <ContactForm />
    </div>
  </section>

  <Footer />
</div>
