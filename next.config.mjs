/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/psandrea',
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
