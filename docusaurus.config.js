// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DocLife Help Desk',
  tagline: 'Sistema de Help Desk Multimodular',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'mateusturola',
  projectName: 'docLife',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Internationalization configuration
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
    localeConfigs: {
      'pt-BR': {
        label: 'Português (Brasil)',
        direction: 'ltr',
        htmlLang: 'pt-BR',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/mateusturola/docLife/tree/main/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'DocLife',
        logo: {
          alt: 'DocLife Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'lifebooksSidebar',
            position: 'left',
            label: 'Lifebooks',
          },
          {
            type: 'docSidebar',
            sidebarId: 'kidsSidebar',
            position: 'left',
            label: 'Kids',
          },
          {
            type: 'docSidebar',
            sidebarId: 'voltsSidebar',
            position: 'left',
            label: 'Volts',
          },
          {
            type: 'docSidebar',
            sidebarId: 'backofficeSidebar',
            position: 'left',
            label: 'Backoffice',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/mateusturola/docLife',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Módulos',
            items: [
              {
                label: 'Lifebooks',
                to: '/docs/lifebooks/intro',
              },
              {
                label: 'Kids',
                to: '/docs/kids/intro',
              },
              {
                label: 'Volts',
                to: '/docs/volts/intro',
              },
              {
                label: 'Backoffice',
                to: '/docs/backoffice/intro',
              },
            ],
          },
          {
            title: 'Comunidade',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/mateusturola/docLife',
              },
            ],
          },
          {
            title: 'Recursos',
            items: [
              {
                label: 'Documentação',
                to: '/docs/lifebooks/intro',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DocLife Help Desk. Built with Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer').themes.github,
        darkTheme: require('prism-react-renderer').themes.dracula,
      },
      // Algolia search configuration (to be configured later)
      // algolia: {
      //   appId: 'YOUR_APP_ID',
      //   apiKey: 'YOUR_SEARCH_API_KEY',
      //   indexName: 'YOUR_INDEX_NAME',
      //   contextualSearch: true,
      // },
    }),
};

module.exports = config;
