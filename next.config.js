/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/camelcase, consistent-return, no-console */
const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.alias['@utils'] = path.resolve(__dirname, 'universal/utils');
    config.resolve.alias['@screens'] = path.resolve(__dirname, 'universal/screens');
    config.resolve.alias['@components'] = path.resolve(__dirname, 'universal/components');

    return config;
  }
};
