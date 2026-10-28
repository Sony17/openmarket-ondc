## Domain layout

This app runs **behind** `openidea.co.in`, which is served by the Ecosyz
project (openidea.world's codebase). Ecosyz forwards the paths this app owns —
`/shop`, `/ondc/*`, `/api/ondc/*`, `/templates`, `/console`, `/ondc-admin`,
`/legal/*`, the sample sites — to this deployment, and this app serves its
bundles under `/wt-assets` (the `assetPrefix`) so they never collide with
Ecosyz's `/_next`. Tenant sites (`<sub>.openidea.co.in`, `saiwalldecor.com`)
still hit this project directly via the wildcard domain.

Because the two apps share one origin, routes here must not reuse Ecosyz
paths: that is why admin lives at `/ondc-admin`, payments at
`/api/shop-payments` and template previews at `/templates/<slug>`. Links to
Ecosyz pages (`/`, `/privacy`, …) are plain `<a>`, not `<Link>`.

Full go-live steps: `docs/DOMAIN_MOVE_OPENIDEA_CO_IN.md` in the Ecosyz repo.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
