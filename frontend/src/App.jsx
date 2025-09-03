import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import ProjectModal from "./components/ProjectModal";
import { useState } from "react";
import Contact from "./components/Contact";
import Experience from "./components/Experience";

function App() {
  const [topic, setTopic] = useState("landing");
  const selectTopic = (selected) => {
    setTopic(selected);
  };
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "../../public/Resume V5 2025.pdf";
    link.download = "AlecFaustino_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  return (
    <>
      <Navigation topic={topic} selectTopic={selectTopic} />
      {topic === "landing" && (
        <Landing
          topic={topic}
          selectTopic={selectTopic}
          handleDownload={handleDownload}
        />
      )}
      {topic === "projects" && (
        <Projects
          setShowModal={setShowModal}
          setSelectedProject={setSelectedProject}
          showModal={showModal}
        />
      )}
      {topic === "experience" && <Experience />}
      {topic === "contact" && (
        <Contact setTopic={setTopic} handleDownload={handleDownload} />
      )}
      <Footer />

      {showModal && (
        <ProjectModal project={selectedProject} setShowModal={setShowModal} />
      )}
    </>
  );
}

export default App;
