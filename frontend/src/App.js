import Layout from "./components/layouts/Layout";
import React from "react";
import About from "./pages/About/about";
import Work from "./pages/Work/experiencepast";
import Contact from "./pages/Contact /contact"
function App() {
  return (
    <div>
      <Layout /> 
      <div className="container">
        <About/>
        <Work />
        <Contact />
      </div>
    </div>
  );
}

export default App;
