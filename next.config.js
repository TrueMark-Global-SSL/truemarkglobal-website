/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false,


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
    const csp = [
      "default-src 'self'",
      // Next.js requires unsafe-inline for hydration scripts; unsafe-eval needed in dev
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      // Tailwind & component inline styles
      "style-src 'self' 'unsafe-inline'",
      // Approved image origins (mirrors remotePatterns above)
      "img-src 'self' data: blob: https://res.cloudinary.com https://bqzlcpajeawshaidgnta.storage.supabase.co https://mzlhcwnrvtolqszzonsb.storage.supabase.co https://cdn.sanity.io https://truemarkglobalss.com",
      // Fonts are self-hosted via CSS
      "font-src 'self' data:",
      // API calls go to our backend only
      "connect-src 'self' https://truemark-backend.onrender.com",
      // No iframes, plugins, or base-tag hijacking
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      // Forms must post back to this origin only
      "form-action 'self'",
      // All content must be served over HTTPS
      "upgrade-insecure-requests",
    ].join("; ");

    return [
      {
        source: '/(.*)',
        headers: [
          // Prevent MIME-type sniffing
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Block clickjacking / iframe embedding by other sites
          { key: 'X-Frame-Options', value: 'DENY' },
          // Force HTTPS for 1 year, including subdomains; preload enables browser preload-list submission
          { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
          // Referrer only sent to same origin on cross-origin requests
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          // Restrict access to sensitive browser APIs not needed by this site
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=(), payment=()' },
          // Opt out of Google's FLoC/Topics ad tracking
          { key: 'X-Permitted-Cross-Domain-Policies', value: 'none' },
          // Content Security Policy — defence-in-depth against XSS and data exfiltration
          { key: 'Content-Security-Policy', value: csp },
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