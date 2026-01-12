import { defineField, defineType } from 'sanity'

const pricingPlanFields = [
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

const categoryFields = [
    defineField({
        name: 'plans',
        title: 'Plans',
        type: 'array',
        of: [{
            type: 'object',
            fields: pricingPlanFields
        }]
    }),
    defineField({ name: 'benefitsTitle', type: 'string' }),
    defineField({
        name: 'benefits',
        title: 'Benefits',
        type: 'array',
        of: [{
            type: 'object',
            fields: [
                defineField({ name: 'title', type: 'string' }),
                defineField({ name: 'text', type: 'string' })
            ]
        }]
    }),
    defineField({
        name: 'ctaBox',
        title: 'CTA Box (Optional)',
        type: 'object',
        fields: [
            defineField({ name: 'title', type: 'string' }),
            defineField({ name: 'description', type: 'text' }),
            defineField({ name: 'ctaText', type: 'string' })
        ]
    })
]

export default defineType({
  name: 'planesPage',
  title: 'Planes Page',
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
        name: 'tabs',
        title: 'Tab Labels',
        type: 'object',
        group: 'content',
        fields: [
            defineField({ name: 'hogar', type: 'string', title: 'Start (Hogar)' }),
            defineField({ name: 'turista', type: 'string', title: 'Mid (Turista)' }),
            defineField({ name: 'comercios', type: 'string', title: 'End (Comercios)' })
        ]
    }),
    defineField({
        name: 'categories',
        title: 'Categories Content',
        type: 'object',
        group: 'content',
        fields: [
            defineField({
                name: 'hogar',
                type: 'object',
                title: 'Hogar Content',
                fields: categoryFields
            }),
            defineField({
                name: 'turista',
                type: 'object',
                title: 'Turista Content',
                fields: categoryFields
            }),
            defineField({
                name: 'comercios',
                type: 'object',
                title: 'Comercios Content',
                fields: categoryFields
            })
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
        name: 'cta',
        title: 'Bottom CTA',
        type: 'object',
        group: 'content',
        fields: [
            defineField({ name: 'title', type: 'string' }),
            defineField({ name: 'text', type: 'text' }),
            defineField({ name: 'whatsappText', type: 'string' })
        ]
    })
  ],
  groups: [
    { name: 'seo', title: 'SEO' },
    { name: 'content', title: 'Content' }
  ]
})
