/** @type {import('next').NextConfig} */
const nextConfig = {
  // experimental: {
  //   serverActions: true,
  // },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
      },
    ],
  },
  // webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
  //   // Exclude HTML files from processing
  //   config.module.rules.push({
  //     test: /\.html$/,
  //     exclude: /@mapbox\/node-pre-gyp/,
  //     loader: 'ignore-loader',
  //   });

  //   // Return the modified configuration
  //   return config;
  // },



};

export default nextConfig;


