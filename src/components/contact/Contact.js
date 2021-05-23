import React from "react";

import './contact.css'

function Contact() {
  return (
    <div className="contact">
      <div >
      <h2 style={{marginTop: 60, fontSize:30, color:'#fff', textDecoration: 'underline'}}>Contact</h2>
      <p style={{margin: 10, fontSize:20, color:'#04c2c9'}}>Have a question or want to work together?</p>
        <form >
          <input name="name" placeholder="name" type="text" /><br/>
          <input name="email" placeholder="email" type="email"/><br/>
          <textarea name="textarea" placeholder="message"/><br/>
          <button type="submit" style={{padding: 10}}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
