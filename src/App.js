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
  Route
} from "react-router-dom";

function App() {
  const [mode,setmode] = useState({color:'white',
  background:'black'})
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
  // const [color1,setcolor1] = useState({
  //      bg:"#0b0a35",
  //      cl:"white"})
  const [mode1,setmode1] = useState("dark");
  
  const [mystyle,setmystyle] = useState({
    color:'white',
    background:'#0b0a35'
})
  const togglecolor = () =>{
    if(mode.color==='black'){
      setmode({color:'white',
      background:'black'})
      setmode1("dark");
      // setcolor1({
      //   bg:"#0b0a35",
      //   cl:"white"});
      setmystyle({
          color:'white',
          background:'#0b0a35'
      })
      // document.body.style.background = '#0b0a35';
      // document.body.style.color = 'white';
      setalert({
        type:null,
        msg:null});
      
    }
    else{
      setmode({color:'black',
      background:'#b9c4c4'})
      setmode1("Light")
      setmystyle({
        color:'black',
        background:'white'
    })

      // document.body.style.background = 'white';
      // document.body.style.color = 'black';
      // setcolor1({
      //   bg:"white",
      //   cl:"black"});
        showalert("success","Light mode has been enabled.");
    }
    
  }
  if(mode1==="dark"){
    document.body.style.background = '#0b0a35';
      document.body.style.color ='white';
  }
  else if(mode1==="Light"){
     document.body.style.background = 'white';
      document.body.style.color = 'black';
  }
  const convred=()=>{
      
    if(mode.color==='black'){
      document.body.style.background = 'rgb(116 5 5 / 52%)';
    //   setmystyle({
    //     color:'white',
    //     background:'rgb(116 5 5 / 52%)'
    // })
    }
    else{
      document.body.style.background = 'rgb(116, 5, 5)';
    //   setmystyle({
    //     color:'black',
    //     background:'rgb(116, 5, 5)'
    // })

    }
    
  }
  const convorange=()=>{
    if(mode.color==='black'){
    //   setmystyle({
    //     color:'white',
    //     background:'rgb(248 189 20)'
    // })
      document.body.style.background = 'rgb(248 189 20)';
    }
    else{
    //   setmystyle({
    //     color:'black',
    //     background:'rgb(132 102 17)'
    // })
      document.body.style.background = 'rgb(132 102 17)';

    }
  }
  const convgreen=()=>{
    if(mode.color==='black'){
    //   setmystyle({
    //     color:'white',
    //     background:'rgb(44 200 79)'
    // })
      document.body.style.background = 'rgb(44 200 79)';

    }
    else{
    //   setmystyle({
    //     color:'black',
    //     background:'rgb(6 69 20)'
    // })
      document.body.style.background = 'rgb(6 69 20)';
    }
  }
  return (
       <>
       <div>
       <Router>
       {/* <i class="fa fa-sun"></i> */}
      <Navbar funcname = {togglecolor} stname = {mode} clname={mode1} bgred={convred} bgorange={convorange} bggreen={convgreen}/>
      <div style={{height:'3rem'}}>
      <Alert alert={alert}/>
      </div>
      <Switch>
          <Route path="/about">
            <About mystyle={mystyle}/>
          </Route>
          <Route path="/">
             <Textform showalert1={showalert} stname1={mode}/>
          </Route>
      </Switch>
      </Router>
      </div>
      </>
  );
}

export default App;

Navbar.propTypes={
  title : propTypes.string.isRequired,
  abouttext : propTypes.string.isRequired
}

Navbar.defaultProps = {
  title : "TextUtility",
  abouttext : "About"
}