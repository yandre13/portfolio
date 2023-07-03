export type ResponseCMS = {
  home_: Home[]
}

export type Home = {
  id: string
  title: string
  description: string
  hero: Hero
  about: About
  skills: Skills
  experience: HomeExperience
  portfolio: Portfolio
}

export type About = {
  title: string
  description: string
  image: Image
  experiences: ExperienceElement[]
  callToAction: CallToAction
}

export type CallToAction = {
  id: string
  text: string
  url: string
  external: boolean | null
  download: boolean
}

export type ExperienceElement = {
  id: string
  label: string
  number: string
}

export type HomeExperience = {
  title: string
  description: null
  items: Item[]
}

export type Item = {
  id: string
  date: string
  title: string
  at: string
  description: string
  education: boolean | null
}

export type Hero = {
  title: string
  role?: string
  description: string
  image: Image
  callToAction: CallToAction
  id?: string
}

export type Image = {
  id: string
  url: string
}

export type Portfolio = {
  title: string
  description: null
  projects: Hero[]
}

export type Skills = {
  title: string
  description: string
  skills: Skill[]
  callToAction: CallToAction
}

export type Skill = {
  id: string
  title: string
  svg: string
  color: Color
}

export enum Color {
  Orange = 'orange',
}
