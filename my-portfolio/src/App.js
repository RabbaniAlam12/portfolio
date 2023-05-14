import './App.css';
import { Navbar } from './components/Navbar';
import { Intro } from './components/Intro';
import { Projects } from './components/Projects'
import { ContactMe } from './components/ContactMe';
import Particles from "react-particles";
 
// Want to add particles

function App() {
  return (
    <div>

      <Navbar />
      <Particles/>
      <Intro />
      <Projects />
      <ContactMe />
      
    </div>

  );
}

export default App;
