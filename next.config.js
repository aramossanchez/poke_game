//next.config.js
module.exports = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "" : undefined,
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/PokeAPI/sprites/master/sprites/pokemon/**',
      },
    ],
  },
  reactStrictMode: false,
}