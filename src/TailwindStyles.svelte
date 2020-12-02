<style global type='scss'>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @layer base {
    a {
      @apply text-gray-500;

      &:hover {
        @apply text-gray-800;
      }
    }
  }
</style>
