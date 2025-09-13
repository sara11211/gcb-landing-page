import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import News from "./pages/News";
import QHSE from "./pages/QHSE";
import CeoMessage from "./pages/CeoMessage";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/news" element={<News />} />
        <Route path="/qhse" element={<QHSE />} />
        <Route path="/ceo-message" element={<CeoMessage />} />
      </Routes>
    </Router>
  );
}

export default App;