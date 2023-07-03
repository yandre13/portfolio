import { z } from 'zod'
import { CallToActionSchema, ImageSchema, SlugSchema } from './globals'

export const SkillsItemSchema = z.object({
  icon: z.string(),
  label: z.string(),
  color: z.string(),
  _id: z.string(),
})
export type SkillsItem = z.infer<typeof SkillsItemSchema>

export const SkillsSchema = z.object({
  callToAction: CallToActionSchema,
  _type: z.string(),
  description: z.string(),
  title: z.string(),
  items: z.array(SkillsItemSchema),
})
export type Skills = z.infer<typeof SkillsSchema>

export const HeroSchema = z.object({
  _type: z.string(),
  description: z.string(),
  title: z.string(),
  callToAction: CallToActionSchema,
  image: ImageSchema,
  role: z.string(),
})
export type Hero = z.infer<typeof HeroSchema>

export const ExpEduItemSchema = z.object({
  description: z.string(),
  company: z.union([z.null(), z.string()]).optional(),
  _key: z.string(),
  title: z.string(),
  date: z.string(),
  _type: z.enum(['item_exp', 'item_edu']),
  academy: z.union([z.null(), z.string()]).optional(),
})
export type ExpEduItem = z.infer<typeof ExpEduItemSchema>

export const ExpEduSchema = z.object({
  _type: z.string(),
  title: z.string(),
  items: z.array(ExpEduItemSchema),
})
export type ExpEdu = z.infer<typeof ExpEduSchema>

export const ExperienceSchema = z.object({
  _type: z.string(),
  label: z.string(),
  _key: z.string(),
  info: z.string(),
})
export type Experience = z.infer<typeof ExperienceSchema>

export const AboutSchema = z.object({
  image: ImageSchema,
  _type: z.string(),
  description: z.string(),
  title: z.string(),
  experiences: z.array(ExperienceSchema),
  callToAction: CallToActionSchema,
})
export type About = z.infer<typeof AboutSchema>

export const ProjectSchema = z.object({
  _id: z.string(),
  title: z.string(),
  description: z.string(),
  skills: SkillsSchema,
  slug: SlugSchema,
  callToAction: CallToActionSchema,
  _createdAt: z.string(),
  _type: z.string(),
  _rev: z.string(),
  _updatedAt: z.string(),
  coverImage: ImageSchema,
})

export const PortfolioSchema = z.object({
  title: z.string(),
  _type: z.string(),
  items: z.array(ProjectSchema),
  callToAction: CallToActionSchema,
})

export const HomeSchema = z.object({
  _id: z.string(),
  exp_edu: ExpEduSchema,
  _createdAt: z.string(),
  about: AboutSchema,
  title: z.string(),
  _rev: z.string(),
  _type: z.string(),
  description: z.string(),
  _updatedAt: z.string(),
  skills: SkillsSchema,
  hero: HeroSchema,
  portfolio: PortfolioSchema,
})
export type HomeProps = z.infer<typeof HomeSchema>
