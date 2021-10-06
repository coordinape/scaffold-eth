module.exports = function(api) {
  api.cache(true);

  const presets = ['@babel/preset-react'];
  const plugins = [];

  const babelrcRoots = ['.', './lib/*'];

  return {
    presets,
    plugins,
    babelrcRoots
  };
};
