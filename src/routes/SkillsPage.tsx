import { SkillsComponent } from "../components/pages/skills/SkillsComponent";
import { Fragment, useLayoutEffect } from "react";
import { SKILLS } from "../shared/config";
import { Footer } from "../components/global/Footer";
import { DrawerMenu } from "../components/global/menu/Drawer";
import "../style/SkillsPage.css";

export const SkillsPage: React.FC = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      {/* <TopBanner /> */}
      <DrawerMenu />
      <div className="skills-wrapper">
        {/* {SKILLS_LIST.map((skill) => {
          return <SkillsCard skill={skill} key={skill.technologyName} />;
        })} */}
        <SkillsComponent skills={SKILLS} />
      </div>
      <Footer />
    </>
  );
};
