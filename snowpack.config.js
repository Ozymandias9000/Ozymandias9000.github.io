module.exports = {
  extends: '@snowpack/app-scripts-svelte',
  buildOptions: {
    out: './docs',
  },
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2018',
  },
}
