import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO Config',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Meta Title',
      type: 'string',
      validation: Rule => Rule.required().max(60).warning('Should be under 60 characters')
    }),
    defineField({
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().max(160).warning('Should be under 160 characters')
    }),
    defineField({
      name: 'ogImage',
      title: 'Open Graph Image',
      type: 'image',
      description: 'Image for social sharing (1200x630px recommended)',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    })
  ]
})
