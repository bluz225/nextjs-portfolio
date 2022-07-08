/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:[
      // no https://
      // an array of white listed domains
      'placekitten.com'
    ]
  }
}

module.exports = nextConfig
