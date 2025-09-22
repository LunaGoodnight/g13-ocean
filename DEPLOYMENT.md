# Digital Ocean Deployment Guide

## Fixed Issues

The "server-side exception" error on Digital Ocean was caused by:

1. **Static rendering conflicts** - Next.js was trying to statically render pages that make API calls during build time
2. **API endpoint availability** - API server not available during build process
3. **Environment configuration** - Missing production environment variables

## Changes Made

### 1. Dynamic Rendering
Added `export const dynamic = 'force-dynamic'` to:
- `/src/app/page.tsx`
- `/src/app/lobby/page.tsx`
- `/src/components/Demo.tsx`
- `/src/components/GameList.tsx`

### 2. Environment Variables
Created `.env.example` and `.env.local` with:
```env
# For production (use these in Digital Ocean)
API_URL=http://api:5009
PORT=3000
NODE_ENV=production
NEXT_TELEMETRY_DISABLED=1

# For local development
NEXT_PUBLIC_API_URL=http://localhost:5009
```

### 3. Error Handling
Added proper error handling for API failures:
- Graceful fallbacks when API is unavailable
- Console logging for debugging
- Empty arrays/null returns instead of crashes

### 4. Docker Configuration
Updated `docker-compose.yml` with proper environment variables:
```yaml
environment:
  - NODE_ENV=production
  - NEXT_TELEMETRY_DISABLED=1
  - PORT=3000
  - API_URL=http://api:5009
```

## Deployment Steps

1. **Set environment variables in Digital Ocean:**
   ```
   API_URL=http://api:5009
   PORT=3000
   NODE_ENV=production
   ```

2. **Build and deploy:**
   ```bash
   npm run build
   npm start
   ```

3. **Using Docker:**
   ```bash
   docker-compose up --build
   ```

## Key Points

- Routes are now dynamically rendered (no static generation issues)
- API failures are handled gracefully
- Environment variables properly configured for production
- Port configuration matches between development and production
- All components have proper error boundaries

The application should now deploy successfully on Digital Ocean without server-side exceptions.