


// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
//   reactCompiler: true,
//   images: {
//     // Blog featured images are hand-made SVG illustrations under /public/blog —
//     // next/image blocks SVG by default (XSS risk from untrusted SVGs), but these
//     // are all first-party files we created ourselves, so it's safe to allow here.
//     dangerouslyAllowSVG: true,
//     contentDispositionType: 'attachment',
//     contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
//   },
// };

// export default nextConfig;












import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    // Blog featured images are hand-made SVG illustrations under /public/blog —
    // next/image blocks SVG by default (XSS risk from untrusted SVGs), but these
    // are all first-party files we created ourselves, so it's safe to allow here.
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Security headers flagged by Lighthouse Best Practices. Deliberately NOT
  // adding a Content-Security-Policy here — a wrong CSP can silently block
  // inline styles/scripts across the whole site with no visible build error,
  // and this project just recovered from one bad production deploy. A CSP
  // needs to be built and tested carefully on its own, not shipped blind.
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
        ],
      },
    ]
  },
};

export default nextConfig;