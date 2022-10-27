import { Box, Progress } from "@chakra-ui/react";
import "../../../style/ProjectsSkillsPage.css";

interface SkillsProps {
  skills: SkillObj[];
}

interface SkillObj {
  skill: string;
  percent: number;
}

export const SkillsComponent: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <>
      <div className="skills-description">
        For the time being I'm particularly procient in JavaScript, and so am I
        in TypeScript. I'm focusing mainly on web technologies like React.js,
        that is my <i>go to</i> library for production and I've also tried
        Svelte.js but never really felt like it. On the backend the obvious
        solutions in Node.js: nothing but plain js that can run on the server
        (so outside the browser). As I previously mentioend, I'm working to
        become a software engineer so I'll learn also my will is to learn also
        db like mongodb or postgresql, and to dive deep in mobile development
        with React Native.
      </div>
      <Box>
        {/* <Progress value={90} height="200px" backgroundColor="white" /> */}
        {skills.map(({ skill, percent }) => {
          let color;
          switch (skill) {
            case "Frontend":
              color = "darkMagenta";
              break;
            case "Backend":
              color = "darkCyan";
              break;
            case "React.js":
              color = "dodgerBlue";
              break;
            case "Node.js":
              color = "gold";
              break;
            default:
              break;
          }
          return (
            <div key={skill}>
              <h2 className="skill">{skill}</h2>
              <Progress
                value={percent}
                size={"lg"}
                colorScheme="messenger"
                // key={skill}
                // color="aqua"
                backgroundColor={color}
                width={`${percent - 20}vw`}
                height="20px"
              />
              <br />
            </div>
          );
        })}
      </Box>
    </>
  );
};
