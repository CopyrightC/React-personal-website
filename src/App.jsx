import './App.css';
import { Nav } from './components/nav.jsx'
import { Home } from "./components/home.jsx"
import { Projects } from "./components/projects.jsx"
import { Contact } from "./components/contact.jsx"
import { Footer } from "./components/footer.jsx"
function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Projects />
      <Contact />
      <Footer></Footer>
    </div>
  );
}

export default App;
