export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-06-13'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const previewUrl = assertValue(
  process.env.NEXT_PUBLIC_WEBSITE_URL,
  'Missing environment variable: NEXT_PUBLIC_WEBSITE_URL'
)

export const previewSecret = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PREVIEW_SECRET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PREVIEW_SECRET'
)

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
