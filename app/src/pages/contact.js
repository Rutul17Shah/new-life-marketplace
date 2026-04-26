import React from 'react'
import Axios from 'axios';
import swal from 'sweetalert';

function Contact (){

    function add (){

        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var msg = document.getElementById("comment").value;

        Axios.post('http://localhost:1337/api/support',
        {name:name, email:email ,msg:msg }).then((response)=>{
            if (response.data.message) {
                swal({
                  title: "Success!",
                  text: response.data.message,
                  icon: "success",
                  button: "Aww yiss!",
                })
              } else {
                swal({
                  title: "Something went wrong",
                  icon: "error",
                }).then(() => {
                  window.location = "/";
                });
              }
            })
            .catch((error) => {
              console.error(error);
              swal({
                title: "Something went wrong",
                text: error.message,
                icon: "error",
              });
            });
        };


/*            
        if(response.data.message)
        {           
        swal("Success!", response.data.message, "success").then(() => {
            window.location="/contact";
        });
        }
        else{
        swal('something went wrong').then(() => {
            window.location = "/";
        });
        }
        
        }) 
    }
*/

return(

<>
    <div class="ibanner_w3 pt-sm-5 pt-3">
		<h4 class="head_agileinfo text-center text-capitalize text-center pt-5">
        <span>N</span>ew <span></span>  
            <span>L</span>i<span>f</span>e</h4>
    </div>

    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <a href="/">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Contact Us</li>
        </ol>
    </nav>

    <section class="wthree-row pt-3 pb-sm-5 w3-contact">
        <div class="container py-sm-5 pb-5">
            <h5 class="head_agileinfo text-center text-capitalize pb-5">
                <span>C</span>ontact <span>U</span>s</h5>
            <div class="row contact-form pt-lg-5">
                <div class="col-lg-6 wthree-form-left">
                  
                    <div class="contact-top1">
                        <h5 class="text-dark mb-4 text-capitalize">send us a note</h5>
                       
                            <div class="form-group">
                                <label for="contactusername">Name</label>
                                <input type="text" class="form-control" id="name" required/>
                            </div>
                            <div class="form-group">
                                <label for="contactemail">Email</label>
                                <input type="email" class="form-control" id="email" required/>
                            </div>
                            <div class="form-group">
                                <label for="contactcomment">Your Message</label>
                                <textarea class="form-control" rows="5" id="comment" required></textarea>
                            </div>
                        <button type="submit" class="btn btn-info btn-block" onClick={add}>Submit</button>
                        
                    </div>
                 
                </div>
               
                <div class="col-lg-6 contact-bottom pl-5 mt-lg-0 mt-5">
                   
                    <div class="address">
                        <h5 class="pb-3 text-capitalize">Address</h5>
                        <address>
                            <p class="c-txt">90 Street, City, State 34789.</p>
                            <p class="c-txt">76 Street, City, State 34789.</p>
                        </address>
                    </div>
                   
                    <div class="address my-5">
                        <h5 class="pb-3 text-capitalize">phone</h5>
                        <p>
                            +10 234 5678</p>
                        <p>
                            +11 222 333</p>
                        <p>
                            +12 222 333</p>
                    </div>
                   
                    <div class="address mt-md-0 mt-3">
                        <h5 class="pb-3 text-capitalize">Email</h5>
                        <p>
                            <a href="mailto:info@example.com">mail@communal.com</a>
                        </p>
                        <p>
                            <a href="mailto:info@example.com">mail@communalinfo.com</a>
                        </p>
                    </div>
                   
                </div>
            </div>
           
        </div>
      
        <div class="map contact-right pb-5">
            <div class="pt-lg-5 bg-pricemain text-center">
                <h3 class="stat-title text-capitalize pb-5">get directions</h3>
                <span class="w3-line"></span>
            </div>
            <iframe src="https://maps.google.com/maps?q=vadodara&t=&z=10&ie=UTF8&iwloc=&output=embed" title='HOME'
                allowfullscreen></iframe>
                
        </div>
      
    </section>
</>

);

};
export default Contact;