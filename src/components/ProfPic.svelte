<style lang="scss">
  @keyframes wiggle {
    0% {
      transform: scale(1, 1) translateY(0);
    }
    10% {
      transform: scale(1.02, 0.98) translateY(0);
    }
    30% {
      transform: scale(0.95, 1.05) translateY(-30px);
    }
    50% {
      transform: scale(1.02, 0.98) translateY(0);
    }
    57% {
      transform: scale(1, 1) translateY(-7px);
    }
    64% {
      transform: scale(1, 1) translateY(0);
    }
    100% {
      transform: scale(1, 1) translateY(0);
    }
  }

  .profPic {
    transition: all 0.8s;
    animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
    animation: wiggle 0.7s infinite;
    animation-play-state: paused;

    &:hover {
      animation-play-state: running;
    }
  }
</style>

<img class="profPic rounded-full mb-2 shadow-md" src="assets/prof.jpg" alt="My face" height="150" width="150" />
