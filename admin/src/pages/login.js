import React from 'react';
import Axios from 'axios';
import swal from 'sweetalert';

function Login() {

  var verify =()=>{

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    Axios.post('http://localhost:1337/api/owner',
    {email:email,password:password}).then((response)=>{
    if(response.data.message)
    {
      swal({
        title: "Something went wrong",
        text: response.data.message,
        icon: "error",
      })
    }
    else
    { 
        let obj={email:email,password:password,Name:response.data[0].Name}
        localStorage.setItem('Admin',JSON.stringify(obj));
        
        swal({
          title: "Good job!",
          text: "You are logged in!",
          icon: "success",
          button: "Aww yiss!",
        }).then(() => {
          window.location = "/dash";
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


  return (
    <>
      
      <div class="container-fluid page-body-wrapper full-page-wrapper">
        <div class="content-wrapper d-flex align-items-center auth">
          <div class="row flex-grow">
            <div class="col-lg-4 mx-auto">
              <div class="auth-form-light text-left p-5">
                <div class="brand-logo">
                    <a class="navbar-brand brand-logo" href="#"> <b>NLF Admin</b></a>
                </div>
                <h4>Hello! let's get started</h4>
                <h6 class="font-weight-light">Sign in to continue.</h6>
                <div class="pt-3" >
           
                  <div class="form-group">
                    <input type="email" class="form-control form-control-lg" id="email" placeholder="Username"/>
                  </div>
                  <div class="form-group">
                    <input type="password" class="form-control form-control-lg" id="password" placeholder="Password"/>
                  </div>
                  <div class="form-group">
                    <input type="hidden" class="form-control form-control-lg" id="name"/>
                  </div>
                  <div class="mt-3">
                    <button type="submit" class="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" onClick={verify}>SIGN IN </button>
                  </div>
                  <div class="my-2 d-flex justify-content-between align-items-center">
                    <a href="/forget" class="auth-link text-black">Forgot password?</a>
                  </div>
                 
                  </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
     
    
    </>
  );
};

export default Login;
