import React from 'react';
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home"
import ContactUs from "./Pages/ContactUs"
import NoPage from "./Pages/404"
import Pricing from "./Pages/Pricing"
import Footer from "./Components/Footer"
import About from "./Pages/Aboutus"
import Videos from "./Pages/Videos"
import Dashboard from "./Pages/Docs"

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route index element={<Home />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="*" element={<NoPage />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/about" element={<About />} />
      <Route path="/videos" element={<Videos />} />
      <Route path="/docs" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}