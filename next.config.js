/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: []
    },
    // This custom transpilePackages setting helps with compatibility
    transpilePackages: ['next-themes']
}

module.exports = nextConfig 