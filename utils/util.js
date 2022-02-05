export const graphCMSImageLoader = ({src}) => src;
export const projects = [
  {
    id: 1,
    title: 'xBook',
    desc: 'xBook is a simple application to virtualize your bookshelf. Choose books, read and rate them, record your notes and leave all the hard parts of managing your bookshelf to us.',
    links: [
      {
        website: 'https://xbook.netlify.app',
        github: 'https://github.com/harshkc/xBook',
      },
    ],
    imgSrc: {
      light: 'https://imgur.com/b2IZ5qK.png',
      dark: 'https://imgur.com/CoItMi7.png',
    },
    techs: ['React', 'MSW', 'cypress', 'Emotion'],
  },
  {
    id: 2,
    title: 'UNO-IO',
    desc: 'Play UNO card game online with your friends and chat with them in real time.',
    links: [
      {
        website: 'https://uno-io.vercel.app/',
        github: 'https://github.com/harshkc/uno-io',
      },
    ],
    imgSrc: {
      light: 'https://i.imgur.com/4TpDTtG.jpg',
      dark: 'https://i.imgur.com/4TpDTtG.jpg',
    },
    techs: ['React', 'Node', 'Express', 'Socket.io'],
  },
  {
    id: 3,
    title: 'MPeace',
    desc: 'A QnA platform inspired by StackOverflow but dedicated to mental health support where users can ask about their problems anonymously and achieve mental peace.',
    links: [
      {
        website: 'https://mpeace.vercel.app',
        github: 'https://github.com/harshkc/mpeace',
      },
    ],
    imgSrc: {
      light: 'https://i.imgur.com/I3DUP5H.png',
      dark: 'https://i.imgur.com/BqJzfRE.png',
    },
    techs: ['React', 'Express', 'MongoDB', 'GraphQl'],
  },
  {
    id: 4,
    title: 'Documently',
    desc: 'Documently is a PWA that helps you document your day-to-day transactions and daily Journals int at a single place.',
    links: [
      {
        website: 'https://xpensly.netlify.app',
        github: 'https://github.com/harshkc/documently',
      },
    ],
    imgSrc: {
      light: 'https://i.imgur.com/K14wSod.png',
      dark: 'https://i.imgur.com/nmgQnCa.png',
    },
    techs: ['React', 'Firebase', 'Material-Ui'],
  },
  {
    id: 5,
    title: 'Nidhi Sanchar',
    desc: 'The complete lifecycle of a government scheme can be seamlessly managed by this system. This establishes a platform between center and state government officials.',
    links: [
      {
        website: 'https://nidhisanchar.vercel.app',
        github: 'https://github.com/101Loop/NidhiSanchar',
      },
    ],
    imgSrc: {
      light: 'https://imgur.com/DqNE7A8.png',
      dark: 'https://imgur.com/KLYfTPX.png',
    },
    techs: ['React', 'Django', 'PostgreSQL'],
  },
  {
    id: 6,
    title: 'Portfolio',
    desc: 'The site you are currently on. This also contains original blogs written by Harsh powered by GraphCMS.',
    links: [
      {
        website: 'https://harshkc.tech',
        github: 'https://github.com/harshkc/blogfolio',
      },
    ],
    imgSrc: {
      light: 'https://imgur.com/86GbLcC.png',
      dark: 'https://imgur.com/HKhDuk9.png',
    },
    techs: ['Next', 'GraphQL', 'tailwind css', 'GraphCMS'],
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
