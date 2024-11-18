module.exports = {
  eslint: {
    enable: false,
  },
  webpack: {
    resolve: {
      fallback: {
        stream: require.resolve('stream-browserify'),
      },
    },
  },
};
