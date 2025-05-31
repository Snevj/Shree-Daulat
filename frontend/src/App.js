import React from "react";
import Layout from "./components/layouts/Layout";
import About from "./pages/About/about";
import Work from "./pages/Work/experiencepast";
import Gallery from "./pages/Gallery/gallery";
import Contact from "./pages/Contact /contact";
import ScrollToTop from "react-scroll-to-top";
import MobileNav from "./components/mobileNav/mobileNav";


function App() {
  return (
    <>
      <MobileNav />
      <Layout /> 
      <div className="container">
        <About/>
        <Gallery/>
        <Work/>
        <Contact/>
      </div>
      <div className="footer mb-3 ms-3">
        <h4 className="text-center">For contacting, dial +91 8764019044</h4>
        <h4 className="text-center">or email us at madhuvijay2969@gmail.com</h4>
      </div>
      <ScrollToTop smooth />
    </>
  );
}

export default App;
