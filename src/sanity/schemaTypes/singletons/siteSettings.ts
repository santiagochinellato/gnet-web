import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'navigation',
      title: 'Navigation Links',
      type: 'array',
      of: [{ type: 'link' }]
    }),
    defineField({
        name: 'footer',
        title: 'Footer',
        type: 'object',
        fields: [
            defineField({ name: 'brandDescription', type: 'text' }),
            defineField({ name: 'servicesTitle', type: 'string' }),
            defineField({ name: 'servicesLinks', type: 'array', of: [{ type: 'link' }] }), // Assuming link object matches
            defineField({ name: 'companyTitle', type: 'string' }),
            defineField({ name: 'companyLinks', type: 'array', of: [{ type: 'link' }] }),
            defineField({ name: 'contactTitle', type: 'string' }),
            defineField({
                name: 'contactInfo',
                type: 'object',
                fields: [
                    defineField({ name: 'address', type: 'string' }),
                    defineField({ name: 'phone', type: 'string' }),
                    defineField({ name: 'email', type: 'string' })
                ]
            }),
            defineField({ name: 'copyright', type: 'string' }),
            defineField({ name: 'legalLinks', type: 'array', of: [{ type: 'link' }] })
        ]
    })
  ]
})
