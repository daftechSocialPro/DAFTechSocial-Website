import React from 'react'
import {Row,Container, Col } from 'react-bootstrap'
import Swal from 'sweetalert2'

// CommonJS

import axios from 'axios';
import './contact.css'
export default function Contact (){

    const [fullname, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");



const addcontactmessage=()=>{
    console.log(fullname +email+message)

axios.post('http://localhost:2000/create',{
    fullname:fullname,
    email:email,
    message:message
}).then (()=>{
    Swal.fire({
        title: 'Success!',
        text: 'Message send successfully',
        icon: 'success',
        confirmButtonText: 'ok'
      })
    setName("");
    setEmail("");
    setMessage("");
    console.log("success")
}).catch((err)=>{ 

    Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
console.log(`axios error : ${err}`)
})
}


return (

<div>
<div class="page-title-area">
    <div class="d-table">
        <div class="d-table-cell">
            <div class="container">
                <div class="page-title-content">
                    <h2>Contact Us</h2>
                    <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>Contact Us</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </div>


    <section class="features-section bg-grey pt-100 pb-70">
    <div class="container">
        <div class="section-title"></div>
        <Container fluid>

  <div class="row">

                <div class="col-lg-5 d-flex align-items-stretch">
                    <div className="info">
                            <div class="address">
                                <div className="googlemap" >
                                <i class="icofont-google-map"></i>
                                </div>
                                <h4>Location:</h4>
                                <p>Cazanchis Urael</p>
                            </div>
                            <div class="email">
                            <div className="googlemap" >
                                <i class="icofont-envelope"></i>
                                </div>
                                <h4>Email:</h4>
                                <p>kirub.hel@gmail.com</p>
                            </div>
                            <div class="phone">
                            <div className="googlemap" >
                                <i class="icofont-phone"></i>
                                </div>
                                <h4>Call:</h4>
                                <p>+251-919-870-929</p>
                                <p>+251-921-384-181</p>
                            </div>

                        <div class="mapouter">
                            <div class="gmap_canvas">
                                
                            </div>
                        </div>
                    </div>

                </div>

                <div class="col-lg-7  align-items-stretch php-email-form">
                    <div className="messageBOx">
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="name">Your Name</label>
                                <input type="text"  value={fullname} onChange={(event) => setName(event.target.value)} class="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"/>
                                <div class="validate"></div>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="name">Your Email</label>
                                <input type="email" class="form-control" value={email} onChange={(event) => setEmail(event.target.value)} id="email" data-rule="email" data-msg="Please enter a valid email"/>
                                <div class="validate"></div>
                            </div>
                        </div>
                     
                        <div class="form-group">
                            <label for="name">Message</label>
                            <textarea class="form-control" value={message} onChange={(event) => setMessage(event.target.value)} rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
                            <div class="validate"></div>
                        </div>

                        <div class="row">
                            <div class="col-md-8"></div>
                                <div class="col-md-4">
                        <button className="contactmessagebutton" onClick={addcontactmessage}>Send Message</button>
                        </div>
                        </div>

                    </div>
                </div>

            </div>
</Container>




</div>
</section>
    </div>
    
)




}