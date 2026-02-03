/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Keep viem externalized, but bundle agentkit to avoid ESM/CJS require issues on Vercel
  serverExternalPackages: ["viem", "@noble/hashes"],
  transpilePackages: [
    "@coinbase/agentkit",
    "@coinbase/agentkit-langchain",
    "@coinbase/agentkit-vercel-ai-sdk",
    "@coinbase/cdp-sdk",
  ],
};

export default nextConfig;
