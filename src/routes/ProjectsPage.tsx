import { Fragment, useEffect, useState } from "react";
import { PROJECTS_ARR } from "../shared/config";
import { ProjectCard } from "../components/pages/projects/ProjectCard";
import "../style/ProjectsSkillsPage.css";
import { Footer } from "../components/global/Footer";
import { Menu } from "../components/global/menu/Menu";
import { DrawerMenu } from "../components/global/menu/Drawer";

export const ProjectsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <Fragment>
      <DrawerMenu />
      {/* <Menu /> */}
      {/* <div className="projects-box"> */}
      {PROJECTS_ARR.map(({ project }) => {
        return <ProjectCard project={project} key={project.projectName} />;
      })}
      {/* </div> */}
      <Footer />
    </Fragment>
  );
};
