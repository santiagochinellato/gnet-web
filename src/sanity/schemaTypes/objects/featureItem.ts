import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'featureItem',
  title: 'Feature Item',
  type: 'object',
  fields: [
    defineField({
      name: 'iconName',
      title: 'Icon',
      type: 'iconSelect',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'iconName'
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: `Icon: ${subtitle}`
      }
    }
  }
})
