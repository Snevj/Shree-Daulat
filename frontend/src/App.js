import Layout from "./components/layouts/Layout";
import React from "react";
import About from "./pages/About/about";
import Work from "./pages/Work/experiencepast";

function App() {
  return (
    <div>
      <Layout /> 
      <div className="container">
        <About/>
        <Work />
      </div>
    </div>
  );
}

export default App;
