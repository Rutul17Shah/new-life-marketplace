import React from 'react'
import { useEffect, useState } from "react";  
import Axios from 'axios';
import swal from 'sweetalert';

function Profile() {

  let user=JSON.parse(localStorage.getItem("Admin"));
  var admin_email=user.email;

  
const[list,setlist]=useState([]);
useEffect(()=>{
Axios.get('http://localhost:1337/api/profile',{params:{admin_email:admin_email}}).then((response)=>{
    if(response.data.message)
    {
      swal({
        title: "Something went wrong",
        text: response.data.message,
        icon: "error",
      }).then(() => {
        window.location = "/dash";
      });
    }
    else{
    console.log(response.data);
    setlist(response.data);
    }
  });
},[]);


  const editprofile=()=>{

      var password =document.getElementById("passd").value;
      var name =document.getElementById("name").value;
      var email = document.getElementById("email").value;
  
  Axios.post('http://localhost:1337/api/update_detail',
  {pass:password,email:email,name:name}).then((response)=>{
  if(response.data.message)
  {
    swal({
      title: "Something went wrong",
      text: response.data.message,
      icon: "error",
    });
  }
  else{
    swal({
      title: "Good job!",
      text: "You are logged in!",
      icon: "success",
      button: "Aww yiss!",
    }).then(() => {
      window.location.reload(false);
  });
  }
  })};

const editpass=()=>{


    var oldpassword =document.getElementById("passid").value;
    var newpassword =document.getElementById("newpassid").value;
    var emailadd = document.getElementById("emailid").value;

Axios.post('http://localhost:1337/api/updatepass',
{newpassword:newpassword,oldpassword:oldpassword,emailadd:emailadd}).then((response)=>{
if(response.data.message)
{
  swal({
    title: "Something went wrong",
    text: response.data.message,
    icon: "error",
  })
}
else{
  swal({
    title: "Good job!",
    text: "You are logged in!",
    icon: "success",
    button: "Aww yiss!",
  })
}
})};

  return (
    <>
        {list.map((val)=>{
        
            return(
              <>
              <br /><br />
              <div class="content-wrapper">
            <div class="page-header">
            <h3 class="page-title">
                <span class="page-title-icon bg-gradient-primary text-white me-2">
                  <i class="mdi mdi-border-color"></i>
                </span>  Edit Profile 
              </h3>
            </div>
            <div class="row">
              <div class="col-md-6 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Change Details</h4><br />
                    
                    <form class="forms-sample" onSubmit={editprofile}>
                      <div class="form-group">
                        <label for="exampleInputUsername1">Admin Name</label>
                        <input type="text" class="form-control"  id="name" defaultValue={val.Name}/>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="email" placeholder="Email" value={val.email}/>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="passd"/>
                      </div>
                      <button type="submit" class="btn btn-gradient-primary me-2" >Update</button>
                    </form>
                  </div>
                </div>
              </div>



              <div class="col-md-6 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Change Password</h4><br />
                    <form onSubmit={editpass} >
                    <div class="form-group">
                    <label for="exampleInputUsername1">Email Address</label>
                        <input type="email" class="form-control" id="emailid" value={val.email} disabled/>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputUsername1">Current Password</label>
                        <input type="password" class="form-control" id="passid"/>
                      </div>
                      <div class="form-group">
                        <label for="exampleInputEmail1">New Password</label>
                        <input type="password" class="form-control" id="newpassid"/>
                      </div>
                      <button type="submit" class="btn btn-gradient-primary me-2">Update</button>
                    </form>
                  </div>
                </div>
              </div>
              </div>
              </div>
              </>               
              )
        })} 
    </>
  );
};

export default Profile;