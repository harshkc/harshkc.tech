export const graphCMSImageLoader = ({src}) => src;
export const projects = [
  {
    id: 1,
    title: 'Real time Collabration(In progress)',
    desc: 'Real time collabrative platform for building... ',
    links: [
      {
        website: '',
        github: 'https://github.com/harshkc/',
      },
    ],
    imgSrc:
      'https://images.ctfassets.net/rnx10gdrj9dy/1wtOvIYiFLGBwenPMZQ3Cc/da1de0805ab8f7fc83af0ac2e4ac0e6e/react.png?w=800&h=480&q=50',
    techs: ['React', 'Socket', 'Node', 'Express', 'MongoDB'],
  },
  {
    id: 2,
    title: 'xBook',
    desc: 'xBook is a simple application to virtualize your bookshelf. Choose books, read and rate them, record your notes and leave all the hard parts of managing your bookshelf to us.',
    links: [
      {
        website: 'https://xbook.netlify.app',
        github: 'https://github.com/harshkc/xBook',
      },
    ],
    imgSrc: '/images/xBook.png',
    techs: ['React', 'msw', 'cypress', 'Emotion'],
  },
  {
    id: 3,
    title: 'Portfolio',
    desc: 'The site you are currently on. This also contains original blogs writtern by Harsh powered by GraphCMS.',
    links: [
      {
        website: 'https://harshkc.tech',
        github: 'https://github.com/harshkc/blogfolio',
      },
    ],
    imgSrc: '/images/portfolio.png',
    techs: ['Next', 'GraphQL', 'tailwind css'],
  },
  {
    id: 4,
    title: 'Nidhi Sanchar',
    desc: 'The complete lifecycle of a government scheme can be seamlessly managed by this system. This establishes a platform between center and state government officials.',
    links: [
      {
        website: 'https://nidhisanchar.vercel.app',
        github: 'https://github.com/101Loop/NidhiSanchar',
      },
    ],
    imgSrc: '/images/ns.png',
    techs: ['React', 'Django', 'PostgreSQL'],
  },
  {
    id: 5,
    title: 'Travel Advisor',
    desc: 'Your personal travel advisor to get best out of your every travel abroad or domestic.',
    links: [
      {
        website: 'https://travlguide.netlify.app',
        github: 'https://github.com/harshkc/travlguide',
      },
    ],
    imgSrc:
      'https://images.ctfassets.net/rnx10gdrj9dy/1wtOvIYiFLGBwenPMZQ3Cc/da1de0805ab8f7fc83af0ac2e4ac0e6e/react.png?w=800&h=480&q=50',
    techs: ['React', 'Gmaps'],
  },
  {
    id: 6,
    title: 'Xpensly',
    desc: 'Xpensly is a web app for journaling day to day transactions. Users can create or delete transactions details hands-free with ease.',
    links: [
      {
        website: 'https://xpensly.netlify.app',
        github: 'https://github.com/harshkc/xpensly',
      },
    ],
    imgSrc: '/images/xpensly-light.jpeg',
    techs: ['React', 'Speechly', 'Material-Ui'],
  },
];

export const navItems = [
  {
    name: 'About',
    to: '/#about',
  },
  {
    name: 'Work',
    to: '/#work',
  },
  {
    name: 'Blog',
    to: '/blog',
  },
  {
    name: 'Projects',
    to: '/#projects',
  },
  {
    name: 'Contact',
    to: '#contact',
  },
];

export const contactLinks = [
  {
    name: 'Email Harsh',
    to: 'mailto:harsh.hkc@protonmail.com',
  },
  {
    name: 'DM on Twitter',
    to: 'https://twitter.com/messages/compose?recipient_id=2525392830&text=Hello%20Harsh',
  },
];
