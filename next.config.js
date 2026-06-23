/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,


  // ✅ Modern Next.js 15 Image Optimization
  images: {
    // Note: 'domains' is deprecated in favor of 'remotePatterns' for better security
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "bqzlcpajeawshaidgnta.storage.supabase.co",
      },
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
      {
        protocol: "https",
        hostname: "truemarkglobalss.com",
      },
      // ✅ Added support for local development images
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: 'https',
        hostname: 'mzlhcwnrvtolqszzonsb.storage.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },

  // Security Headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // Prevent MIME-type sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Block clickjacking / iframe embedding by other sites
          { key: 'X-Frame-Options', value: 'DENY' },
          // Force HTTPS for 1 year, including subdomains (applied by browser on subsequent visits)
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
          // Referrer only sent to same origin on cross-origin requests
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Restrict access to sensitive browser APIs not needed by this site
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=()' },
          // Opt out of Google's FLoC/Topics ad tracking
          { key: 'X-Permitted-Cross-Domain-Policies', value: 'none' },
        ],
      },
    ];
  },

  // ✅ SVG Handling
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },

};

module.exports = nextConfig;