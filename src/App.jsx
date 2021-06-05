import './App.css';
import {Nav} from './components/nav.jsx'
import {Home} from "./components/home.jsx"
import {Projects} from "./components/projects.jsx"
import {Link,BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <Projects/>
    </div>
  );
}

export default App;
