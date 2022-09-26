import { LINKS } from "../../shared/config";
import GitHubIcon from "../../icons/github-brands.svg";
import "../../style/icons.css";
import "../../style/links.css";

export const Contacts: React.FC = () => {
  return (
    <div className="reference">
      <h1>Me on the web</h1>
      <div className="links-wrapper">
        {LINKS.map(({ profile, url }) => {
          return (
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              key={profile}
              style={{ height: "min-content" }}
            >
              <img
                src={GitHubIcon}
                alt="platform-icon"
                key={profile}
                className="icon"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};
