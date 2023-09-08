import react, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./componets/Navbar";

import Home from "./componets/Home";
import Profile from "./componets/Profile";
import About from "./componets/About";
import NotFound from "./componets/NotFound";
import Contact from "./componets/Contact";
import Note from "./componets/Note"
import Signin from "./componets/Signin"
import Signup from "./componets/Signup"


import { Route, Routes} from "react-router-dom";
import Alert from "./componets/Alert";

function App() {
  return (
    <div className="setBackground">
      <Navbar />

      <Routes>
        <Route index path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/note" element={<Note />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
