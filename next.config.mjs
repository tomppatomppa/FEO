/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'euphoriafilm.fi',
            port: '',
            pathname: '/account123/**',
          },
        ],
      },
};

export default nextConfig;
