import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./sections/navbar/Navbar";
import Home from "./pages/Home";
import CeoMessage from "./pages/CeoMessage";
import Footer from "./sections/footer/Footer";
import Projets from "./pages/Projets";
import News from "./pages/News";
import QHSE from "./pages/QHSE";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ceo-message" element={<CeoMessage />} />
            <Route path="/projects" element={<Projets />} />
            <Route path="/news" element={<News />} />
            <Route path="/qhse" element={<QHSE />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
