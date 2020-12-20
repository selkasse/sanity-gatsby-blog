export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fded3a740dec15fd1da798c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-xvfgv2y5',
                  apiId: 'cfd26384-c7ea-436c-979a-6330ac08b3d7'
                },
                {
                  buildHookId: '5fded3a740dec16e84da7867',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-3oktw42y',
                  apiId: '9319139c-fb58-4dee-8061-b7595e091b08'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/selkasse/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-3oktw42y.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
