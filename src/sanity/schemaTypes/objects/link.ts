import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'href',
      title: 'URL / Path',
      type: 'string',
      validation: Rule => Rule.required()
    })
  ]
})
