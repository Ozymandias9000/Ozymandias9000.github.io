module.exports = {
  extends: '@snowpack/app-scripts-svelte',
  buildOptions: {
    out: './docs',
  },
  optimize: {
    bundle: true,
    minify: true,
    treeshake: true,
    target: 'es2018',
  },
}
