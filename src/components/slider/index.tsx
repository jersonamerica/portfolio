import { PointerEvent, PointerEventHandler, useRef, useState } from "react";

import "./slider.scss";

const options = ["ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN"];

const Slider = () => {
  const [highlightWidth, setHighlightWidth] = useState(0);
  const [selectedIndex, setselectedIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const updateSelectedIndex = (ev: PointerEvent<Element> | MouseEvent) => {
    if (sliderRef.current) {
      const slider = sliderRef.current.getBoundingClientRect();
      const cellWidth = slider.width / options.length;
      const index = Math.max(
        0,
        Math.min(
          options.length - 1,
          Math.ceil((ev.clientX - slider.x) / cellWidth) - 1
        )
      );

      const nextPos = (index / (options.length - 1)) * 100;

      setselectedIndex(index);
      setHighlightWidth(nextPos);
    }
  };

  const handlePointerDown: PointerEventHandler = (ev) => {
    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    updateSelectedIndex(ev);
  };

  const handlePointerMove = (ev: MouseEvent) => {
    ev.preventDefault();
    updateSelectedIndex(ev);
  };

  console.log(`selectedIndex: `, selectedIndex);

  const handlePointerUp = (ev: MouseEvent) => {
    window.removeEventListener("pointermove", handlePointerMove);
    window.removeEventListener("pointerup", handlePointerUp);
  };

  return (
    <div className="slider-wrapper">
      {/* @ts-ignore */}
      <div
        className="slider"
        ref={sliderRef}
        onPointerDown={handlePointerDown}
        role="slider"
        aria-valuenow={options[selectedIndex]}
        aria-valuemin={options[0]}
        aria-valuemax={options[options.length - 1]}
      >
        <div className="slider-track">
          <div
            className="slider-highlight"
            style={{
              width: `${highlightWidth}%`,
            }}
          />
        </div>
        <div
          className="slider-thumb"
          style={{
            left: `${highlightWidth}%`,
          }}
        />
        <div
          className="slider-value"
          style={{
            left: `${highlightWidth}%`,
          }}
        >
          {options[selectedIndex]}
        </div>
      </div>
    </div>
  );
};

export default Slider;
