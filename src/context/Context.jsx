import { Children, createContext } from "react";

export const InfoContext = createContext();

const data = {
  fullName: "Mohammad Esmile Dabir",
  email: "esmaildabir786@gmail.com",
  github: "https://github.com/EsmileDabir",
  shortDescription:
    "Skilled in Frontend Development (React, MERN) & exploring Machine Learning Passionate about building impactful projects and solving real-world problems.",
  description:
    "I specialize in building clean, responsive, and user-centric web applications with modern frontend technologies like React.js, Next.js, and Tailwind CSS. With a strong foundation in Data Structures, Algorithms, DBMS,Computer Networking and Operating Systems, I strive to merge theoretical knowledge with practical development. My projects include a Movie Recommendation System powered by machine learning, GhostRoom, a real-time discussion platform for students. Currently, I’m focused on sharpening my UI/UX design skills, improving interactivity, and exploring scalable frontend architectures. Driven by curiosity and a commitment to continuous learning, I aim to create engaging digital experiences that put users first.",
  linkedin: "https://www.linkedin.com/in/esmiledabir/",
  skills: [
    "NLP","MachineLearning","Problem Solving","Html",
    "Css",
    "JS",
    "React JS",
    "Node JS",
    "Express JS",
    "Mongo Db",
    "Java",
    "C/C++",
    "MySql",
    "Git",
    "Github",
    "Tailwind Css",
    "Redux",
    "Oop",
    
    "BootStrap",
  ],
  experiences: [
    {
      role: "Junior Software Developer",
      time: "May 2025-June 2025",
      companyName: " NexaChain Core Pvt. Ltd. ",
      description:
        "Worked on frontend development using React.js, contributing to MERN-based blockchain and Web3 modules. Built and optimized UI components, integrated frontend with backend APIs, and collaborated with teams to enhance decentralized applications. Strengthened skills in debugging, clean code practices, and gained exposure to Web3 technologies and decen-tralized platforms. Additionally, improved problem-solving skills by working on real-time project requirements and learned to adapt quickly to new tools and workflows in a startup environment."},
  ],
  // certificates: [
  //   {
  //     title: "Responsive Web Design",
  //     issuer: "freeCodeCamp",
  //     date: "August 2025",
  //     link: "https://freecodecamp.org/certification/fcc-9636e7de-ba0d-4e9f-92c4-c1fbab8678ba/responsive-web-design",
  //     image:'Certificate1.png'
  //   }, 
  //   {
  //     title: "HTML, CSS and JS",
  //     issuer: "Udemy",
  //     date: "August 2025",
  //     link:"https://www.udemy.com/certificate/UC-fc67f7af-2342-47f4-b0e8-a878a0bcc57a",
  //     image:'Certificate2.jpg'
  //   },
  //   {
  //     title: "Complete Linux Training",
  //     issuer: "Udemy",
  //     date: "Oct 2024",
  //     link: "https://www.udemy.com/certificate/UC-3c60c6c2-8205-45b6-bb79-99bc8766e792",
  //     image:"Certificate3.png"
  //   },
  //    {
  //     title: "Problem Solving with C",
  //     issuer: "Udemy",
  //     date: "Oct 2024",
  //     link: "https://www.udemy.com/certificate/UC-d80f6d43-2baa-48ce-b1bf-0b776f7999c0",
  //     image:"Certificate4.png"
  //   },
  //    {
  //     title: "Python for Complete Beginner",
  //     issuer: "Udemy",
  //     date: "Oct 2024",
  //     link: "https://www.udemy.com/certificate/UC-4b2c6ead-0d43-48b7-9b20-d8f525caa49a",
  //     image:"Certificate5.png"
  //   },
  //    {
  //     title: "The Complete MySQL Bootcamp: Go from Beginner to Expert",
  //     issuer: "Udemy",
  //     date: "Jul 2025",
  //     link: "https://www.udemy.com/certificate/UC-25bd9d30-0727-48dd-a5d3-0b4124fa31af",
  //     image:"Certificate6.png"
  //   },
  // ],
  projects: [
    {
      title: "Full-Stack E-Commerce Platform",
      image:"Project1.png",
      description:
        "Full-Stack E-Commerce Platform is a comprehensive and modern e-commerce solution designed to deliver a seamless shopping experience for users and robust management tools for administrators. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), this platform showcases full-stack development skills and real-world application of modern web technologies",
      projectInfo: {
        year: 2025,
        role: "Front-end Developer",
      },
      teckStack: ["react js", "node js", "express js", "mongodb","tailwind", "flow-bite"],
      links: {
        liveDemo: "https://frontend-ecommerce-gamma-beryl.vercel.app",
        github: "https://github.com/Ui-Adiii/Ecommerce",
      },
    },
    {
      title: "Full-Stack Blog App",
      image:"Project2.png",
      description:
        "A modern full-stack blogging platform built with MongoDB, Express.js, React.js, and Node.js. It features secure authentication (JWT & OAuth), rich post creation with image uploads, real-time comments, user/admin dashboards, and a clean UI for writing and reading blogs.",
      projectInfo: {
        year: 2025,
        role: "Full Stack Developer",
      },
      teckStack: [
        "react js",
        "node js",
        "express js",
        "mongodb",
        "tailwind",
        "shadcn ui",
      ],
      links: {
        liveDemo: "https://frontend-blog-rho.vercel.app/",
        github: "https://github.com/Ui-Adiii/Blog-App",
      },
    },
  ],
};

const ContextProvider = ({ children }) => {
  return <InfoContext.Provider value={data}>{children}</InfoContext.Provider>;
};
export default ContextProvider;
