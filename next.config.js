const withPWA = require("next-pwa");

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  env: {
    GET_POKEMON: process.env.REACT_APP_GET_POKEMON
  }
})
