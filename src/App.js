import "./App.css";
import Contact from "./section/contact";
import Header from "./section/header";
import Hero from "./section/hero";
import Project from "./section/project";
import Skills from "./section/skills";
import Work from "./section/work";

function App() {
  return (
    <div>
      <Header/>
      <Hero />
      <Skills />
      <Work />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
