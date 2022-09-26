import "../../../style/ProjectsSkillsPage.css";

interface ProjectProps {
  project: {
    projectName: string;
    description: string;
    githubRepo: string;
    liveSite?: string;
  };
}

export const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="project-card">
      <h2>{project.projectName}</h2>
      <p>{project.description}</p>
      <div className="project-links">
        {project.githubRepo && (
          <a href={project.githubRepo} target="_blank" rel="noreferrer">
            Repo &rarr;
          </a>
        )}
        {project.liveSite && (
          <a href={project.liveSite} target="_blank" rel="noreferrer">
            Live site &rarr;
          </a>
        )}
      </div>
    </div>
  );
};
