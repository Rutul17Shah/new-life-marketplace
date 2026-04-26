import React from 'react'
import Axios from 'axios';
import swal from 'sweetalert';
//import { ColorRing } from  'react-loader-spinner'

function Login(){


    var check =()=>{

        var email = document.getElementById('name').value;
        var password = document.getElementById('password').value;
    
    Axios.post('http://localhost:1337/api/login',
    {name:email,pass:password }).then((response)=>{
    if(response.data.message)
    {
        swal({
            title: "Error..!",
            text:response.data.message,
            icon: "error",
          })
    }
    else{
        let obj={name:response.data[0].name,email:email,password:password}
        localStorage.setItem('Login',JSON.stringify(obj));         
    swal({
        title: "Good job!",
        text: "You are logged in!",
        icon: "success",
        button: "Aww yiss!",
      }).then(() => {
          window.location = "/";


        //   setTimeout(() => {
        //     <ColorRing/>;
        //   }, 3000);
    }
    );
    }
    })
    }

return(

<>

        <div class="agilemodal-dialog modal-dialog" role="document">

        <div className="loader-container" style={{top:"50%",right:"50%"}}>
   
      </div>


            <div class="modal-content">     
            
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
              
                <div class="modal-body  pt-3 pb-5 px-sm-5">
                    <div class="row">
                        <div class="col-md-6 align-self-center">
                            <img src="./res/images/p3.png" class="img-fluid" alt="login_image" />
                        </div>
                        <div class="col-md-6">
                            
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label">Your Email</label>
                                    <input type="email" class="form-control" id="name" name="Email"  required=""/>
                                </div>
                                <div class="form-group">
                                    <label class="col-form-label">Password</label>
                                    <input type="password" class="form-control" id="password" name="Password" required=""/>
                                </div>
                                <div class="right-w3l">
                                    <input type="submit" class="form-control" value="Login" onClick={check}/>
                                </div>
                                <p class="text-center mt-3">Forget Password? <span></span>
                                <a href="/forget" class="text-dark login_btn">
                                    Click Here</a>
                                 </p>
                               
                        </div>
                    </div>
                </div>
            </div>
        </div>
</>

);
};
export default Login;