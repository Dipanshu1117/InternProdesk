import { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";

function App() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
    </div>

  );
}

export default App;
