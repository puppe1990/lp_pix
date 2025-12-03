# Repository Guidelines

## Project Structure & Module Organization
- Next.js App Router lives in `app/`; the landing page is `app/page.tsx`, informational routes sit under folders like `app/seguranca`, `app/lgpd`, and the blog entry point is `app/blog`.
- Reusable UI blocks are in `components/` (with a barrel export in `components/index.ts`); colocate new sections here instead of inside route folders.
- Shared helpers sit in `lib/utils.ts` (`cn`), with global styles in `app/globals.css` and tokens/layout rules in `tailwind.config.ts`.
- Static assets and fonts live in `public/`; MDX posts belong in `content/blog/*.mdx` with front matter; design notes reside in `docs/design-system.md`.
- Hosting/config files (`next.config.js`, `netlify.toml`) should be changed deliberately and documented in PRs.

## Build, Test, and Development Commands
- `npm install` — install dependencies.
- `npm run dev` — start the local dev server at http://localhost:3000 with HMR.
- `npm run lint` — run Next/ESLint checks; fix warnings before pushing.
- `npm run build` — compile a production bundle to surface route/config errors early.
- `npm start` — serve the built app for local smoke tests.

## Coding Style & Naming Conventions
- TypeScript strict mode is enabled; add explicit prop/return types for exported functions and avoid `any`.
- React components/files use PascalCase (`Header.tsx`); routes and MDX slugs use `kebab-case`; helpers remain camelCase.
- Favor Tailwind utility classes and `clsx`/`cn` for conditional styles; keep Framer Motion usage purposeful.
- Indent with 2 spaces and keep the prevailing double-quote style; remove unused imports/exports to satisfy lint.
- For MDX posts, include `title`, `date`, `excerpt`, `author`, `tags` in the front matter and keep headings concise.

## Testing Guidelines
- No automated runner is configured yet; add focused tests (React Testing Library + Vitest) when introducing logic-heavy code and document how to run them.
- Always run `npm run lint` and `npm run build` before PRs; manually verify key routes (`/`, `/blog`, `/seguranca`, `/lgpd`) across desktop/mobile breakpoints.
- For content-only changes, proofread metadata and reload `/blog` to confirm navigation, code highlighting, and SEO titles.

## Commit & Pull Request Guidelines
- Match the existing history: short, sentence-case imperatives (e.g., "Add LGPD page", "Update base URL in sitemap").
- Keep PRs scoped; describe intent, list major changes, mention affected routes/content, and link issues/tasks.
- Attach before/after screenshots or clips for UI tweaks; call out copy or SEO impacts explicitly.
- Confirm lint/build status and any config/dependency changes in the PR description.
