import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '#'
    },
    {
      text: 'Features',
      href: '#features'
    },
    {
      text: 'How it works',
      href: '#steps'
    },
    {
      text: 'FAQ',
      href: '#faq',
    },
  ],
  actions: [{ text: 'Signup', href: '#cta', target: '' }],
};

export const footerData = {
  links: [
    {
      title: '',

    },
    {
      title: '',

    },
    {
      title: '',

    },
    {
      title: 'Company',
      links: [
        { text: 'Vision', href: '#' },
        { text: 'Features', href: '#features' },
        { text: 'Steps', href: '#steps' },
        { text: 'Signup', href: '#cta' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('#') },
    { text: 'Privacy Policy', href: getPermalink('#') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    Backspace 2024 · All rights reserved.
  `,
};
