const projectsList = [
  {
    id: 1,
    title: "Lotide",
    description: "A mini clone of the Lodash library",
    stack: ["javascript", "mocha", "chai", "git"],
    deployedUrl: "https://www.npmjs.com/package/@alecfaustino/lotide",
    repoURL: "https://github.com/alecfaustino/Lotide",
    isDeployed: true,
    highlights:
      "This project helped me understand JavaScript fundamentals. This helped me gain a strong understanding of how functions work in JavaScript. This allowed me to also gain appreciation for modern helper functions, and libraries that make asserting/testing easier.",
    photo: ["/lotide.png"],
  },
  {
    id: 2,
    title: "Snake",
    description: "Snake clone that has multi-player capability",
    stack: ["javascript", "expressjs", "nodejs", "git"],
    deployedUrl: null,
    repoURL: "https://github.com/alecfaustino/snake-client",
    isDeployed: false,
    highlights:
      "This project allowed me to understand the difference between Client and Server Code responsibilities. Used TCP to create client/server implementation in Node. This was also an introduction to asynchronous programming, callbacks, event handlers, and HTTP.",
    photo: ["/snake.png"],
  },
  {
    id: 3,
    title: "TinyApp",
    description:
      "TinyApp is a full-stack web application built with Node and Express that allows users to shorten long URLs.",
    stack: [
      "javascript",
      "expressjs",
      "nodejs",
      "cookies",
      "bcrypt",
      "bootstrap",
      "git",
    ],
    deployedUrl: null,
    repoURL: "https://github.com/alecfaustino/tinyapp",
    isDeployed: false,
    highlights:
      "This project helped me learn to build an HTTP Server that handles requests from the client. This also introduced concepts like authentication protection, use cookies to gather information about logged-in state, and analytics of the URLs, etc. Importantly, there was an implementation of CRUD.",
    photo: [
      "/tinyapp.png",
      "/tinyapp2.png",
      "/tinyapp3.png",
      "/tinyapp4.png",
      "/tinyapp5.png",
    ],
  },
  {
    id: 4,
    title: "Tweeter",
    description:
      "A Single Page App built with HTML, CSS, JS, JQuery, and AJAX. A twitter clone.",
    stack: [
      "javascript",
      "html",
      "node",
      "ajax",
      "jquery",
      "expressjs",
      "sass",
      "git",
    ],
    deployedUrl: null,
    repoURL: "https://github.com/alecfaustino/tweeter",
    isDeployed: false,
    highlights:
      "This project gave a lot of exposure to understanding CSS Flexbox, responsive design, DOM Manipulation using JavaScript and jQuery.",
    photo: ["/tweeter.png", "/tweeter2.png", "/tweeter4.png"],
  },
  {
    id: 5,
    title: "LighthouseBNB",
    description:
      "A simple multi-page AirBnB clone that uses server-side JavaScript to display the infomration via SQL Queries to web pages.",
    stack: [
      "javascript",
      "postgresql",
      "expressjs",
      "sass",
      "cookies",
      "jquery",
      "git",
    ],
    deployedUrl: null,
    repoURL: "https://github.com/alecfaustino/LightBnB",
    isDeployed: false,
    highlights:
      "This project helped me gain a deeper understanding of relational databases, database security, and database design. The primary focus of this project was to work with Entity Relationship Diagrams and postgreSQL",
    photo: [
      "/lightbnb.png",
      "/lightbnb2.png",
      "/lightbnb3.png",
      "/lightbnb4.png",
      "/lightbnb5.png",
    ],
  },
  {
    id: 6,
    title: "PhotoLabs",
    description:
      "React-based single-page application that allows users to view photos in different contexts.",
    stack: ["react", "expressjs", "nodejs", "sass", "postgresql", "git"],
    deployedUrl: null,
    repoURL: "https://github.com/alecfaustino/photolabs",
    isDeployed: false,
    highlights:
      "This project a great introduction to React and hooks. I utilized useState, useEffect, useReducer, and some custom hooks.",
    photo: ["/photolabs.png", "photolabs2.png"],
  },
  {
    id: 7,
    title: "The Kid's Place Daycare",
    description:
      "A responsive, client-collaborated website to showcase daycare services and drive lead generation.",
    stack: ["html", "css", "javascript", "git"],
    deployedUrl: "https://thekidsplacedaycare.com/",
    repoURL: "Repo Unavailable: Private Repo",
    isDeployed: true,
    highlights:
      "This project was intended to be for me to learn and explore the basic vanilla HTML, CSS, and JavaScript. I ended up learning key-skills like mobile-first development and responsive design. This was created with no external libraries or frameworks. I collaborated directly with the client to translate their vision into a site that highlighted key services and encouraged lead generation.",
    photo: ["/thekidsplacedaycare.png", "/thekidsplacedaycare2.png"],
  },
  {
    id: 8,
    title: "Resource Wall",
    description:
      "A pin board for learners to share and keep learning resources.",
    stack: [
      "ejs",
      "nodejs",
      "postgresql",
      "expressjs",
      "jquery",
      "javascript",
      "sass",
      "git",
    ],
    deployedUrl: null,
    repoURL: "https://github.com/alecfaustino/Resource-Wall",
    isDeployed: false,
    highlights:
      "This midterm project was the first collaborative coding experience I had. There were a lot of valuable lessons, such as version control and project management with a team. I felt that this project bolstered a lot of learning especially with backend routes/apis. I collaborated with a peer with a similar experience level which allowed us to enhance our communication and collaborative abilities.",
    photo: ["/resourcewall.png", "/resourcewall2.png", "/resourcewall3.png"],
  },
  {
    id: 9,
    title: "NOMinate",
    description: "An infinite scroll app to find your next meal idea.",
    stack: ["nextjs", "typescript", "react", "tailwindcss", "git"],
    deployedUrl: "https://nominate2-seven.vercel.app/home",
    repoURL: "Repo Unavailable: Private Repo",
    isDeployed: true,
    highlights:
      "This project was a great opportunity to work with React and implement infinite scrolling. I learned a lot about state management and API integration (spoonacular API). I also implemented request throttling and a proxy backend (deployed on Render) to secure API keys. Designed a LinkedIn-style three-column layout (on larger screens) with plain CSS for a clean, responsive UI.",
    photo: ["/nominate4.png"],
  },
  {
    id: 10,
    title: "FavFlix",
    description:
      "A movie browsing app using Next.js with Tailwind CSS and Material UI.",
    stack: ["nextjs", "typescript", "tailwindcss", "react", "git"],
    deployedUrl: "https://favflix-nine.vercel.app/",
    repoURL: "Repo Unavailable: Private Repo",
    isDeployed: true,
    highlights:
      "Integrated the TMDB API via server components, implementing server-rendered pages, dynamic routing, and search functionality. Deployed on Vercel. Used Tailwind CSS and Material UI for consistent styling. Gained experience with Next.js features like server-side rendering and static site generation.",
    photo: ["/favflix.png", "/favflix1.png"],
  },
];

export default projectsList;
