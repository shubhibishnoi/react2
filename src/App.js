import { React } from "react";

//one dot finds in src folder only , 2 dots finds in parent
//directory

import Card from "../components/Card.js";
// import Hero from "../components/Hero.js";
import Navbar from "../components/Navbar.js";

export default function App() {
  return (
    <div className="container">
      <Navbar />
      {/* <Hero /> */}
      <Card />
    </div>
  );
}
