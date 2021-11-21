import { FC, ReactChild } from "react";
import "components/container/index.scss";

type Props = {
  children: ReactChild | Array<ReactChild>;
};

const Container: FC<Props> = ({ children }) => {
  return <div className="container">{children}</div>;
};

export default Container;
