import { FC, ReactChild, useEffect } from "react";
import "components/container/index.scss";

type Props = {
  children: ReactChild | Array<ReactChild>;
};

const Container: FC<Props> = ({ children }) => {
  useEffect(() => {
    const container = document.querySelector(".container");
    container?.classList.add("loading");
    setTimeout(() => {
      container?.classList.remove("loading");
    }, 900);
  }, []);
  return <div className="container">{children}</div>;
};

export default Container;
