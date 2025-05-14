import React from "react";
import "../styles/Landing.scss";
const Landing = () => {
  return (
    <>
      <div className="landing_main_container">
        <div className="landing_image_container">
          <img className="landing_main_img" src="../../public/mainphoto.jpg" />
        </div>
        <div className="landing_interactive_container">
          <section className="landing_Aboutme_container">
            <h1>aboutMe</h1>
            <p>
              I’m a <strong>software developer</strong> based in{" "}
              <strong>Calgary</strong> with a background in
              <strong> team leadership</strong> and a focus on building
              <em> thoughtful, user-centered</em> web applications. I began
              learning the
              <strong> JavaScript ecosystem</strong> through hands-on projects
              and <strong> Lighthouse Labs bootcamp</strong>, and I’m always
              open to learning new tools and technologies as the work requires.
            </p>
            <p>
              My experience leading teams taught me how to
              <strong> collaborate</strong>,{" "}
              <strong>solve problems efficiently</strong>, and
              <strong> follow through on delivering results</strong> — skills I
              now bring to writing <strong>clear, maintainable code</strong>.
              I’m looking to join a team where I can continue building{" "}
              <em>useful software</em> and growing as a developer. You can find
              more about my experience in my CV below.
            </p>
          </section>
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
