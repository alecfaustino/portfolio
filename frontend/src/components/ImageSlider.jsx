import React from "react";
import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight, CircleDot, Circle } from "lucide-react";
import "../styles/ImageSlider.scss";
import { ImPrevious2 } from "react-icons/im";

const ImageSlider = ({ photos }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const showNextImage = () => {
    setImageIndex((prev) => {
      if (prev === photos.length - 1) return 0;

      return prev + 1;
    });
  };

  const showPrevImage = () => {
    setImageIndex((prev) => {
      if (prev === 0) return photos.length - 1;

      return prev - 1;
    });
  };
  return (
    <div className="img_slider_container">
      <div className="img_slider_render">
        {photos.map((photo) => (
          <img
            key={photo}
            className="modal_img"
            src={photo}
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
      </div>

      {photos.length > 1 && (
        <>
          <button
            onClick={showPrevImage}
            style={{ left: 0 }}
            className="img_slider_btn">
            <ArrowBigLeft />
          </button>
          <button
            onClick={showNextImage}
            style={{ right: 0 }}
            className="img_slider_btn">
            <ArrowBigRight />
          </button>
        </>
      )}
      <div className="img_slider_selectors">
        {photos.length > 1 &&
          photos.map((_, index) => (
            <button
              className="img_slider_dots"
              key={index}
              onClick={() => setImageIndex(index)}>
              {index === imageIndex ? <CircleDot /> : <Circle />}
            </button>
          ))}
      </div>
    </div>
  );
};

export default ImageSlider;
