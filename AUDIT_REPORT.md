# Static Audit Report

## Scope
- Source/configuration review for the supplied ZIP.
- Removed the original `.env` file from the deliverable.
- Kept `.env.example` as a placeholder-only template and tightened `.gitignore`.
- Removed automatic database migrations from the Vercel build command; migrations are now an explicit `npm run db:migrate` task.
- Added a demo-mode API helper and replaced fund-moving handlers with HTTP 403 responses for deposit creation, withdrawal creation, admin deposit decisions, admin withdrawal decisions, and manual admin balance adjustments.
- Replaced the old deployment guide with demo-only deployment instructions.

## Checks completed
- ZIP contents inspected and `.env` excluded from the deliverable.
- JSON syntax check passed for `package.json`.
- `node scripts/check-demo-safety.mjs` passed for all five blocked handlers.
- Static search found no remaining deposit/withdrawal create/update/delete calls in `src`.
- ZIP integrity check is performed when packaging.

## Not verified
- `npm ci` did not complete in the packaging environment, so the TypeScript check, ESLint, and full Next.js production build could not be completed here.
- No PostgreSQL database was supplied, so migrations, authentication, admin setup, and runtime database flows were not integration-tested.
- This is not a production-readiness or financial-security certification. Keep the app private until dependency installation, typecheck, lint, build, database migration, and runtime smoke tests pass.
