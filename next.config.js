const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    scope: '/',
    runtimeCaching,
    disable: process.env.NODE_ENV === 'development',
  },
  images: {
    domains: ['raw.githubusercontent.com'],
  },
  env: {
    GET_POKEMON: process.env.REACT_APP_GET_POKEMON
  }
})
