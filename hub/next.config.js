const TWENTYTWENTY_URL = 'https://with-zones-blog.vercel.app';
const TWENTYTWENTYONE_URL = 'https://with-zones-blog.vercel.app';

module.exports = {
  rewrites() {
    return [
      {
        source: '/2020',
        destination: `${TWENTYTWENTY_URL}/2020`,
      },
      {
        source: '/2020',
        destination: `${TWENTYTWENTYONE_URL}/2021`,
      },
    ];
  },
};
