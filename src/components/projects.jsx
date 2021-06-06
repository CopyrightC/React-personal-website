import React from 'react'
import pyc from "./images/pyc.png"
import pyc2 from "./images/pyc2.png"
import react1 from "./images/react1.png"
export const Projects = () => {
    return (
    
        <div id= "projects" style =  {{position : "absolute", top : "100%", left : "20%"}}>
            <h1 className ="font"><span className = "letter">M</span><span className = "letter">y</span><span className = "letter"> p</span><span className = "letter">r</span><span className = "letter">o</span><span className = "letter">j</span><span className = "letter">e</span><span className = "letter">c</span><span className = "letter">t</span><span className = "letter">s</span><span className = "letter">!</span></h1>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={pyc} className="" alt="..."></img>
    </div>
    <div className="carousel-item">
      <img src={pyc2} className="d-block w-100" alt="..."></img>

    </div>
    <div className="carousel-item">
      <img src={react1} className="d-block w-100" alt="..."></img>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

        <p id="text">So, I have been programming for a while now, which ulimately led me to develop some cool projects. Here's a list of my top 4 projects : </p> 
        <hr className = "hr"/>
        <div class= "container" id = "pyc">
        <p className="listitem">
          
        1.<a href="https://github.com/SATAN01/GUI-chat-app" target= "_blank" rel="noopener noreferrer"><font className = "my-3 mx-3">Pychat</font> </a>
          <br/>
          <br />
          As the name suggests, Pychat is a GUI chatting app made in python, mainly with the help of tkinter and the sockets module.
          It also has a <a href="https://github.com/SATAN01/TCP-server.py-client.py">CLI predecessor.</a>
          Pychat also is one of my first networking projects. Though back then it was one of my best projects, it had a 
          drawback. The problem was that the app only supported the open chat feature and no one on one chatting.
          <br />
          <br />
          </p>
          </div>
          <hr className = "hr"/>
          <div class= "container" id = "pyc2">
          <p className="listitem">
        2. <a href="https://github.com/SATAN01/DogeChat" target = "_blank" rel="noopener noreferrer">Pychat 2.0</a> (Also known as <i>DogeChat</i>)
        <br />
        <br />
          With considering the problems with Pychat, I decided to make Pychat 2, supported by presonal group chatting,
          one on one chatting, and with a tons of more features like settings page, support for different resoulutions
          which is generally not provided in most of the <i>tkinter</i> built-in GUI's
        </p>
        </div>
        <hr className = "hr"/>
        <div className="container" id ="finger">
        <p className="listitem">
        3. <a href="https://github.com/SATAN01/Control-mouse-with-your-fingers" target = "_blank" rel="noopener noreferrer"><font className = "my-3 mx-3">Finger cursor</font></a>
        <br />
        <br />
        Ever been in a situation when your mouse battery just dies and you can't do anything with it? 
        Not sure about you but I've been in that situation for a million times now and so I decieded to make a app that would 
        help me control my cursor just with movement of my fingers. Well that's what this repository does.
        You can control the cursor with your index finger and left click by raising your index and the middle.
        The app internally uses the <i>open cv</i> and <i>mediapipe</i> module to perform the task. 
        </p>
        </div>
        <hr className= "hr"/>
        <br />

        <div className="container" id="pyhack">
        <p className= "listitem">
          4. <a href="https://github.com/SATAN01/Advance-Hack-with-python" target = "_blank" rel="noopener noreferrer">PyHack!</a>
          <br />
          <br />
          The name explains it all, it's a hacking tool I made in python 3.9.
          To get this working you first need to set up port forwarding on your router or use a
          3rd party app like Ngrok, which I personally use for all my networking tasks.
          Once that's done, run the server on your pc and the <i>client.py</i> on the target windows machine.You're all 
          set now! You almost have full control of the victim's machine.
          Read the readme.md file of the repo for more information.

        </p>
        </div>
        </div>

        
      
    )
}
