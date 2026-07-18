export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-07-18'

// Fall back to placeholders when unset so importing this module (e.g. for the
// Studio config) never crashes the build; the Studio simply won't load real
// content until the real values are configured.
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder'

