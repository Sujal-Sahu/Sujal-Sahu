import './App.css'
import propTypes from "prop-types";
import Navbar from './components/navbar';
import Textform from './components/textform';
import About from './components/about';
import Alert from './components/Alert';
import React,{ useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode,setmode] = useState({
    color:'black',
    background:'white'
  })
  const [alert,setalert] = useState({
    type:null,
    msg:null});
  const showalert=(type,message)=>{
    setalert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setalert({
        type:null,
        msg:null});
    }, 1500);
  }
  const [mode1,setmode1] = useState("light");
  const togglecolor = () =>{
    if(mode.color==='black'){
      setmode({color:'white',
      background:'black'})
      setmode1("dark");
      document.body.style.background = '#0b0a35';
      document.body.style.color = 'white';
      showalert("success","dark mode has been enabled.");
    }
    else{
      setmode({color:'black',
      background:'white'})
      setmode1("Light")
      document.body.style.background = 'white';
      document.body.style.color = 'black';
      setalert({
        type:null,
        msg:null});
    }
    
  }
  return (
       <>
       <Router>
      <Navbar funcname = {togglecolor} stname = {mode} clname={mode1}/>
      <Alert alert={alert}/>
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
             <Textform showalert1={showalert}/>
          </Route>
      </Switch>
      </Router>
      </>
  );
}

export default App;

Navbar.propTypes={
  title : propTypes.string.isRequired,
  abouttext : propTypes.string.isRequired
}

Navbar.defaultProps = {
  title : "set TiTle here",
  abouttext : "Set about text here"
}