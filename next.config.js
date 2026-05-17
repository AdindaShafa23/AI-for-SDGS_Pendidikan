/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.detik.com' },
      { protocol: 'https', hostname: '**.kompas.com' },
      { protocol: 'https', hostname: '**.cnnindonesia.com' },
      { protocol: 'https', hostname: '**.cdnimage.com' },
      { protocol: 'https', hostname: 'cdn2.tstatic.net' },
      { protocol: 'https', hostname: 'akcdn.detik.net.id' },
      { protocol: 'https', hostname: 'asset.kompas.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};

module.exports = nextConfig;
