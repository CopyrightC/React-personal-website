import React from 'react'
import img from "./images/github.png"
import img2 from "./images/stack.png"
import { Link, animateScroll as scroll } from "react-scroll";
export const Home = () => {
    return(
        <>
    <div id="home"style= {{position : "absolute",top : "30%",left : "20%"}}>
        <h2 className= "my-4"><font face="fira code" size="6"color = "white" className = "mx-2 my-4 px-2" >
        Hello, my name is <span className ="span"> <span className = "letter">S</span><span className = "letter">h</span><span className = "letter">o</span><span className = "letter" >u</span><span className = "letter">r</span><span className = "letter">y</span><span className = "letter">a</span></span></font></h2>
        <p><font face="fira code" size="4" color = "white" className = "mx-2 my-4 px-2" >I'm a Student, a <span className ="spansub">Pythonista</span>, a <span className ="spansub">Networking guy</span> and looking forward to learn <span className ="spansub">React native</span></font></p>
        <p><font face="fira code" size="4" color = "white" className = "mx-2 my-4 px-2" >On the internet, I'm known as Copyright(C), quite weird huh?</font></p>
        <Link className="nav-link" type = "button" to="projects" smooth = {true} duration = {300}>
        <button type="button" className="mybutton btn btn-info my-3" style = {{width : "200px",height:"50px",fontFamily : "fira code"}} >View my projects</button> 
        </Link>
        <br/>
        <a href="https://github.com/SATAN01" target="_blank" rel="noopener noreferrer">
        <button className= "mx-2 my-4"style = {{borderRadius : "50%",height : "58px",width:"58px",backgroundColor : "white"}}><img src={img} alt= ""/></button>
        </a>  
        <a href="https://stackoverflow.com/users/13845215/copyrightc" target="_blank" rel="noopener noreferrer"> 
        <button style = {{borderRadius : "50%",height : "58px",width:"58px",backgroundColor : "white"}}><img src={img2} alt= ""/></button>
        </a>

    </div>
    <button className ="up btn btn-info" onClick = {() => {scroll.scrollToTop()}}>^</button>
    </>
)}

