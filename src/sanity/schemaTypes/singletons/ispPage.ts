import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'ispPage',
  title: 'ISP Page',
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
        defineField({ name: 'badge', type: 'string' }),
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'subtitle', type: 'string' }),
        defineField({
            name: 'ctaPrimary',
            type: 'object',
            fields: [
                defineField({ name: 'text', type: 'string' }),
                defineField({ name: 'link', type: 'string' })
            ]
        }),
        defineField({
            name: 'ctaSecondary',
            type: 'object',
            fields: [
                defineField({ name: 'text', type: 'string' }),
                defineField({ name: 'link', type: 'string' })
            ]
        })
      ]
    }),
    defineField({
        name: 'stats',
        title: 'Stats Section',
        type: 'array',
        group: 'content',
        of: [{
            type: 'object',
            fields: [
                defineField({ name: 'iconName', type: 'iconSelect' }),
                defineField({ name: 'value', type: 'string' }),
                defineField({ name: 'label', type: 'string' })
            ]
        }]
    }),
    defineField({
        name: 'services',
        title: 'Services Section',
        type: 'object',
        group: 'content',
        fields: [
            defineField({ name: 'title', type: 'string' }),
            defineField({ name: 'description', type: 'text' }),
            defineField({
                name: 'items',
                type: 'array',
                of: [{ type: 'featureItem' }] // Reusing featureItem: icon, title, description
            })
        ]
    }),
    defineField({
        name: 'caseStudies',
        title: 'Case Studies Section',
        type: 'object',
        group: 'content',
        fields: [
            defineField({ name: 'title', type: 'string' }),
            defineField({ name: 'description', type: 'text' }),
            defineField({ name: 'linkText', type: 'string' }),
            defineField({
                name: 'items',
                type: 'array',
                of: [{
                    type: 'object',
                    fields: [
                        defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
                        defineField({ name: 'title', type: 'string' }),
                        defineField({ name: 'subtitle', type: 'string' }),
                        defineField({ name: 'ctaText', type: 'string' })
                    ]
                }]
            })
        ]
    }),
    defineField({
        name: 'cta',
        title: 'CTA Section',
        type: 'object',
        group: 'content',
        fields: [
            defineField({ name: 'title', type: 'string' }),
            defineField({ name: 'text', type: 'text' }),
            defineField({
                name: 'ctaPrimary',
                type: 'object',
                fields: [
                    defineField({ name: 'text', type: 'string' }),
                    defineField({ name: 'link', type: 'string' })
                ]
            }),
            defineField({
                name: 'ctaSecondary',
                type: 'object',
                fields: [
                    defineField({ name: 'text', type: 'string' }),
                    defineField({ name: 'link', type: 'string' })
                ]
            })
        ]
    })
  ],
  groups: [
    { name: 'seo', title: 'SEO' },
    { name: 'content', title: 'Content' }
  ]
})
