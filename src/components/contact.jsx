import React, { useState } from 'react'
import "./styles/contact.css"
export const Contact = () => {
    const [name, setName] = useState("");
    const [msg, setMsg] = useState("");
    const [email, setEmail] = useState("");
    return (
        <div className="container">
            <div className="contact">
                <h1 className="font con"><span className="letter">C</span><span className="letter">o</span><span className="letter">n</span><span className="letter">t</span><span className="letter">a</span><span className="letter">c</span><span className="letter">t</span></h1>
            </div>
            <div className="conitems">
                <a href="https://discord.gg/Q9N2SMCMnh" target="_blank" rel="noopener noreferrer">
                    <button className="conbtn">
                        <img className="imgcon" src="https://maxcdn.icons8.com/Share/icon/Logos/discord_logo1600.png" alt="" />
                    </button>
                </a>
                <a href="https://mail.google.com/mail/u/0/?fs=1&to=shouryasinha001@gmail.com&su=&tf=cm" target="_blank" rel="noopener noreferrer">
                    <button className="conbtn">
                        <img className="imgcon" src="https://th.bing.com/th/id/OIP.cSbfIgYccd9lYvryaZc_QQHaHa?pid=ImgDet&rs=1" alt="" />
                    </button>
                </a>

            </div>
        </div>
    )
}
