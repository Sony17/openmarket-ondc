import type { NextConfig } from "next";

// openidea.co.in is served by the Ecosyz project, which forwards the paths
// this app owns (/shop, /ondc, /templates, ...) here. Both apps load their
// bundles from /_next, so this one moves its bundles and image optimizer
// under /wt-assets — Ecosyz forwards that prefix too. Requests that reach this
// deployment directly (tenant subdomains, *.vercel.app) work the same way.
export const ASSET_PREFIX = "/wt-assets";

const nextConfig: NextConfig = {
  assetPrefix: ASSET_PREFIX,
  images: {
    path: `${ASSET_PREFIX}/_next/image`,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async rewrites() {
    return {
      // The optimizer itself only answers at /_next/image; map the prefixed
      // path (see images.path) back onto it before anything else matches.
      beforeFiles: [
        {
          source: `${ASSET_PREFIX}/_next/image`,
          destination: "/_next/image",
        },
      ],
      afterFiles: [
        {
          source: "/ondc/:path*",
          destination: "/api/ondc/:path*",
        },
        // ONDC registry fetches /ondc-site-verification.html to verify domain
        // ownership; map it to the dynamic route that signs the request_id.
        // (Next.js app router doesn't accept ".html" in segment names cleanly,
        // so we host it without the suffix and rewrite the URL.)
        {
          source: "/ondc-site-verification.html",
          destination: "/ondc-site-verification",
        },
        {
          source: "/kalptaru-residency-sample",
          destination: "/kalptaru-residency-sample/index.html",
        },
        {
          source: "/demo-wallpaper",
          destination: "/demo-wallpaper/index.html",
        },
        {
          source: "/sample-caterer",
          destination: "/sample-caterer/index.html",
        },
        {
          source: "/electrical-sample",
          destination: "/electrical-sample/index.html",
        },
        {
          source: "/merch_sample",
          destination: "/merch_sample/index.html",
        },
      ],
      fallback: [],
    };
  },
};

export default nextConfig;
