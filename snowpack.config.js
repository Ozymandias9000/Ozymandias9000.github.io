module.exports = {
  extends: '@snowpack/app-scripts-svelte',
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  },
}
