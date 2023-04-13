module.exports = function override(config, env) {
  config.output = {
    ...config.output,
    filename: "static/js/[name].js",
    chunkFilename: "static/js/[name].chunk.js",
  }
  return config;
};