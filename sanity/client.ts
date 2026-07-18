import { createClient } from 'next-sanity';

// Sanity project config is expected via env vars. When they're absent (e.g. not
// yet configured on the deploy target), fall back to placeholders so the client
// can still be constructed without crashing the build; requests will simply
// return no data until the real values are set.
export const isSanityConfigured = Boolean(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && process.env.NEXT_PUBLIC_SANITY_DATASET
);

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2026-07-19', // Use today's date
  useCdn: false, // Set to false if you want to see updates immediately
});