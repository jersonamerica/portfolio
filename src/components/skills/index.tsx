import { useState, useEffect, CSSProperties, FC, LegacyRef } from "react";
import {
  LogoReact,
  LogoNodejs,
  LogoCss3,
  LogoHtml5,
  LogoJavascript,
  GitBranchOutline,
  LogoAngular,
} from "react-ionicons";
import "components/skills/skills.scss";

type Props = {
  skillsRef: LegacyRef<HTMLElement>;
};

const Skills: FC<Props> = ({ skillsRef }) => {
  const [beat, setBeat] = useState<number>(0);
  const skills = [
    {
      name: "Node js",
      color: "#3B7F3A",
      icon: LogoNodejs,
    },
    {
      name: "Javascript",
      color: "#EAD41C",
      icon: LogoJavascript,
    },
    {
      name: "CSS",
      color: "#1A6DB1",
      icon: LogoCss3,
    },
    {
      name: "HTML",
      color: "#D84924",
      icon: LogoHtml5,
    },
    {
      name: "React js",
      color: "#5CCFEE",
      icon: LogoReact,
    },
    {
      name: "Angular",
      color: "#B9002D",
      icon: LogoAngular,
    },
    {
      name: "Git",
      color: "#E44D31",
      icon: GitBranchOutline,
    },
    {
      name: "Typescript",
      color: "#0073C0",
      icon: () => (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
          alt="Typescript"
          width="60px"
          height="60px"
        />
      ),
    },
  ];

  useEffect(() => {
    const beatTimeout = setInterval(() => {
      const random = Math.floor(Math.random() * skills.length);
      setBeat(beat === random ? random - 1 || random + 1 : random);
    }, 1800);
    return () => {
      clearInterval(beatTimeout);
    };
  }, [beat, skills.length]);

  return (
    <section ref={skillsRef}>
      <div
        className="skills"
        style={{ "--length": skills.length } as CSSProperties}
      >
        <h2>SKILLS</h2>
        {skills.map((skill, index) => (
          <li key={index} style={{ "--i": index } as CSSProperties}>
            {
              <skill.icon
                height="70px"
                width="70px"
                beat={beat === index}
                color={skill.color}
                title={skill.name}
              />
            }
          </li>
        ))}
      </div>
    </section>
  );
};

export default Skills;
