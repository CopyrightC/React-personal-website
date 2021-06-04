import React from 'react'
import {Link,BrowserRouter as Router} from 'react-router-dom'
export const Home = () => {
    return(
    <div>
        <h3 className= "my-4"><font face="fira code" size="6"color = "white" className = "mx-2 my-4 px-2" >Hello, my name is <span class ="span"> Shourya</span></font></h3>
        <p><font face="fira code" size="4" color = "white" className = "mx-2 my-4 px-2" >I'm a Student, a <span class ="spansub">Pythonista</span>, a <span class ="spansub">Networking guy</span> and looking forward to learn <span class ="spansub">React native</span></font></p>
        <button type="button" className="mybutton btn btn-info my-3" style = {{width : "120px",}}>View</button>
        
    </div>
)}

//<a href="https://github.com/SATAN01"target="_blank"><img src = "https://img.icons8.com/plasticine/2x/github.png"></img></a>
