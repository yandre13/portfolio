import { type SchemaTypeDefinition } from 'sanity'

// import blockContent from './schemas/blockContent'
// import category from './schemas/category'
// import post from './schemas/post'
// import author from './schemas/author'

import page from './schemas/documents/page'
import project from './schemas/documents/project'
import home from './schemas/singletons/home'
import settings from './schemas/singletons/settings'
import hero from './schemas/objects/hero'
import callToAction from './schemas/objects/call-to-action'
import about from './schemas/objects/about'
import skills from './schemas/objects/skills'
import expEdu from './schemas/objects/exp-edu'
import skill from './schemas/documents/skill'
import portfolio from './schemas/objects/portfolio'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Singletons
    home,
    settings,
    // Documents
    page,
    project,
    // Objects
    hero,
    callToAction,
    about,
    skill,
    skills,
    portfolio,
    expEdu,
  ],
}
