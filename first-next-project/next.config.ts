import type { NextConfig } from 'next';
import { initializeDatabase } from './src/database/db';

initializeDatabase();

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

export default nextConfig;
