module.exports = function override (config, env) {
  return {
    ...config,
    resolve: {
      // Allow referencing without explicit file extension
      extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
  }
}
