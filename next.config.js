/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "fastly.picsum.photos",
            },
            {
                protocol: "https",
                hostname: "www.webfx.com",
            },
            {
                protocol: "https",
                hostname: "placehold.co",
            },
        ],
    }
}

module.exports = nextConfig
