/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    app_env: 'staging', // staging , preprod , prod
  },
  // async redirects() {
  //   return [
  //     {
  //       source: '/about',
  //       destination: '/about',
  //       permanent: true,
  //     },
  //   ]
  // },
}

module.exports = nextConfig
