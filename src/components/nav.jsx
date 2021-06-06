import React from 'react'

import { Link} from "react-scroll";
export const Nav = () => {
    return (
        <div>
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to =""type = "button">My Website!</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="home" type = "button">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" type = "button" to="contact" smooth = {true} duration = {300}>Contact</Link>
        </li>
        <li className="nav-item dropdown">
        <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" to ="">
          Projects
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="pyc"smooth = {true} duration = {300}>Pychat</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to = "pyc2"smooth = {true} duration = {300}>Pychat 2.0</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="finger"smooth = {true} duration = {300} > Finger cursor</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to = "pyhack" smooth = {true} duration = {300}>Pyhack</Link></li>
          </ul>
        </li>
      </ul>
       
    </div>
  </div>
</nav>
        </div>
    )
}