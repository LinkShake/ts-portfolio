import { ProjectProps } from "../interfaces/ProjectsProps";

export const PROGRAMMING_LANGUAGES = [
  {
    technologyName: "Html5",
    technologyDescription:
      "A markup language used everywhere in web development world to generate the UI components for your webpage. You have to think that, at the origins of W3, sites were almost plain HTML with no interaction or styling: what a quiet age it was!",
    resources: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    technologyName: "Css3",
    technologyDescription:
      "CSS is the go to language for styling components and UI elements. Without CSS, HTML wouldn't be so useful. CSS is perfect for small/medium size applications but, when the UI goes bigger, also styling should: here's why there are some options like Tailwind CSS, Bootsrap, SCSS and so on and so forth",
    resources: "https://web.dev/learn/css/",
  },
  {
    technologyName: "JavaScript",
    technologyDescription:
      "By far the most used programming language in the world, JavaScript it's a great choice because it's easy to learn, intuitive and you can build real world projects without too much problems: maybe this is why it's my favourite language! But the real advantage of using JavaScript in a web project is that you can use it both on the frontend and backend and so share all the code in such an easy way! For bigger apps the go to is absolutely TypeScript: a superset of JavaScript, with a strong type system that helps you catching errors. Because of js' popularity, a lot of frameworks and libraries have been create such as React.js, Svelte, Node.js and Nest.js and so on...",
    resources: "https://javascript.info/",
  },
];
export const TECHNOLOGIES = [
  {
    technologyName: "React.js",
    technologyDescription:
      "React.js is a frontend JavaScript library for building User Interfaces. This the official page says: but, in my opinion, it's a lot more than that. React, backed with nothing less than Meta(Facebook), is the perfect library for big projects because it lets developers build their own custom component mixing js, HTML and even CSS togheter thanks to JSX(a special js format). It also allows you to use Hooks: special functions to manage state and do a lot more with both built-in and custom hooks you can build to suit your needs. React.js also has the biggest frontend library's ecosystem with tons of frameworks (Next.js, Gatsby...), support for cross-platform mobile development with React Native, a lot of tools (such as React Router, React Query, Redux...) and also some dedicated GraphQL clients (such as Relay).",
    resources: "https://reactjs.org/",
  },
];
export const SKILLS_LIST = PROGRAMMING_LANGUAGES.concat(TECHNOLOGIES);
export const LINKS = [
  { profile: "Github", url: "https://github.com/LinkShake" },
];
export const PROJECTS_ARR: Array<ProjectProps> = [
  {
    project: {
      projectName: "Forkify App",
      description: `Forkify is a web app realized with plain vanilla js and based on the MVC architecture. The app allows users to search for recipes, bookmark them, save the recipe's ingredients, plan different recipes for different days and also upload their own ones. The original idea is of Jonas Schmedtmann but I improved the app personally quite a bit, adding features such as improved adding recipes experience, cart, saving dates, full mobile support and so on and so forth...`,
      liveSite: "https://forkify-app-linkshake.netlify.app/",
      githubRepo: "https://github.com/LinkShake/forkify-app",
      imgSrc: "forkify",
      techStack: ["javascript", "html", "scss"],
    },
  },
];
