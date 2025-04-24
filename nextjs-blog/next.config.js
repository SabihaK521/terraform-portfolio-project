const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Merge custom aliases with existing ones
    config.resolve.alias = {
      ...config.resolve.alias, // Preserve existing aliases
      '@components': path.resolve(__dirname, 'components'), // Example alias
    };

    return config;
  },
};

module.exports = nextConfig;