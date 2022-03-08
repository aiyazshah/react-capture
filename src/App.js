import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import AboutUs from "./Pages/AboutUs";
import Nav from "./components/Nav";
import ContactUs from "./Pages/ContactUs";
import OurWork from "./Pages/OurWork";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"


function App() {
  return (
  <Router>
  <div className="App">
      <GlobalStyle/>
      <Nav/>
      <Routes>
      <Route path="/" element={<AboutUs/>}/>
      <Route path="/work" element={ <OurWork/>}/> 
      <Route path="/contact" element={<ContactUs/>}/>
      </Routes>
    </div>
    </Router>
    );
  }

export default App;
 