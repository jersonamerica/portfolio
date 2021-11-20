import { useRef } from "react";
import Container from "components/container";
import Intro from "components/intro";
import Skills from "components/skills";
import WorkExperiences from "components/work";
import LightSpeed from "react-reveal/LightSpeed";

const Home = () => {
  const skillsRef = useRef<HTMLElement>(null);

  return (
    <div className="contents">
      <Container>
        <LightSpeed>
          <Intro />
        </LightSpeed>
        <Skills skillsRef={skillsRef} />
        <WorkExperiences />
      </Container>
    </div>
  );
};

export default Home;
