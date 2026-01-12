import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      group: 'seo'
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      group: 'content',
      fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'description', type: 'text' })
      ]
    }),
    defineField({
        name: 'cards',
        title: 'Contact Cards',
        type: 'array',
        group: 'content',
        of: [{
            type: 'object',
            fields: [
                defineField({ name: 'iconName', type: 'iconSelect' }),
                defineField({ name: 'title', type: 'string' }),
                defineField({ name: 'value', type: 'string' }),
                defineField({ name: 'subtext', type: 'string' }),
                defineField({ name: 'ctaText', type: 'string' }),
                defineField({ name: 'action', type: 'string', description: 'e.g. tel:+549... or mailto:...' })
            ]
        }]
    }),
    defineField({
        name: 'sidebar',
        title: 'Sidebar Info',
        type: 'object',
        group: 'content',
        fields: [
            defineField({ name: 'deptTitle', type: 'string' }),
            defineField({
                name: 'emails',
                type: 'array',
                of: [{
                    type: 'object',
                    fields: [
                        defineField({ name: 'label', type: 'string' }),
                        defineField({ name: 'email', type: 'string' })
                    ]
                }]
            }),
            defineField({ name: 'officeTitle', type: 'string' }),
            defineField({ name: 'address', type: 'array', of: [{ type: 'string' }] }),
            defineField({ name: 'hoursTitle', type: 'string' }),
            defineField({ name: 'hours', type: 'array', of: [{ type: 'string' }] })
        ]
    })
  ],
  groups: [
    { name: 'seo', title: 'SEO' },
    { name: 'content', title: 'Content' }
  ]
})
