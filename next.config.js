/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/camelcase, consistent-return, no-console */
const path = require('path');
const withOffline = require('next-offline');

module.exports = withOffline({
  workboxOpts: {
    swDest: process.env.NEXT_EXPORT ? 'service-worker.js' : 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'offlineCache',
          expiration: {
            maxEntries: 200
          }
        }
      }
    ]
  },
  webpack: (config) => {
    config.resolve.alias['@utils'] = path.resolve(__dirname, 'universal/utils');
    config.resolve.alias['@screens'] = path.resolve(__dirname, 'universal/screens');
    config.resolve.alias['@components'] = path.resolve(__dirname, 'universal/components');

    return config;
  }
});
