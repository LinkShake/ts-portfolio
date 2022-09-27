import { Link } from "react-router-dom";

export const ProjectsReference: React.FC = () => {
  return (
    <div className="reference">
      <h1>Projects</h1>
      <div className="content-wrapper">
        <div className="text-container">
          <p>
            If you're still here, well, I hope because you're interested in what
            I have to show! This last section is all about my current and future
            projects! I'll update it as soon as I'll have something new to show
            to the world! But if you're interested in seeing some "behind the
            scenes" make sure to go to my{" "}
            <a
              id="github-link"
              href="https://github.com/LinkShake"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>{" "}
            profile!
          </p>
        </div>
      </div>
      <div className="route-container">
        <Link to="/projects" style={{ textDecoration: "none" }}>
          <button className="btn--route">More &rarr;</button>
        </Link>
      </div>
    </div>
  );
};
