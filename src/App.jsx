import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Avatar } from "./components/Avatar/Avatar";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Avatar />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App