/** @type {import("next").NextConfig} */
module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: securityHeaders,
            },
        ];
    },
};

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self' 'unsafe-eval' 'unsafe-inline' 'nonce-qU/2pEbiqegEBqrNvN5zJQ==';
  img-src * 'self' blob: data:;
  style-src 'self' 'unsafe-inline';
  font-src 'self';
  base-uri 'none';
`;

const securityHeaders = [
    {
        key: "X-DNS-Prefetch-Control",
        value: "on",
    },
    {
        key: "Strict-Transport-Security",
        value: "max-age=63072000; includeSubDomains; preload",
    },
    {
        key: "X-XSS-Protection",
        value: "1; mode=block",
    },
    {
        key: "X-Frame-Options",
        value: "DENY",
    },
    {
        key: "Permissions-Policy",
        value: "camera=(), microphone=(), geolocation=()",
    },
    {
        key: "X-Content-Type-Options",
        value: "nosniff",
    },
    {
        key: "Referrer-Policy",
        value: "strict-origin-when-cross-origin",
    },
    {
        key: "Content-Security-Policy",
        value: ContentSecurityPolicy.replace(/\n/g, ""),
    },
];
