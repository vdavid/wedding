/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true,
        remotePatterns: []
    },
    // Prevent warning about fetchPriority prop
    future: {
        strictPostcssConfiguration: true,
    },
    // This custom transpilePackages setting helps with compatibility
    transpilePackages: ['next-themes']
}

module.exports = nextConfig 