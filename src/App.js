import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Hero />
      <About />
    </Router>
  );
}

export default App;
