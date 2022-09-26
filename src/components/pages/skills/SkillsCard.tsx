import "../../../style/ProjectsSkillsPage.css";
interface SkillsProps {
  skill: {
    technologyName: string;
    technologyDescription: string;
    resources?: string;
  };
}
export const SkillsCard: React.FC<SkillsProps> = ({ skill }) => {
  return (
    <div className="skill-card">
      <h2>{skill.technologyName}</h2>
      <p>{skill.technologyDescription}</p>
      <div className="skill-links">
        {skill.resources && (
          <a href={skill.resources} target="_blank" rel="noreferrer">
            Resources &rarr;
          </a>
        )}
      </div>
    </div>
  );
};
