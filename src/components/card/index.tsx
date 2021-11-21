import { FC, ReactChild } from "react";
import "./index.scss";

type Props = {
  children: ReactChild | Array<ReactChild>;
};

const Card: FC<Props> = ({ children }) => {
  return <div className="card">{children}</div>;
};

export default Card;
