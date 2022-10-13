import "../../../style/ProjectsSkillsPage.css";
import { Badge, Box, Image } from "@chakra-ui/react";
import forkify from "../../../images/forkify.png";
import { useContext, useState } from "react";
import { FontFamily } from "../../../contexts/FontFamily";
import { ProjectProps } from "../../../interfaces/ProjectsProps";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

const BadgeCss = {
  borderRadius: ".25rem",
  // padding: "2",
  padding: ".2rem",
  colorScheme: "teal",
  backgroundColor: "gray",
  textTransform: "uppercase",
  fontSize: "14px",
} as React.CSSProperties;

export const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  const imgPath = () => {
    switch (project.imgSrc) {
      case "forkify":
        return forkify;
      default:
        return "";
    }
  };
  const fontFamily = useContext(FontFamily);
  const [isReferenceVisible, setIsReferenceVisible] = useState(false);
  const queryWidth = useMediaQuery();

  return (
    <>
      <Box
        minW="40rem"
        w="40rem"
        borderWidth="1px"
        borderRadius="lg"
        overflow="auto"
        fontFamily={fontFamily}
        className="project-card"
        onPointerEnter={() => {
          if (queryWidth === "normal") setIsReferenceVisible(true);
        }}
        onPointerLeave={() => {
          if (queryWidth === "normal") setIsReferenceVisible(false);
        }}
      >
        <Image
          src={imgPath()}
          alt={project.projectName}
          w="40rem"
          minW="40rem"
        />
        <Box p="6">
          <Box
            display="flex"
            alignItems="baseline"
            gap={"10px"}
            marginLeft="2vw"
            marginTop="1vh"
          >
            {project.techStack.map((technology) => (
              <Badge
                borderRadius={BadgeCss.borderRadius}
                px="2"
                padding={BadgeCss.padding}
                colorScheme={BadgeCss.colorScheme}
                backgroundColor={BadgeCss.backgroundColor}
                textTransform={BadgeCss.textTransform}
                fontSize={BadgeCss.fontSize}
                key={technology}
              >
                {technology}
              </Badge>
            ))}
          </Box>
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            padding="2rem"
            // noOfLines={1}
          >
            {project.description}
          </Box>
          {isReferenceVisible && (
            <Box minW="40rem" w="40rem" className="project-links">
              {project.githubRepo && (
                <a href={project.githubRepo} target="_blank" rel="noreferrer">
                  Repo &rarr;
                </a>
              )}
              {project.liveSite && (
                <a href={project.liveSite} target="_blank" rel="noreferrer">
                  LiveSite &rarr;
                </a>
              )}
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};
