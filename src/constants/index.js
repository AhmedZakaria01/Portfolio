export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'Movie App - Show Discovery Platform',
    desc: 'I designed and developed a Movie & TV Show Discovery Platform that provides users with a seamless and engaging way to explore trending, popular, and top-rated movies and TV shows. The platform features detailed information about each title, including cast, reviews, and recommendations, making it easy for users to discover new content and make informed viewing decisions.',
    subdesc:
      'The platform successfully provides users with a comprehensive and enjoyable way to discover movies and TV shows. It has received positive feedback for its clean design, intuitive navigation, and rich content.',
    href: 'https://ahmedzakaria01.github.io/Movie-App/',
    texture: '/textures/project/movie.mp4',
    logo: '/assets/movie-logo.png',
    logoStyle: {
      backgroundColor: '#000',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Tailwind',
        path: 'assets/tailwindcss.png',
      },
    ],
  },
  {
    title: 'GAME OVER - Free-To-Play Game Tracker',
    desc: 'I developed a static website called Gamers Hub, developed to help users track and discover the best free-to-play games. The website includes features like user registration, login with validations, and a dashboard to record and plan gaming activities. It’s a simple yet effective platform for gamers to organize their gaming experiences.',
    subdesc:
      'The website provides a user-friendly platform for gamers to organize their gaming activities and discover new free-to-play games. The registration and login system ensures a personalized experience for users.',
    href: 'https://ahmedzakaria01.github.io/Gamers/',
    texture: '/textures/project/game-over.mp4',
    logo: '/assets/gamers-logo.png',
    logoStyle: {
      backgroundColor: '#000',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Bootstrap',
        path: 'assets/bootstrap.png',
      },
    ],
  },
  {
    title: 'HYDRA VR',
    desc: 'I created a static website for HYDRA VR, a virtual reality experience, to introduce users to its features and benefits. The site provides an overview of the technology, hardware, and user experiences offered by HYDRA VR, with a clean and engaging design.',
    subdesc:
      'The website effectively communicated HYDRA VRs offerings, providing a visually appealing and user-friendly platform for potential customers.',
    href: 'https://ahmedzakaria01.github.io/HYDRA/',
    texture: '/textures/project/hydra.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'HTML',
        path: '/assets/html.png',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/css.png',
      },
      {
        id: 3,
        name: 'JS',
        path: '/assets/js.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Namaa Infologistics',
    pos: 'React Developer',
    duration: '2024 - Present',
    title:
      'React Developer at Namma Infologistics, where I design and develop scalable and efficient web applications. My responsibilities include building reusable components, optimizing performance, and ensuring seamless user experiences. This role has allowed me to grow as a developer while contributing to impactful projects.',
    icon: '/assets/namaa.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'ITI',
    pos: 'Web Development Training',
    duration: '2023',
    title:
      'Joined the ITI’s web development track, where I deepened my knowledge of full-stack development principles. The program emphasized best practices in coding, version control, and project management, further preparing me for real-world development challenges.',
    icon: '/assets/iti.png',
    animation: 'salute',
  },
  {
    id: 3,
    name: 'Innovalz',
    pos: 'Front End Developer Intern',
    duration: '2022',
    title:
      'As an intern at Innovalz, I collaborated with a team of developers to create and maintain web applications. I contributed to building user-friendly interfaces, debugging code, and implementing new features using React. This experience helped me refine my technical skills and understand the importance of teamwork in a professional environment.',
    icon: '/assets/innovalz.png',
    animation: 'clapping',
  },
  {
    id: 4,
    name: 'Route',
    pos: 'Front End Training',
    duration: '2022 ',
    title:
      'Completed an intensive front-end development course at Route Academy, where I gained hands-on experience in modern web technologies, including HTML, CSS, JavaScript, and React. This foundational training equipped me with the skills to build responsive and dynamic user interfaces.',
    icon: '/assets/route.png',
    animation: 'salute',
  },
];
