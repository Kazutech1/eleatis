import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import Featurespage from "./pages/Featurespage";
import Contactpage from "./pages/Contactpage";

function App() {
  return (
    <Router>
      <div className=" ">
       
        <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/company" element={<Aboutpage />} />
        <Route path="/features" element={<Featurespage />} />
        <Route path="/features" element={<Featurespage />} />
        <Route path="/contact-us" element={<Contactpage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;