import './App.css';
import { Navbar } from './components/Navbar';
import { Intro } from './components/Intro';
import { Projects } from './components/Projects'
import { ContactMe } from './components/ContactMe'; 

function App() {
  return (
    <div>

      <Navbar />
      <Intro />
      <Projects />
      <ContactMe />
      
    </div>

  );
}

export default App;
