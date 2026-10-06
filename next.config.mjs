/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // AVIF first, WebP fallback — negotiated per-browser via the Accept header.
    formats: ["image/avif", "image/webp"],
    // Optimised variants never change for a given source URL; cache for a year.
    minimumCacheTTL: 31536000,
  },
  async rewrites() {
    return {
      // Browsers that can't decode AVIF don't advertise image/avif in their Accept header.
      // Serve them the WebP twin (same path, .webp) for any directly-loaded .avif —
      // raw <img>, CSS backgrounds, etc. Every public/**/*.avif has a .webp sibling.
      beforeFiles: [
        {
          source: "/:path*.avif",
          missing: [{ type: "header", key: "accept", value: ".*image/avif.*" }],
          destination: "/:path*.webp",
        },
      ],
    };
  },
  async headers() {
    // /public filenames aren't content-hashed, so keep this short enough that a replaced file shows up.
    const cache = [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }];
    return [
      // Static assets from /public that are served directly (CSS backgrounds, SVGs, fonts).
      { source: "/:path*.(avif|webp|svg|woff2|ttf)", headers: cache },
      // The .avif URL returns AVIF or WebP depending on the browser, so caches must key on Accept.
      { source: "/:path*.avif", headers: [{ key: "Vary", value: "Accept" }] },
    ];
  },
};

export default nextConfig;
