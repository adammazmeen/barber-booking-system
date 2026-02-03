# Barber Booking System (Frontend)

React + Vite single-page application used to manage bookings, prices, and availability for the barber booking system backend.

## Prerequisites

- Node.js 18+ (recommended LTS)
- npm 9+

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy the sample environment file and point it at your API:

   ```bash
   cp .env.example .env.local
   # then edit VITE_API_URL
   ```

   The frontend reads `VITE_API_URL` in [src/services/apiClient.js](src/services/apiClient.js#L3-L11). If the variable is missing, it falls back to the bundled demo backend URL.

3. Start the dev server:

   ```bash
   npm run dev
   ```

## Building for Production

```bash
npm run build
```

Build artifacts are emitted to `dist/`. Use `npm run preview` to sanity check the production bundle locally.

## Deploying to Vercel

1. Create a new Vercel project from this repo and choose the **Vite** preset.
2. Configure the build settings:
   - Install Command: `npm install`
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Add the `VITE_API_URL` env variable under **Project Settings → Environment Variables** so each environment points to the correct backend (production, preview, etc.).
4. Deploy. Client-side routing is already handled via the rewrite rule in `vercel.json`.
