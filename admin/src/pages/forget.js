import React from 'react'
import Axios from 'axios';
import swal from 'sweetalert';

function Forget() {

  var Pass=()=>{

    var email = document.getElementById("email").value;

Axios.post('http://localhost:1337/api/oemail',
{email:email}).then((response)=>{    
if(response.data.message)
{
    swal({
    title: "Error",
    text:"Email not found",
    icon: "error",
  })
}
else{
    swal({
        title: "Check Your Mail",
        text:"Password Send on Email Id!!!",
        icon: "success",
        button: "Aww yiss!",
      }).then(() => {
        window.location ="/";
      })
      .catch((error) => {
        console.error(error);
        swal({
          title: "Something went wrong",
          text: error.message,
          icon: "error",
        });
      }); 
}
})}


  return (
    <>
      
      <div class="container-scroller">
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth">
          <div class="row flex-grow">
            <div class="col-lg-4 mx-auto">
              <div class="auth-form-light text-left p-5">
                <div class="brand-logo">
                    <a class="navbar-brand brand-logo" href="#"> <b>NLF Admin</b></a>
                </div>
                <h4>Forget your password ?</h4><br />
                <h6 class="font-weight-light">Enter your email id here</h6>
                <div class="pt-3">
                  <div class="form-group">
                    <input type="email" class="form-control form-control-lg" id="email" placeholder="Usermail"/>
                  </div>
                  <div class="mt-3">
                    <button class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" onClick={Pass}>SUBMIT</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
     
    </div>

    </>
  );
;}

export default Forget;
