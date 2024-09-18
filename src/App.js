import React from "react";
import Home from "./Pages/Homepage/Home";
import About from "./Pages/AboutPage/About";
import High from "./Pages/HighRisePage/High";
import Login from "./Pages/Login/Login";
import Contact from "./Pages/ContactUsPage/Contact";
import Signup from "./Pages/Login/Signup";
import Gallery from "./Pages/Gallery/Gallery";
import Submitted from "./Pages/Submitted/submitted";
import Sharedpages from "./SharedPages/Sharedpages";
import { AppProvider } from "./Components/Hooks/context";

import { Route, Routes, HashRouter } from "react-router-dom";

const App = () => {
  return (
    <AppProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Sharedpages />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contactus" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="submitted" element={<Submitted />} />
            <Route path="highrise" element={<High />}>
              <Route path="gallery:id" element={<Gallery />} />
            </Route>
          </Route>
        </Routes>
      </HashRouter>
    </AppProvider>
  );
};

export default App;
