export default {
  name: 'client',
  type: 'document',
  title: 'Client',
  fields: [
    {
      name: 'client',
      type: 'string',
      title: 'Client'
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'What you want to appear in the url when you click on this client',
      options: {
        source: 'client',
        maxLength: 200
      }
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image'
    },
    {
      name: 'imagesGallery',
      title: 'Images gallery',
      type: 'array',
      of: [{ type: 'image' }]
    },
    {
      name: 'category',
      type: 'object',
      title: 'Category',
      fields: [
        {
            title: 'Category',
            name: 'Category',
            type: 'reference',
            to: [{type: 'category'}]
            
        }
      ]
    }
  ]
}
