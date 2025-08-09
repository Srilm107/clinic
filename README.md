# Clinic Management System

A modern clinic management system built with React, TypeScript, and Express.js, designed to be easily deployed on Vercel.

## Features

- Doctor profiles and information
- Appointment booking system
- Contact form
- Responsive design with modern UI
- Database integration with PostgreSQL

## Technology Stack

- **Frontend**: React, TypeScript, Vite, Tailwind CSS
- **Backend**: Serverless functions (Vercel)
- **Database**: PostgreSQL with Drizzle ORM
- **Deployment**: Vercel

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up your environment variables:
   Create a `.env` file with your database connection string:
   ```
   DATABASE_URL=your_postgresql_connection_string
   ```

3. Push database schema:
   ```bash
   npm run db:push
   ```

4. Start development server:
   ```bash
   npm run dev
   ```

## Deployment on Vercel

This project is configured for easy deployment on Vercel:

1. **Fork or clone this repository**

2. **Set up your database**:
   - Create a PostgreSQL database (recommended: Neon, Supabase, or Vercel Postgres)
   - Get your connection string

3. **Deploy to Vercel**:
   - Connect your GitHub repository to Vercel
   - Add your `DATABASE_URL` environment variable in Vercel dashboard
   - Deploy!

4. **Initialize database**:
   ```bash
   npm run db:push
   ```

The project includes:
- ✅ `vercel.json` configuration
- ✅ Serverless API functions in `/api` directory
- ✅ Optimized build configuration
- ✅ Environment variable support

## API Endpoints

- `GET /api/doctors` - Get all doctors
- `POST /api/appointments` - Create appointment
- `POST /api/contact` - Submit contact message

## Environment Variables

- `DATABASE_URL` - PostgreSQL connection string
- `NODE_ENV` - Environment (automatically set by Vercel)

## Project Structure

```
├── api/                    # Serverless functions
├── client/                 # React frontend
├── server/                 # Original Express server (dev only)
├── shared/                 # Shared schemas and types
├── vercel.json            # Vercel configuration
└── package.json           # Dependencies and scripts
```
