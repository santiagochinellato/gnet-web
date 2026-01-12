import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
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
      type: 'heroContent',
      group: 'content'
    }),
    defineField({
      name: 'features',
      title: 'Features Section',
      type: 'object',
      group: 'content',
      fields: [
        defineField({ name: 'sectionTitle', type: 'string' }),
        defineField({ name: 'headline', type: 'string' }),
        defineField({ name: 'description', type: 'text' }),
        defineField({ name: 'ctaText', type: 'string' }),
        defineField({
          name: 'items',
          type: 'array',
          of: [{ type: 'featureItem' }]
        })
      ]
    }),
    defineField({
        name: 'pricing',
        title: 'Pricing Section',
        type: 'object',
        group: 'content',
        fields: [
            defineField({ name: 'badge', type: 'string' }),
            defineField({ name: 'title', type: 'string' }),
            defineField({ name: 'description', type: 'text' }),
            defineField({
                name: 'plans',
                type: 'array',
                of: [{
                    type: 'object',
                    fields: [
                        defineField({ name: 'title', type: 'string' }),
                        defineField({ name: 'description', type: 'string' }),
                        defineField({ name: 'price', type: 'string' }),
                        defineField({ name: 'period', type: 'string' }),
                        defineField({ name: 'features', type: 'array', of: [{ type: 'string' }] }),
                        defineField({ name: 'ctaText', type: 'string' }),
                        defineField({ name: 'ctaLink', type: 'string' }),
                        defineField({ name: 'recommended', type: 'boolean' }),
                        defineField({ name: 'color', type: 'string', options: { list: ['primary', 'secondary'] } }),
                        defineField({ name: 'badge', type: 'string' }),
                    ]
                }]
            })
        ]
    }),
    defineField({
        name: 'coverage',
        title: 'Coverage Section',
        type: 'object',
        group: 'content',
        fields: [
            defineField({ name: 'badge', type: 'string' }),
            defineField({ name: 'title', type: 'string' }),
            defineField({ name: 'description', type: 'text' }),
            defineField({ name: 'barriosTitle', type: 'string' }),
            defineField({ name: 'barrios', type: 'array', of: [{ type: 'string' }] })
        ]
    }),
    defineField({
        name: 'faq',
        title: 'FAQ Section',
        type: 'object',
        group: 'content',
        fields: [
            defineField({ name: 'title', type: 'string' }),
            defineField({ name: 'description', type: 'text' }),
            defineField({
                name: 'items',
                type: 'array',
                of: [{
                    type: 'object',
                    fields: [
                        defineField({ name: 'q', title: 'Question', type: 'string' }),
                        defineField({ name: 'a', title: 'Answer', type: 'text' })
                    ]
                }]
            })
        ]
    }),
    defineField({
        name: 'testimonials',
        title: 'Testimonials Section',
        type: 'object',
        group: 'content',
        fields: [
            defineField({ name: 'title', type: 'string' }),
            defineField({
                name: 'reviews',
                type: 'array',
                of: [{
                    type: 'object',
                    fields: [
                        defineField({ name: 'text', type: 'text' }),
                        defineField({ name: 'name', type: 'string' }),
                        defineField({ name: 'zone', type: 'string' }),
                        defineField({ name: 'img', type: 'string' }) // Keeping as string for now to match json, ideally image
                    ]
                }]
            })
        ]
    }),
    defineField({
        name: 'ctaHighlight',
        title: 'CTA Highlight',
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
