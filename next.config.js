module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/repos',
        permanent: true,
      },
    ];
  },
};
