import React from "react";
import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
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
    <div style={{ position: "relative" }}>
      <img className="modal_img" src={photos[imageIndex]} />
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
    </div>
  );
};

export default ImageSlider;
