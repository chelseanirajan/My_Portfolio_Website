import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Nirajan Karki',
  title: "Hi all, I'm Nirajan",
  description:
    'I am an experienced software developer with nearly 6 years of expertise in designing, developing, and implementing' +
    ' full- stack applications using Java, Spring, Hibernate, Microservices, REST, JWT, Angular, React, Redux, Oracle, IntelliJ, and Spring Tool Suite.I am well-versed in Agile Software Development Life Cycle methodologies, possess strong programming and problem - solving skills, and have a track record of delivering top - quality, high - performance, and secure software solutions while maintaining effective communication.',
  resumeLink:
    'https://docs.google.com/document/d/1vlfldr4dKEThoRR9GFk0bphZQfg1AeaPmf0E-mKzxNg/edit?usp=sharing',
};

export const openSource = {
  githubUserName: 'chelseanirajan',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://chelseanirajan.github.io/',
  linkedin: 'https://www.linkedin.com/in/nirajan-karki/',
  github: 'https://github.com/chelseanirajan',
  instagram: 'https://www.instagram.com/__nirajan__karki/',
  facebook: 'https://www.facebook.com/nirajankarkey/',
  twitter: '',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle:
    "I'M A JAVA FULL STACK DEVELOPER WHO HAS A STRONG DESIRE TO EXPLORE AND MASTER A WIDE RANGE OF TECHNOLOGY STACKS.",
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡  Creating and implementing efficient, scalable, and robust server-side software using Java and associated frameworks'
        ),
        emoji(
          '⚡ Designing and building APIs to facilitate data exchange between the frontend and backend systems'
        ),
        emoji(
          '⚡ Building and maintaining Angular and React components that make up the user interface.'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Angular',
          iconifyTag: 'logos:angular-icon',
        },
        {
          skillName: 'Java',
          iconifyTag: 'logos:java',
        },
        {
          skillName: 'Node',
          iconifyTag: 'vscode-icons:file-type-node',
        },

        {
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'Azure',
          iconifyTag: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          iconifyTag: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          iconifyTag: 'logos:github-actions',
        },
        {
          skillName: 'Cloudinary',
          iconifyTag: 'logos:cloudinary',
        },
        {
          skillName: 'Nginx',
          iconifyTag: 'logos:nginx',
        },
        {
          skillName: 'Sentry',
          iconifyTag: 'logos:sentry-icon',
        },
      ],
    },
    {
      title: 'Professional Highlights',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ I have experience working with both relational databases like Oracle and non-relational databases like MongoDB in various projects.'
        ),
        emoji(
          '⚡ Automating testing and deployment of Java and Angular projects with JUnit for Java and Mocha and Chai for Angular enhances development efficiency and reliability.'
        ),
        emoji(
          '⚡ Creating a responsive and reactive web application with both Angular and React.js enables the development of user-friendly, adaptable, and real-time interactive experiences across diverse screen sizes and devices.'
        ),
        emoji(
          '⚡ Participated in and well-versed with all Scrum/Agile ceremonies, such as Daily Standups, Sprint Planning, Sprint Review, and Sprint Retrospectives, ensuring effective project management and collaboration.'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Scrum Agile',
          iconifyTag: 'feather:users', // Using a team or users icon to symbolize the collaborative aspect of Scrum Agile.
        },
        {
          skillName: 'Oracle Database',
          iconifyTag: 'logos:oracle',
        },
        {
          skillName: 'Automation',
          iconifyTag: 'logos:python', // Using the Python logo to symbolize automation, as Python is commonly used for automation tasks.
        },
        {
          skillName: 'D3js',
          iconifyTag: 'logos:d3',
        },
        {
          skillName: 'Problem Solving',
          iconifyTag: 'bi:check2-circle', // This icon represents successful problem solving
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Java, J2EE, SpringBoot, JSF, Node, Express, Prisma, TypeScript', //Insert stack or technology you have experience in
    progressPercentage: '90', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Javascript, Angular, React, Redux, AJAX',
    progressPercentage: '80',
  },
  {
    Stack: 'MySQL, MsSql, Oracle, MongoDB, DyanmoDB',
    progressPercentage: '90',
  },
  {
    Stack: 'BitBucket, Bamboo, Cloud Computing, Docker, Kubernetis, Jenkis',
    progressPercentage: '90',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Mahrishi International University',
    subHeader: 'Master of Science in Computer Science',
    duration: 'Aug 2022 - April 2025',
    desc: '', //'I am pursuing a Master of Science in Computer Science at Maharishi International University, with an anticipated completion date in April 2025.',
    grade: '4.0GPA',
    descBullets: [
      // 'Completed on-campus course.',
      // 'Done two course project using front-end and back-end technology',
    ],
  },
  {
    schoolName: 'Kathford Engineering College',
    subHeader: 'Bachelor in Engineering',
    duration: 'Nov 2011 - Aug 2015',
    desc: '',
    grade: '71%',
    descBullets: [
      // 'Completed on-campus course.',
      // 'Done two course project using front-end and back-end technology',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Software Engineer',
    company: 'Cotiviti Nepal.',
    companyLogo: '/img/icons/common/cot.jpeg',
    date: 'Jan 2021 – Aug 2022',
    desc: ' I helped to migrate a monolithic JSF application (MI Project) to a microservice architecture. I developed different services like member, claims, emergency medical, demography, and Director Access Service using Spring Boot, Hibernate, Angular, Kafka, MongoDB, Oracle DB, and cloud computing.',
  },
  {
    role: 'Jugal RM',
    company: 'Information Technology Officer',
    companyLogo: '/img/icons/common/JRM.png',
    date: 'Jan 2018 – Dec 2022',
    desc: 'I developed two applications: a revenue collection management system and an inventory management system. I built REST APIs using Spring Framework, Spring Boot, and Hibernate, and I created the user interface using Angular. I also wrote SQL for the MySQL database.',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: 'Java Developer',
    company: 'Business Veins',
    companyLogo: '/img/icons/common/BV.png',
    date: 'Sept 2016 - Oct 2017',
    desc: ' I designed, developed, and implemented an ERP system for a hotel. I built different modules like account, front desk, housekeeping, HR, and laundry using Spring Boot for the backend and JQuery and JSP for the frontend. We used MS SQL for the database.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Image Processing Application',
    desc: 'The Image Processing Microservice Application is a Java-based, cloud-native solution designed to provide efficient and scalable image processing services. This project leverages microservice architecture to achieve modularity, scalability, and maintainability, making it suitable for a wide range of image-related applications.',
    github: 'https://github.com/chelseanirajan',
    link: 'https://github.com/chelseanirajan/Spring-base-microservice',
  },
  {
    name: 'Pikachu Render App',
    desc: 'The "Pikachu Render Game" is a fun and interactive web application built using React. It challenges users to identify the correct Pikachu from a set of randomly rendered Pikachu images. This project is designed for entertainment and can be an enjoyable pastime for Pikachu fans of all ages.',
    github: 'https://github.com/chelseanirajan',
    link: 'https://github.com/chelseanirajan/pikachu-render-app',
  },
  {
    name: 'Badge & Membership System',
    desc: 'Created application based on RESTful services where members with membership in specified plans can use a badge to enter a location. Developed a web application as member of 5-person team with features including log-in, customer dashboard for maintaining members, faculty, member addition/update for memberships',
    github: 'https://github.com/chelseanirajan',
    link: 'https://github.com/chelseanirajan/EA-Final-project',
  },
  {
    name: 'Group Chat App',
    desc: 'The "Real-Time Group Chat Application" is a modern and feature-rich chat platform that allows users to create groups and communicate in real time. It provides a seamless and interactive way for users to exchange messages, files, and multimedia content within groups.',
    github: 'https://github.com/chelseanirajan',
    link: 'https://github.com/chelseanirajan/node-chat-app',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'Amazon ElastiCache',
    feedback:
      'AWS ElastiCache is a managed in-memory data store and cache service that makes it easy to deploy, operate, and scale a distributed in-memory data store or cache environment in the cloud. It supports Memcached and Redis, two popular open-source in-memory data stores.',
    imageUrl:
      'https://d2908q01vomqb2.cloudfront.net/887309d048beef83ad3eabf2a79a64a389ab1c9f/2019/10/01/Caching-for-performance-A.jpg',
    blogLink: 'https://dev.to/chelseanirajan/amazon-elasticache-4lmh',
  },
  {
    name: 'Java 17 LTS',
    feedback:
      'Java 17 will be supported for a longer time than other versions of Java. This means that it will get security and bug fixes for a longer time, which is important for keeping your applications safe and reliable.',
    imageUrl:
      'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20211004004324/JDK-17-%E2%80%93-New-Features-in-Java-17.png',
    blogLink: 'https://dev.to/chelseanirajan/java-17-lts-l0h',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Nirajan Karki',
  description:
    'An enthusiastic developer proficient in Java, Angular, and React, with expertise in Full Stack Web Development and Cloud Computing.',
  author: 'Nirajan Karki',
  image:
    'https://github.com/chelseanirajan/chelseanirajan.github.io/blob/main/img/abc.jpg?raw=true',
  url: 'https://chelseanirajan.github.io/',
  keywords: [
    'Nirajan',
    'Nirajan Karki',
    '@nirajankarki',
    'Nirajan',
    'Portfolio',
    'Nirajan Portfolio',
    'Nirajan Karki Portfolio',
  ],
};
