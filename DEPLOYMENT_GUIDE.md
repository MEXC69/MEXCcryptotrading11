# Deployment Guide — Demo/Paper Trading Only

> **Important:** This project is packaged for demo/paper trading only. It is not approved for real-money trading or custody. The API routes that create deposits, create withdrawals, approve/reject deposits, approve/complete withdrawals, and manually adjust user balances are hard-blocked and return HTTP 403. Do not remove these blocks or accept real customer funds.

Follow `DEPLOY_DEMO_WINDOWS.md` for the current Windows → GitHub → Vercel setup. That guide replaces the older deployment instructions.

## Before deployment

1. Use a private GitHub repository.
2. Never upload `.env`; only `.env.example` belongs in Git.
3. If the original ZIP's `.env` contained real credentials, rotate them before use.
4. Create a PostgreSQL database and set its connection string only in your local `.env` or Vercel Environment Variables.
5. Generate a unique, random `JWT_SECRET` and a unique admin password. Do not use sample values from documentation.
6. Keep `DEMO_MODE=true`. The money-moving endpoints are blocked in code independently of this variable.
7. Run `npm ci`, `npm run typecheck`, `npm run lint`, and `npm run build` locally before relying on a deployment. Apply Prisma migrations deliberately with `npm run db:migrate` only after reviewing the migration files and confirming the target database.

## Required environment variables

See `.env.example`. Values are placeholders and must be replaced in your private environment. Cloudinary values are only needed for features that upload files. Do not paste credentials into chat, issues, screenshots, or source files.

## Deployment limitation

This archive has had a static source/configuration audit, but a complete dependency installation and successful production build could not be verified in the packaging environment. Database-backed features also require a valid PostgreSQL instance, applied migrations, and correctly configured environment variables. A successful build alone does not prove all runtime flows work.
