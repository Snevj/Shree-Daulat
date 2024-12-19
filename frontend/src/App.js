import Layout from "./components/layouts/Layout";
import React from "react";
import About from "./pages/About/about";

function App() {
  return (
    <div>
      <Layout /> 
      <div className="container">
        <About/>
      </div>
    </div>
  );
}

export default App;
