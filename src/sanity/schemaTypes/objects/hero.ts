import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'heroContent',
  title: 'Hero Content',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'highlight',
      title: 'Highlight Text',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string'
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA Link',
      type: 'string'
    }),
    defineField({
      name: 'image',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true }
    })
  ]
})
