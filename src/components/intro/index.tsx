import "components/intro/Intro.scss";
import { ChevronDownOutline } from "react-ionicons";

const Intro = ({ inputRef }: any) => {
  return (
    <section className="intro-wrapper" ref={inputRef}>
      <div className="intro-image">
        <img src="/images/jers.jpg" alt="Jerson America" />
      </div>
      <div className="name">Jerson America</div>
      <div className="bio">
        <p>
          <span>Web developer</span> by day
        </p>
        <p>
          <span>Gamer</span> by night
        </p>
      </div>
      <div className="down-arrow">
        <ChevronDownOutline color="#fff" beat width="30px" height="30px" />
      </div>
    </section>
  );
};

export default Intro;
