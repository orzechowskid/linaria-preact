export default (config, _env, helpers) => {
  const { rule } = helpers.getLoadersByName(config, 'babel-loader')[0];
  const babelConfig = rule.options;

  babelConfig.presets.push('@babel/preset-typescript', '@babel/preset-react', '@linaria');

  rule.loader = undefined;
  rule.use = [{
    loader: 'babel-loader',
    options: babelConfig
  }, {
    loader: '@linaria/webpack-loader',
    options: {
      babelOptions: babelConfig
    }
  }];
};
