import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import { useState } from "react";

function App() {
  const [topic, setTopic] = useState("landing");
  const selectTopic = (selected) => {
    setTopic(selected);
  };
  return (
    <>
      <Navigation onClick={selectTopic} />
      <Landing />
      <Footer />
    </>
  );
}

export default App;
