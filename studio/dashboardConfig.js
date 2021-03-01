export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '603c44962658113ab194662a',
                  title: 'Sanity Studio',
                  name: 'david-flynn-design-studio',
                  apiId: '295dc5d1-0b85-47e0-a40b-74f0ef1ac347'
                },
                {
                  buildHookId: '603c4496d579f13f4b7c7046',
                  title: 'Blog Website',
                  name: 'david-flynn-design',
                  apiId: 'ad59b1ef-f51b-4a10-b77f-9713301cdbda'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/erflynn21/david-flynn-design',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://david-flynn-design.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
