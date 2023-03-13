import { useState } from "react";
import React from "react";
import "./App.css";
// import "./index.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode,setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const setAlertMessage = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500)
  }

  const toggleMode = ()=>{
    if(mode === 'dark'){
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setAlertMessage("Light mode has been enabled", "success");
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      setAlertMessage("Dark mode has been enabled", "success");
    }
    
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
              <Route exact path="/about" element={<About/>}/>
                
              
              <Route exact path="/" element={<Textform setAlertMessage={setAlertMessage} headings="Enter the text to analyze below" mode={mode}/>}/>
              
          </Routes>
          {/* <About/> */}
        </div>
      </Router>
    </>
  );
}

export default App;
