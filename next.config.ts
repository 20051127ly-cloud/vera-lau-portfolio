import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 不再开放远程图片域名白名单：全站仅使用本地 /avatar.jpeg，
  // 通配 hostname '*' 会让服务器代理任意外部 URL（SSRF 与带宽滥用风险）
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
};

export default nextConfig;
