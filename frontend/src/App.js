import Layout from "./components/layouts/Layout";
import React from "react";
import About from "./pages/About/about";
import Work from "./pages/Work/experiencepast";
import Contact from "./pages/Contact /contact"
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
      <Layout /> 
      <div className="container">
        <About/>
        <Work />
        <Contact />
      </div>
      <div className="footer mb-3 ms-3">
        <h4 className="text-center">For contacting, dial +91 8764019044</h4>
      </div>
      <ScrollToTop smooth />
    </>
  );
}

export default App;
