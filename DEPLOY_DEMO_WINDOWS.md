# Windows: GitHub + Vercel deployment (demo mode only)

## Before you start

- This project is configured for **demo/paper trading only**.
- API requests that create/approve deposits, create/approve withdrawals, or manually adjust user balances are blocked.
- Do not accept real customer funds or connect payment/crypto transfer services.
- The original `.env` file has intentionally been removed from this cleaned ZIP. If its credentials were real, rotate them before using the project.

## 1. Create a PostgreSQL database

The site uses PostgreSQL through Prisma. Create a database with a reputable provider such as Neon or Supabase. Copy its PostgreSQL connection string, including SSL settings. Keep it private; never paste it into GitHub or a chat.

## 2. Prepare environment variables

In the hosting dashboard, configure the variables listed in `.env.example`:

- `DATABASE_URL`: your PostgreSQL connection string
- `JWT_SECRET`: a newly generated long random secret (at least 64 characters)
- `JWT_EXPIRES_IN`: for example `7d`
- `ADMIN_EMAIL`: the admin email you choose
- `ADMIN_PASSWORD`: a strong, unique password
- `NEXT_PUBLIC_APP_URL`: the deployed Vercel URL once assigned
- `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET`: only if you configure Cloudinary uploads
- `DEMO_MODE=true`

Never commit `.env`; only `.env.example` should be committed.

## 3. Upload the project to GitHub

1. Extract `mexe-trade-demo-deploy-ready.zip` on Windows.
2. Open GitHub and create a **Private** repository, for example `mexe-trade-demo`.
3. On the new repository page, choose **Add file → Upload files**.
4. Open the extracted project folder and upload its contents (including `package.json`, `package-lock.json`, `src`, `prisma`, and config files). Do not upload `node_modules`, `.next`, or `.env`.
5. Commit the upload.

If GitHub rejects too many files, use GitHub Desktop instead: add the extracted folder as a local repository, commit, and publish it as a private repository.

## 4. Import into Vercel

1. Sign in to Vercel with GitHub.
2. Choose **Add New → Project** and import the private repository.
3. Framework preset should be **Next.js**. Keep the root directory at the repository root (the folder containing `package.json`).
4. Add the environment variables from Step 2 in Vercel → Project → Settings → Environment Variables. Set them for **Production** and **Preview** as appropriate.
5. Keep the build command as `npm run build`.
6. Deploy.

## 5. Apply database migrations deliberately

The build no longer runs database migrations automatically. Once `DATABASE_URL` points to the intended database, run `npm run db:migrate` from a trusted local terminal with the same connection string, or use a controlled deployment workflow. Review migrations and back up any database before applying them.

## 6. Verify after deployment

- Open the Vercel URL and check the homepage, registration/login, markets, and paper-trading flow.
- Confirm deposit and withdrawal mutation requests return HTTP `403` with `demoMode: true`.
- Confirm admin balance-adjustment requests are blocked too.
- Check Vercel → Deployments → Build Logs and Runtime Logs for errors.

## Important limitation

A successful build does not prove that the database is reachable or that every feature works. Database-backed pages require a valid PostgreSQL database, migrations, and correct environment variables. This ZIP has not been confirmed by a completed `npm run build` in the current environment because dependency installation did not finish here; run the build in your environment and fix any logs before relying on the deployment.
