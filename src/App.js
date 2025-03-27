import React from "react";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import "./styles/AboutUs.css";

function App() {
  return (
    <div>
      <Navbar />
      <AboutUs />
    </div>
  );
}
const handleLoginClick = () => {
  alert("Redirection vers la page de connexion...");
  
};

const handleSeeMoreClick = () => {
  alert("Affichage de plus d'informations...");
  
};

export default App;
