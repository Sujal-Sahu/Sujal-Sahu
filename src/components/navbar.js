import React from 'react';
import {
  Link
} from "react-router-dom";
// import PropTypes from "prop-types"
export default function Navbar(props){
    return(
        <div className="blank">
        <nav className="navbar navbar-expand-lg" style={props.stname}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"  style={props.stname}>{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/" style={props.stname}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about" style={props.stname}>{props.abouttext}</Link>
        </li>
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" style={props.stname} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li> */}
      </ul>
      <div className="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" className="btn btn-danger" onClick={props.bgred}>Red</button>
  <button type="button" className="btn btn-warning" onClick={props.bgorange}>Yellow</button>
  <button type="button" className="btn btn-success" onClick={props.bggreen}>Green</button>
</div>
      <div className="form-check form-switch mx-2">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.funcname}/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={props.stname}>Enable Light Mode</label>
</div>
    </div>
  </div>
</nav>

      </div> 
    )
}

