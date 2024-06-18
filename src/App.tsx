import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AboutUs from "./components/AboutUs";
import Contacts from "./components/Contacts";
// import HomeSubmenu2 from "./components/Navbar/SubMenu/HomeSubmenu2";
// import AboutSubmenu1 from "./AboutSubmenu1";
// import AboutSubmenu2 from "./AboutSubmenu2";
// import ServicesSubmenu1 from "./ServicesSubmenu1";
// import ServicesSubmenu2 from "./ServicesSubmenu2";
// import ContactsSubmenu1 from "./ContactsSubmenu1";
// import ContactsSubmenu2 from "./ContactsSubmenu2";
import Footer from "./components/Footer/Footer"

const App: React.FC = () => {
  return (
    <Router>
      {/* <div className="flex flex-col min-h-screen"> */}
      <Navbar />
      {/* <main className="flex-grow container mx-auto p-4"> */}
        <Routes>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
          
{/*         
          <Route path="/services/submenu1" element={<ServicesSubmenu1 />} />
          <Route path="/services/submenu2" element={<ServicesSubmenu2 />} />
          <Route path="/contacts/submenu1" element={<ContactsSubmenu1 />} />
          <Route path="/contacts/submenu2" element={<ContactsSubmenu2 />} /> */} 
        </Routes>
        {/* </main> */}
        <Footer/>
      
      {/* </div> */}
    </Router>
   
  );
};

export default App;

