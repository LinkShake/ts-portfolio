import "../../../style/ProjectsSkillsPage.css";
import { Badge, Box, Image } from "@chakra-ui/react";
import forkify from "../../../images/forkify.png";
import { useContext, useEffect, useState } from "react";
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
  const [boxWidth, setBoxWidth] = useState("40rem");
  const [maxHeight, setMaxHeight] = useState<string>("40rem");

  useEffect(() => {
    const log = () => {
      const width = window.innerWidth;
      if (width <= 768) {
        setBoxWidth("30rem");
      } else if (width <= 500) {
        setBoxWidth("25rem");
      } else if (width <= 360) {
        setBoxWidth("20rem");
      } else if (width <= 300) {
        setBoxWidth("100vw");
      }
    };
    window.addEventListener("resize", log);
    return () => window.removeEventListener("resize", log);
  }, [boxWidth]);

  return (
    <>
      <Box
        maxH={maxHeight}
        // minW="40rem"
        w="fit-content"
        maxW="40rem"
        minW="20rem"
        flexWrap="wrap"
        borderWidth="1px"
        borderRadius="lg"
        overflow="auto"
        overflowX="hidden"
        fontFamily={fontFamily}
        className="project-card"
        onPointerEnter={() => {
          if (queryWidth === "normal") {
            setIsReferenceVisible(true);
            setMaxHeight("none");
          }
        }}
        onPointerLeave={() => {
          if (queryWidth === "normal") {
            setIsReferenceVisible(false);
            setMaxHeight("none");
          }
        }}
      >
        <Image
          src={imgPath()}
          alt={project.projectName}
          w="100%"
          // minW="40rem"
        />
        {/* <Box p="6"> */}
        <Box
          display="flex"
          flexWrap="wrap"
          width={boxWidth}
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
          flexWrap="wrap"
          width={`${+boxWidth - 10}rem`}
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
          <Box w={boxWidth} className="project-links">
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
        {/* </Box> */}
      </Box>
    </>
  );
};
