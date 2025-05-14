import React from "react";
import "../styles/Landing.scss";
const Landing = () => {
  return (
    <>
      <div className="landing_main_container">
        <div>
          <img className="landing_main_img" src="../../public/mainphoto.jpg" />
        </div>
        <div className="landing_interactive_container">
          <div className="landing_Aboutme_container">
            <h1>aboutMe</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ut
              omnis, iure quidem totam, quos quae quia explicabo corrupti
              tenetur libero aliquid voluptas ullam minus non, culpa sit
              nesciunt. Earum temporibus obcaecati iure amet eligendi est
              aperiam natus. Nihil, a quod hic quisquam excepturi necessitatibus
              soluta. Quas repellendus quos culpa!
            </p>
          </div>
          <div className="landing_contact_buttons_container">
            <button className="landing_buttons">downloadCV();</button>
            <button className="landing_buttons">contactMe();</button>
          </div>
          <div className="landing_facts_button_container">
            <button className="landing_buttons">randomFact();</button>
            <p>This is where the fact would go</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
