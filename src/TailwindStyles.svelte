<style global type="scss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @layer base {
    :global(:root) {
      --color-dark: #03010a;
      --color-grey: #ded;

      color: var(--color-dark);
      min-height: 100vh;
      margin: 0;
      background: #fdfdf0;
      overflow: hidden;
    }

    a,
    button {
      @apply text-gray-500;
      @apply transition-colors;
      @apply duration-150;

      &:hover {
        @apply text-gray-800;
      }
    }

    h1,
    span,
    select {
      transition: color 2s, background 2s;
    }
  }
</style>
