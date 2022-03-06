export default (config) => {
  const {
    options,
    ...babelLoaderRule
  } = config.module.rules[0];
  options.presets.push('@babel/preset-typescript', '@babel/preset-react', '@linaria');
  config.module.rules[0] = {
    ...babelLoaderRule,
    loader: undefined,
    use: [{
      loader: 'babel-loader',
      options
    }, {
      loader: '@linaria/webpack-loader',
      options: {
        babelOptions: options
      }
    }]
  };
};
