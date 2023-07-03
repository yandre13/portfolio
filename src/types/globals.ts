import { z } from 'zod'

export const AssetSchema = z.object({
  _ref: z.string(),
  _type: z.string(),
})
export type Asset = z.infer<typeof AssetSchema>

export const ImageSchema = z.object({
  _type: z.string(),
  asset: AssetSchema,
})
export type ImageProps = z.infer<typeof ImageSchema>

export const CallToActionSchema = z.object({
  linkText: z.string(),
  download: z.boolean(),
  _type: z.string(),
  icon: z.string(),
  linkUrl: z.string(),
})
export type CallToActionProps = z.infer<typeof CallToActionSchema>

export const SlugSchema = z.object({
  current: z.string(),
  _type: z.string(),
})
export type Slug = z.infer<typeof SlugSchema>
