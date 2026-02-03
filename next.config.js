/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Avoid bundling agentkit/viem into the server build (fixes noble/sha3 crash)
  serverExternalPackages: [
    "@coinbase/agentkit",
    "@coinbase/agentkit-langchain",
    "@coinbase/agentkit-vercel-ai-sdk",
    "viem",
    "@noble/hashes",
  ],
};

export default nextConfig;
