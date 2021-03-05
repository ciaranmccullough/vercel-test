const TWENTYTWENTY_URL = 'https://vercel-test-2020.vercel.app';
const TWENTYTWENTYONE_URL = 'https://vercel-test-2021.vercel.app';

module.exports = {
  rewrites() {
    return [
      {
        source: '/2020',
        destination: `${TWENTYTWENTY_URL}/2020`,
      },
      {
        source: '/2021',
        destination: `${TWENTYTWENTYONE_URL}/2021`,
      },
    ];
  },
};
