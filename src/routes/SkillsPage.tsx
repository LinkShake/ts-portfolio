import { TopBanner } from "../components/pages/common/TopBanner";
import { SkillsCard } from "../components/pages/skills/SkillsCard";
import { Fragment, useLayoutEffect } from "react";
import { SKILLS_LIST } from "../shared/config";
import { Footer } from "../components/global/Footer";
import "../style/TopBanner.css";
import { Menu } from "../components/global/menu/Menu";

export const SkillsPage: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Fragment>
      {/* <TopBanner /> */}
      <Menu />
      <div className="skills-box">
        {SKILLS_LIST.map((skill) => {
          return <SkillsCard skill={skill} key={skill.technologyName} />;
        })}
      </div>
      <Footer />
    </Fragment>
  );
};
