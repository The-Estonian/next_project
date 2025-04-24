import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        domains: ['picsum.photos'], // Add picsum.photos here
    },
    experimental: {
        serverComponentsExternalPackages: ['knex'],
    },
};

export default nextConfig;
