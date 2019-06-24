module.exports = {
  siteTitle: 'Shivam Sharma',
  siteDescription:
    '',
  siteKeywords:
    '',
  siteUrl: 'https://www.shivamsharma.me',
  siteLanguage: 'en_US',

  //googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',

  name: 'Shivam Sharma',
  // location: 'Boston, MA',
  email: 'shivam.me.work@gmail.com',
  github: 'https://github.com/shivamssharma/',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/shivamssharma/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/bchiang7/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/thewriterhead/',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '#about',
    },
    {
      name: 'Experience',
      url: '#jobs',
    },
    {
      name: 'Work',
      url: '#projects',
    },
    {
      name: 'Contact',
      url: '#contact',
    },
  ],

  // twitterHandle: '@bchiang7',
  // googleAnalyticsID: 'UA-45666519-2',

  navHeight: 100,

  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
