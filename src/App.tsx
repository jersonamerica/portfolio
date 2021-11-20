import { RefObject, useRef } from "react";
import Menu from "components/menu";
import PagesRouter from "components/pagesRouter";
import "./App.scss";

const App = () => {
  const skillsRef = useRef<HTMLElement>(null);

  const handleScroll = (ref: RefObject<HTMLElement>) => {
    ref?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="contents">
      <PagesRouter />
      <Menu skillsOnClick={() => handleScroll(skillsRef)} />
    </div>
  );
};

export default App;
