import React from 'react'
import Axios from 'axios';
import swal from 'sweetalert';

function Register (){


    function reg(){
        var name=document.getElementById('name').value;
        var email=document.getElementById('email').value;
        var address=document.getElementById('address').value;
        var mob=document.getElementById('mob').value;
        var pass=document.getElementById('pass').value;
        
        
        Axios.post('http://localhost:1337/api/insert',
        {name:name, email:email ,address:address ,mob:mob ,pass:pass }).then((response)=>{
            if (response.data.message) {
                swal({
                  title: "Success!",
                  text: response.data.message,
                  icon: "success",
                  button: "Aww yiss!",
                }).then(() => {
                  window.location ="/";
                })
              } else {
                swal({
                  title: "Something went wrong",
                  icon: "error",
                }).then(() => {
                  window.location = "/register";
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
        swal(response.data.message).then(() => {
            window.location = "/";
        });
        }
        else{
        swal('something went wrong').then(() => {
            window.location = "/register";
        });
        }
        
        })
        }
*/


return(

<>
<div class="agilemodal-dialog modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Register Now</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body pt-3 pb-5 px-sm-5">
                    <div class="row">
                        <div class="col-md-6 mx-auto align-self-center">
                            <img src="./res/images/p3.png" class="img-fluid" alt="login_image" />
                        </div>
                        <div class="col-md-6">
                            
                                <div class="form-group">
                                    <label for="recipient-name1" class="col-form-label">Your Name</label>
                                    <input type="text" class="form-control" placeholder=" " name="Name" id="name" required/>
                                </div>
                                <div class="form-group">
                                    <label for="recipient-email" class="col-form-label">Email</label>
                                    <input type="email" class="form-control" placeholder=" " name="Email" id="email" required/>
                                </div>
                                <div class="form-group">
                                    <label for="recipient-name1" class="col-form-label">Your Phone Number</label>
                                    <input type="tel" pattern="[0-9]{10}" class="form-control" placeholder=""  name="numb" id="mob" required/>
                                </div>
                                <div class="form-group">
                                    <label for="recipient-name1" class="col-form-label">Your Address</label>
                                    <input type="text" class="form-control" placeholder=" " name="address" id="address" required/>
                                </div>
                                <div class="form-group">
                                    <label for="password1" class="col-form-label">Password</label>
                                    <input type="password" class="form-control" placeholder=" " name="Password" id="pass" required/>
                                </div>
                                <div class="form-group">
                                    <label for="password2" class="col-form-label">Confirm Password</label>
                                    <input type="password" class="form-control" placeholder=" " name="Confirm Password" id="pass2" required/>
                                </div>
                                <div class="sub-w3l">
                                    <div class="sub-agile">
                                        <input type="checkbox" id="brand2" value="" required/>
                                        <label for="brand2" class="mb-3">
                                            <span></span>I Accept to the Terms & Conditions</label>
                                    </div>
                                </div>
                                <div class="right-w3l">
                                    <input type="submit" class="form-control" onClick={reg} value="Register"/>    
                                </div>
                           
                            <p class="text-center mt-3">Already a member?
                                <a href="/login" data-toggle="modal" data-target="#exampleModal1" class="text-dark login_btn">
                                    Login Now
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   


</>

);

};
export default Register;