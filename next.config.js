const webpack = require('webpack');
const withSass = require('@zeit/next-sass');
const withSourceMaps = require('@zeit/next-source-maps')({
  devtool: 'hidden-source-map',
  terserOptions: {
    mangle: true,
  },
});

const sourceMapDevToolOptions = {
  append: '\n//# sourceMappingURL=https://example.com/sourcemap/[url]'
}

module.exports = () => {
  return withSourceMaps(
    withSass({
      devtool: 'hidden-source-map',
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]___[hash:base64:5]'
      },

      webpack(config) {

        config.plugins = [
          ...config.plugins,

          // comment below back in to see error
          // new webpack.SourceMapDevToolPlugin(sourceMapDevToolOptions)
        ]

        return config;
      },
    }),
  );
};
