const TWENTYTWENTY_URL = 'https://vercel-test-2020.vercel.app';
const TWENTYTWENTYONE_URL = 'https://vercel-test-2021.vercel.app';

module.exports = {
  async rewrites() {
    return [
      {
        source: '/2021/:path*',
        destination: `${TWENTYTWENTY_URL}/2020/:path*`,
      },
      {
        source: '/2021',
        destination: `${TWENTYTWENTYONE_URL}/2021/:path*`,
      },
    ];
  },
};
