import React from 'react'
import Axios from 'axios';
import swal from 'sweetalert';

function Forget() {

    var email=()=>{

        var email = document.getElementById('name').value;
    
    Axios.post('http://localhost:1337/api/email',
    {name:email}).then((response)=>{    
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
      
            
      <div class="agilemodal-dialog modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Forget Password</h5>
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
                                
                                <div class="right-w3l">
                                    <input type="submit" class="form-control" value="Submit" onClick={email}/>
                                </div>
                               
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Forget;
