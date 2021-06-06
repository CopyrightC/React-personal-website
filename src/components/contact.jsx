import React from 'react'
export const Contact = () => {
    return (
        <>
        <div style = {{position: "absolute",bottom:"-285%",left:"25%",textAlign:'center'}} id = "contact">
            <h1 className ="font">Contact</h1>
            <br />
            <br />
            <br />
            <font className="ctxt">Your name</font>
            <textarea id="textar" cols="100" rows="2" placeholder = "yourname@example.com"></textarea>
            <br />
            <font className="ctxt">Email</font>
            <textarea id="textar" cols="100" rows="2" placeholder = "yourname@example.com"></textarea>
            <br />
           
            <font className="ctxt">Message</font>
            <textarea id="textar" cols="100" rows="15" placeholder = "yourname@example.com"></textarea>
            <br />
            
            <button type="button" className="submit btn btn-primary my-3" style = {{width : "120px",height:"50px"}}>Submit</button> 
            </div>
        </>
    )
}
