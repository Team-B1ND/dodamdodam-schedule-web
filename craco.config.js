const webpack = require('webpack'); // webpack을 가져옵니다

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),
        buffer: require.resolve('buffer/'),
        util: require.resolve('util/'),
        vm: require.resolve('vm-browserify'),
        process: require.resolve('process/browser'),
      };

      // webpack에 'process'를 제공하는 플러그인 추가
      webpackConfig.plugins = [
        ...(webpackConfig.plugins || []),
        new webpack.ProvidePlugin({
          process: 'process/browser',
        }),
      ];

      return webpackConfig;
    },
  },
};
