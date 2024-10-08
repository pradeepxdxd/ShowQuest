/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'in.bmscdn.com'
            },
            {
                protocol: 'https',
                hostname: 'assets-in.bmscdn.com'
            }
        ]
    },
};

export default nextConfig;
