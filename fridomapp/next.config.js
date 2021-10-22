module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
      secret: 'Esto es un secreto'
  },
  publicRuntimeConfig: {
      apiUrl: process.env.NODE_ENV === 'development'
          ? 'http://localhost:3000/api' // development api
          : 'http://localhost:3000/api' // production api
  }
}
