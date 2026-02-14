/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Sidebar for Lifebooks module
  lifebooksSidebar: [
    {
      type: 'category',
      label: 'Lifebooks',
      items: [
        'lifebooks/intro',
        {
          type: 'category',
          label: 'Guias',
          items: ['lifebooks/guia-rapido'],
        },
        {
          type: 'category',
          label: 'FAQ',
          items: ['lifebooks/faq'],
        },
      ],
    },
  ],

  // Sidebar for Kids module
  kidsSidebar: [
    {
      type: 'category',
      label: 'Kids',
      items: [
        'kids/intro',
        {
          type: 'category',
          label: 'Guias',
          items: ['kids/guia-rapido'],
        },
        {
          type: 'category',
          label: 'FAQ',
          items: ['kids/faq'],
        },
      ],
    },
  ],

  // Sidebar for Volts module
  voltsSidebar: [
    {
      type: 'category',
      label: 'Volts',
      items: [
        'volts/intro',
        {
          type: 'category',
          label: 'Guias',
          items: ['volts/guia-rapido'],
        },
        {
          type: 'category',
          label: 'FAQ',
          items: ['volts/faq'],
        },
      ],
    },
  ],

  // Sidebar for Backoffice module
  backofficeSidebar: [
    {
      type: 'category',
      label: 'Backoffice',
      items: [
        'backoffice/intro',
        {
          type: 'category',
          label: 'Guias',
          items: ['backoffice/guia-rapido'],
        },
        {
          type: 'category',
          label: 'FAQ',
          items: ['backoffice/faq'],
        },
      ],
    },
  ],
};

module.exports = sidebars;
