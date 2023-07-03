import { Link } from 'lucide-react'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'callToAction',
  title: 'Call to Action',
  type: 'object',
  fields: [
    defineField({
      name: 'linkText',
      title: 'Link Text',
      type: 'string',
    }),
    defineField({
      name: 'linkUrl',
      title: 'Link URL',
      type: 'string',
    }),
    // add boolean field to enable/disable link if it is internal or external default is internal
    defineField({
      name: 'isExternal',
      title: 'Is External',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'download',
      title: 'Download',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Supported icons: arrow-right, arrow-down, arrow-up',
    }),
  ],
  preview: {
    select: {
      title: 'linkText',
      subtitle: 'linkUrl',
    },
    prepare({ title, subtitle }) {
      return {
        title: `Call to Action: ${title}`,
        subtitle: subtitle,
        media: Link,
      }
    },
  },
})
