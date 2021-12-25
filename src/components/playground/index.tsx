import Slider from "components/slider";

import "./playground.scss";

const Playground = () => {
  return (
    <div className="playground">
      <nav>
        <h1>Playground</h1>
        <ul>
          <li>nav1</li>
          <li>nav2</li>
          <li>nav3</li>
        </ul>
      </nav>
      <main>
        <Slider />
        {/* <video autoPlay loop>
          <source src="./test.mp4" type="video/mp4" />
        </video> */}
      </main>
    </div>
  );
};

export default Playground;
