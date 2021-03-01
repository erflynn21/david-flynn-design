export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'What you want to appear in the url when you click on this category',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image'
    },
  ]
}
