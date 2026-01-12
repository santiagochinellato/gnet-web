import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'securityPage',
  title: 'Security Page',
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
        defineField({ name: 'ctaText', type: 'string' }),
        defineField({ name: 'backgroundImage', type: 'image' }) // Ideally image
      ]
    }),
    defineField({
        name: 'solutions',
        title: 'Solutions Tabs',
        type: 'object',
        group: 'content',
        fields: [
            defineField({
                name: 'tabs',
                type: 'array',
                of: [{
                    type: 'object',
                    fields: [
                        defineField({ name: 'key', type: 'string' }),
                        defineField({ name: 'iconName', type: 'iconSelect' }),
                        defineField({ name: 'label', type: 'string' }),
                        defineField({ name: 'title', type: 'string' }),
                        defineField({ name: 'description', type: 'text' }),
                        defineField({ name: 'image', type: 'image' })
                    ]
                }]
            })
        ]
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
                of: [{ type: 'featureItem' }] // Reusing featureItem
            })
        ]
    }),
    defineField({
        name: 'gallery',
        title: 'Gallery Section',
        type: 'object',
        group: 'content',
        fields: [
            defineField({ name: 'title', type: 'string' }),
            defineField({ name: 'linkText', type: 'string' }),
            defineField({
                name: 'items',
                type: 'array',
                of: [{
                    type: 'object',
                    fields: [
                        defineField({ name: 'title', type: 'string' }),
                        defineField({ name: 'category', type: 'string' }),
                        defineField({ name: 'image', type: 'image', options: { hotspot: true } })
                    ]
                }]
            })
        ]
    }),
    defineField({
        name: 'comparison',
        title: 'Comparison Table',
        type: 'object',
        group: 'content',
        fields: [
            defineField({ name: 'title', type: 'string' }),
            defineField({ name: 'description', type: 'text' }),
            defineField({ name: 'brandStandard', type: 'string' }),
            defineField({ name: 'brandPro', type: 'string' }),
            defineField({
                name: 'rows',
                type: 'array',
                of: [{
                    type: 'object',
                    fields: [
                        defineField({ name: 'label', type: 'string' }),
                        defineField({ name: 'valueStandard', type: 'string' }),
                        defineField({ name: 'valuePro', type: 'string' })
                    ]
                }]
            })
        ]
    })
  ],
  groups: [
    { name: 'seo', title: 'SEO' },
    { name: 'content', title: 'Content' }
  ]
})
