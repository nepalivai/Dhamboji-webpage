import "./index.css";
import Nav from "./GLOBAL/Nav.js";
import Footer from "./GLOBAL/Footer.js";
import Home from "./page/Home..js";
import About from "./page/About.js";
import Nopage from "./page/Nopage.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./page/News.js";
import Contact from "./page/Contact.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
