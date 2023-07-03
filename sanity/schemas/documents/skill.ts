import { Wallpaper } from 'lucide-react'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'text',
      rows: 3,
      description: 'SVG code for the icon.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      description:
        'Supported colors: red, orange, yellow, green, blue, purple, pink,',
      validation: (Rule) => Rule.required(),
      initialValue: 'orange',
    }),
  ],
  preview: {
    select: {
      label: 'label',
    },
    prepare({ label }) {
      return {
        title: `Skill: ${label}`,
        media: Wallpaper,
      }
    },
  },
})
