import React from 'react'
import img from "./images/github.png"
import img2 from "./images/stack.png"
import { Link, animateScroll as scroll } from "react-scroll";
export const Home = () => {
    return (

        <div id="home">
            <h2 className="my-4"><font face="fira code" color="white" className="mx-2 my-4 px-2" >
                Hello, my name is <span className="span"> <span className="letter">S</span><span className="letter">h</span><span className="letter">o</span><span className="letter" >u</span><span className="letter">r</span><span className="letter">y</span><span className="letter">a</span></span></font></h2>
            <div className="me">
                <p><font face="fira code" color="white" className="mx-2 my-4 px-2" >I'm a Student, a <span className="spansub">Pythonista</span>, a <span className="spansub">Networking guy</span> and looking forward to learn <span className="spansub">React native</span></font></p>
                <p><font face="fira code" color="white" className="mx-2 my-4 px-2" >On the internet, I'm known as Copyright(C), quite weird huh?</font></p>
            </div>
            <Link className="nav-link" type="button" to="parent" smooth={true} duration={300}>
                <button type="button" className="mybutton btn btn-info my-3" style={{ width: "20rem", height: "5rem", fontFamily: "fira code", fontSize: "1.37rem" }} >View projects</button>
            </Link>
            <br />
            <div>
                <a href="https://github.com/SATAN01" target="_blank" rel="noopener noreferrer">
                    <button className="conbtn" ><img className="imgcon2" src="https://th.bing.com/th/id/OIP.9l8I2piOxZ-fXAJ614MIdgHaD4?pid=ImgDet&w=800&h=420&rs=1" alt="" /></button>
                </a>
                <a href="https://stackoverflow.com/users/13845215/copyrightc" target="_blank" rel="noopener noreferrer">
                    <button className="conbtn"><img className="imgcon2" src="https://media.wired.com/photos/5926db217034dc5f91becd6b/master/w_1904,c_limit/so-logo-s.jpg" alt="" /></button>
                </a>
            </div>
            <button className="up btn btn-info" onClick={(e) => { scroll.scrollToTop() }}>^</button>
        </div>


    )
}

