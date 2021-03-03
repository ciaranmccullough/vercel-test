const TWENTYTWENTY_URL = 'https://with-zones-blog.vercel.app';

module.exports = {
  rewrites() {
    return [
      {
        source: '/2020',
        destination: `${TWENTYTWENTY_URL}/2020`,
      },
    ];
  },
};
