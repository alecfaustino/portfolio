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
            <h2>aboutMe</h2>
            <p>
              I’m a <strong>software developer</strong> based in{" "}
              <strong>Calgary</strong> with a background in
              <strong>team leadership</strong> and a focus on building{" "}
              <em>thoughtful, user-centered</em> web applications.
            </p>
            <p>
              Before transitioning into tech, I earned a{" "}
              <strong>
                Bachelor of Science in Cellular and Molecular Biology
              </strong>
              , originally planning to pursue medicine. But along the way, I
              realized the reasons I was drawn to that path —
              <strong>continuous learning</strong>,{" "}
              <strong>career growth</strong>, and working in a{" "}
              <strong>professional, problem-solving environment</strong> — were
              also deeply present in <strong>software development</strong>.
            </p>
            <p>
              I began learning the <strong>JavaScript ecosystem</strong> through
              hands-on projects and a <strong>full-time bootcamp</strong>, and
              I’m always open to learning new tools and technologies as the work
              requires.
            </p>
            <p>
              My experience leading teams taught me how to{" "}
              <strong>collaborate</strong>,{" "}
              <strong>solve problems efficiently</strong>, and
              <strong>follow through on delivering results</strong> — skills I
              now bring to writing <strong>clear, maintainable code</strong>.
              I’m looking to join a team where I can continue building{" "}
              <em>useful software</em> and growing as a developer.
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
