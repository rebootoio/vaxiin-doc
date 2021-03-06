// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Vaxiin Documentation',
  tagline: 'Zombies? there\'s a Vaxiin for that',
  url: 'https://docs.vaxiin.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  //favicon: 'img/favicon.ico',
  organizationName: 'rebootoio', // Usually your GitHub org/user name.
  projectName: 'vaxiin-doc', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
	  routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/rebootoio/vaxiin-doc/edit/main/',
        },
        blog: {
	  blogTitle: 'Vaxiinated',
	  blogDescription: 'The Vaxiin framework blog',
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Vaxiin Documentation',
        //logo: {
        //  alt: 'My Site Logo',
        //  src: 'img/logo.svg',
        //},
        items: [
	  {
	    to: 'blog',
	    label: 'Vaxiin Blog',
	    position: 'left',
	  },
          {
            href: 'https://discord.gg/aEJ6qwcCGs',
            position: 'right',
            label: 'Discord',
          },
          {
            href: 'https://github.com/rebootoio/vaxiin-sandbox',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
