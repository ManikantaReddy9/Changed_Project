import "./App.css";
import ChooseEfficiency from "./components/ChooseEfficiency";
import CreditSlides from "./components/CreditSlides";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import RolesDiagram from "./components/RolesDiagram";
import SyntheticDollar from "./components/SyntheticDollar";
import React from 'react'
 
 const App = () => {
   return (
     <div>
       <Navbar />
       <Hero />
       <SyntheticDollar />
       <CreditSlides />
       <RolesDiagram />
       <ChooseEfficiency />
       <Footer />
     </div>
   )
 }
 
 export default App
 
