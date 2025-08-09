# Vercel Deployment Guide

This guide will help you deploy your clinic management system to Vercel.

## Prerequisites

1. A GitHub account
2. A Vercel account (free tier available)
3. A PostgreSQL database (optional - uses in-memory storage by default)

## Deployment Steps

### 1. Prepare Your Repository

1. Push your code to GitHub
2. Ensure all files are committed:
   - `vercel.json` - Vercel configuration
   - `api/` folder - Serverless functions
   - Updated `package.json` with Vercel dependencies

### 2. Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project"
4. Import your repository

### 3. Configure Environment Variables (Optional)

If you want to use a real PostgreSQL database:

1. In Vercel dashboard, go to your project settings
2. Navigate to "Environment Variables"
3. Add: `DATABASE_URL` with your PostgreSQL connection string

Recommended database providers:
- [Neon](https://neon.tech) - Free tier with PostgreSQL
- [Supabase](https://supabase.com) - Free tier with PostgreSQL
- [Vercel Postgres](https://vercel.com/storage/postgres) - Native Vercel integration

### 4. Deploy

1. Click "Deploy" in Vercel
2. Wait for the build to complete
3. Your app will be available at a Vercel URL

### 5. Initialize Database (If using PostgreSQL)

After deployment, run this command locally to set up your database schema:

```bash
npm run db:push
```

## Configuration Details

### Build Settings

Vercel will automatically detect these settings from `vercel.json`:
- **Build Command**: `npm run build`
- **Output Directory**: `dist/public`
- **Install Command**: `npm install`

### API Routes

Vercel automatically detects TypeScript serverless functions in the `/api` directory:
- `/api/doctors.ts` - GET request to fetch doctors
- `/api/appointments.ts` - POST request to create appointments  
- `/api/contact.ts` - POST request to send contact messages

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | No (uses in-memory storage if not provided) |
| `NODE_ENV` | Environment (automatically set by Vercel) | No |

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure `@vercel/node` is in devDependencies
- Verify `vercel.json` syntax

### API Routes Not Working
- Check function names in `api/` folder match `vercel.json`
- Verify serverless functions export a default function
- Check Vercel function logs in dashboard

### Database Connection Issues
- Verify `DATABASE_URL` is correctly set in environment variables
- Ensure database allows connections from Vercel IPs
- Check database connection string format

## Performance Tips

1. **Database**: Use connection pooling for PostgreSQL
2. **Caching**: Consider adding caching headers for static assets
3. **Images**: Optimize images or use Vercel's Image Optimization
4. **Functions**: Keep serverless functions lightweight

## Monitoring

- Use Vercel Analytics for traffic insights
- Monitor function execution time in Vercel dashboard
- Set up error tracking (Sentry, etc.) for production monitoring
