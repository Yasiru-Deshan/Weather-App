import "./App.css";
import React,{ useState, useEffect} from "react";
import LoginPage from "./pages/loginPage";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
      setIsOpen(!isOpen);
    };
      const [authUser, setAuthUser] = useState(null);

      useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
          if (user) {
            setAuthUser(user);
          } else {
            setAuthUser(null);
          }
        }); return () => {
          listen();
        };
      }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Routes>
        
          <Route path="/" element={authUser? <Home/> : <LoginPage />} />
          <Route path="/home" element={authUser? <Home />:<LoginPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
