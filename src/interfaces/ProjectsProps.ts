export interface ProjectProps {
  project: {
    projectName: string;
    description: string;
    githubRepo: string;
    liveSite?: string;
    imgSrc: string;
    techStack: string[];
  };
}
