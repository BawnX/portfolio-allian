/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { dev, isServer }) => {
        // Exclude *.spec.ts(x) files from being compiled by Next.js
        config.module.rules.push(
            {
                test: /\.spec\.tsx?$/,
                use: 'ignore-loader',
            },
            {
                test: /\.test\.tsx?$/,
                use: 'ignore-loader',
            }
        );
    
        return config;
      },
};

export default nextConfig;
