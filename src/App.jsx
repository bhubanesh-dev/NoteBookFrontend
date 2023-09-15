import react,{useState} from "react";

import "./App.css";
import Navbar from "./componets/Navbar";

import Home from "./componets/Home";
import Profile from "./componets/Profile";
import About from "./componets/About";
import NotFound from "./componets/NotFound";
import Contact from "./componets/Contact";
import Notes from "./componets/Notes";
import Signin from "./componets/Signin";
import Signup from "./componets/Signup";

import { Route, Routes } from "react-router-dom";
import Alert from "./componets/Alert";
import UserState from "./context/user/UserState";
import NoteState from "./context/note/noteState";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000)}
  return (
    <div className="setBackground">
      <UserState>
        <NoteState  showAlert={showAlert} >
          <Navbar />
          <Alert alert={alert}/>
          <Routes>
            <Route index path="/" element={<Home   showAlert={showAlert}/>} />
            <Route exact path="/about" element={<About  showAlert={showAlert} />}/>
            <Route exact path="/note" element={<Notes  showAlert={showAlert} />}/>
            <Route exact path="/profile" element={<Profile  showAlert={showAlert} />}/>
            <Route exact path="/contact" element={<Contact  showAlert={showAlert} />}/>
            <Route exact path="/signin" element={<Signin  showAlert={showAlert} />}/>
            <Route exact path="/signup" element={<Signup  showAlert={showAlert} />}/>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </NoteState>
      </UserState>
    </div>
  );
}

export default App;
