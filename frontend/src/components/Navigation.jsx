import React from "react";
import "../styles/Navigation.scss";

const Navigation = () => {
  return (
    <>
      <div className="nav_container">
        <div className="nav_branding">
          <img
            className="nav_img"
            src="../../public/compressed_image_new.jpg"
            alt="small photo of Alec Faustino"></img>
          <span className="nav_name">Alec Faustino</span>
        </div>
      </div>
    </>
  );
};

export default Navigation;
