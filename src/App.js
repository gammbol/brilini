import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Hero />
    </Router>
  );
}

export default App;
