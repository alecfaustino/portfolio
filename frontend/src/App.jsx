import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import { useState } from "react";

function App() {
  const [topic, setTopic] = useState("landing");
  const selectTopic = (selected) => {
    setTopic(selected);
  };
  return (
    <>
      <Navigation topic={topic} selectTopic={selectTopic} />
      {topic === "landing" && (
        <Landing topic={topic} selectTopic={selectTopic} />
      )}
      {topic === "projects" && <Projects />}
      {topic === "experience" && <h1>Experience</h1>}
      {topic === "interests" && <h1>Interests</h1>}
      {topic === "contact" && <h1>Contact Page Coming Soon</h1>}
      <Footer />
    </>
  );
}

export default App;
