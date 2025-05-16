const projectsList = [
 {
    id: 1,
    title: "Lotide",
    description: "A mini clone of the Lodash library",
    stack: ["javascript"],
    deployedUrl: "https://www.npmjs.com/package/@alecfaustino/lotide",
    repoURL: "https://github.com/alecfaustino/Lotide",
    isDeployed: true, 
    highlights: ["This project helped me understand JavaScript fundamentals. This helped me gain a strong understanding of how functions work in JavaScript. This allowed me to also gain appreciation for modern helper functions, and libraries that make asserting/testing easier."],
    photo: "/lotide.png"
  },
   {
    id: 2,
    title: "Snake",
    description: "Snake clone that has multi-player capability",
    stack: ["javascript", "expressjs", "nodejs"],
    deployedUrl: null,
    repoURL: "https://github.com/alecfaustino/snake-client",
    isDeployed: false, 
    highlights: ["This project allowed me to understand the difference between Client and Server Code responsibilities. Used TCP to create client/server implementation in Node. This was also an introduction to asynchronous programming, callbacks, event handlers, and HTTP."],
    photo: "/snake.png"
  },
     {
    id: 3,
    title: "TinyApp",
    description: "TinyApp is a full-stack web application built with Node and Express that allows users to shorten long URLs.",
    stack: ["javascript", "expressjs", "nodejs", "cookies", "bcrypt"],
    deployedUrl: null,
    repoURL: "https://github.com/alecfaustino/tinyapp",
    isDeployed: false, 
    highlights: [""],
    photo: "/snake.png"
  },
  {
    id: 4,
    title: "The Kid's Place Daycare",
    stack: ["html", "css", "javascript"],
    deployedUrl: "https://thekidsplacedaycare.com/",
    repoURL: "Private Repo",
    isDeployed: true, 
    highlights: ["This project was intended to be for me to learn and explore the basic vanilla HTML, CSS, and JavaScript. I ended up learning key-skills like mobile-first development and responsive design. This was created with no external libraries or frameworks. I Collaborated directly with the client to translate their vision into a site that highlighted key services and encouraged lead generation."],
    photo: "/thekidsplacedaycare.png"
  },

];

export default projectsList;