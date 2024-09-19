import React from "react";
import Error from "./Pages/Errorpage/Error";
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

import { Route, Routes, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/UP-TOWN/" element={<Sharedpages />}>
            <Route index element={<Home />} />
            <Route path="/UP-TOWN/about" element={<About />} />
            <Route path="/UP-TOWN/contactus" element={<Contact />} />
            <Route path="/UP-TOWN/login" element={<Login />} />
            <Route path="/UP-TOWN/signup" element={<Signup />} />
            <Route path="/UP-TOWN/submitted" element={<Submitted />} />
            <Route path="/UP-TOWN/highrise" element={<High />}>
              <Route path="gallery:id" element={<Gallery />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
