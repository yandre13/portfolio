import { defineArrayMember, defineField, defineType } from 'sanity'

import { Home } from 'lucide-react'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  icon: Home,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your personal website.',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      description:
        'Used both for the <meta> description tag for SEO, and the personal website subheader. (max 450 characters)',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.max(450).required(),
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'hero',
    }),
    defineField({
      name: 'about',
      title: 'About',
      type: 'about',
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'skills',
    }),
    defineField({
      name: 'exp_edu',
      title: 'Experience & Education',
      type: 'exp_edu',
    }),
    defineField({
      name: 'portfolio',
      title: 'Portfolio',
      type: 'portfolio',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        subtitle: 'Home',
        title,
      }
    },
  },
})
