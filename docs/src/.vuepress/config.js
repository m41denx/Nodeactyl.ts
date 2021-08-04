const { description } = require('../../package')

module.exports = {
  lang: 'en-GB', // this will be set as the lang attribute on <html>
  title: 'Nodeactyl Docs',
  description: 'API Wrapper built for the pterodactyl panel',
  themeConfig: {
    repo: 'https://github.com/Nodeactyl/Nodeactyl',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
      nav: [
        {
          text: 'API Reference',
          link: '/api/',
        },
        {
          text: 'Guides',
          link: '/guides/'
        },
        {
          text: 'Discord',
          link: 'https://discord.nodeactyl.dev'
        }
      ],
      sidebar: {
        '/api/': [
          {
            title: 'API Reference',
            collapsable: false,
            children: [
              'application',
              'client',
              'server-builder'
            ]
          },
        ],
        '/guides/': [
          {
            title: 'Guides',
            collapsable: false,
            children: [
              'quick-start',
              'using-application',
              'using-client',
              'creating-servers'
            ]
          },
        ],
      }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    'vuepress-plugin-autodoc',
    '@vuepress/last-updated',
    '@vuepress/nprogress',
    '@vuepress/search'
  ]
}