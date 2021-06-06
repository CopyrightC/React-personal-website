import React ,{useState}from 'react'
export const Contact = () => {
    const [name,setName] = useState("");
    const [msg,setMsg] = useState("");
    const [email,setEmail] = useState("");
    return (
        <>
        <div style = {{position: "absolute",bottom:"-295%",left:"25%",textAlign:'center'}} id = "contact">
            <h1 className ="font"><span className="letter">C</span><span className="letter">o</span><span className="letter">n</span><span className="letter">t</span><span className="letter">a</span><span className="letter">c</span><span className="letter">t</span></h1>
            <br />
            <br />
            <br />
            <font className="ctxt">Your name</font>
            <textarea value={name} onChange = {(eve)=>setName(eve.target.value)} id="textar" cols="100" rows="2" placeholder = "Eg : Elon Musk"></textarea>
            <br />
            <font className="ctxt">Email</font>
            <textarea value={email} onChange = {(eve)=>setEmail(eve.target.value)} id="textar" cols="100" rows="2" placeholder = "yourname@example.com"></textarea>
            <br />
           
            <font className="ctxt">Message</font>
            <textarea value={msg} onChange = {(eve)=>setMsg(eve.target.value)} id="textar" cols="100" rows="15" placeholder = "Message here"></textarea>
            <br />
            
            <button type="button" className="submit btn btn-primary my-3" style = {{width : "120px",height:"50px"}} onClick = {() => {
                if(email&&msg&&name){
            
            setEmail(""); setMsg(""); setName(""); 
            alert("Your message has been sent!")}
            else{alert("Please fill the text box/boxes before submitting!")}}}>Submit</button> 
            </div>
        </>
    )
}
