import { FC, ReactChild } from "react";
import "components/container/container.scss";

type Props = {
  children: ReactChild | Array<ReactChild>;
};

const Container: FC<Props> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;
