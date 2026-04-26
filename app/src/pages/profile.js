import React from 'react';
import { useEffect, useState } from "react";  
import Axios from 'axios';
import swal from 'sweetalert';


function Profile() {

    let user=JSON.parse(localStorage.getItem("Login"));
    var cust_email=user.email;
    
  const[list,setlist]=useState([]);
  useEffect(()=>{
  Axios.get('http://localhost:1337/api/custprofile',{params:{cust_email:cust_email}}).then((response)=>{
      if(response.data.message)
      {
        swal({
            title: "Something went wrong",
            text: response.data.message,
            icon: "error",
          }).then(() => {
            window.location = "/";
          });
      }
      else{
      console.log(response.data);
      setlist(response.data);
      }
    });
  },[]);


  function custedit (){

    var name = document.getElementById("name").value;
    var email= document.getElementById("email").value;
    var address= document.getElementById("address").value;
    var phone= document.getElementById("phone").value;
    var password=document.getElementById("pass").value;

    Axios.post('http://localhost:1337/api/cust_detail',
  {email:email,name:name,address:address,phone:phone,password:password}).then((response)=>{
  if(response.data.message)
  {
    swal( response.data.message);
  }
  else{
    swal( response.data.message);
  }
  })};


  function custpass () {

    var email= document.getElementById("email").value;
    var password=document.getElementById("passd").value;
    var newpassword=document.getElementById("newpass").value;

    Axios.post('http://localhost:1337/api/cust_pass',
    {email:email,newpassword:newpassword,password:password}).then((response)=>{
    if(response.data.message)
    {
        swal(response.data.message);
    }
    else{
        swal({
            title: "Success!",
            text: "Data sucessfully updated..!!",
            icon: "success",
            button: "Aww yiss!",
          });
    }
    })};

    
  return (
    <>
     <div class="ibanner_w3 pt-sm-5 pt-3">
		<h4 class="head_agileinfo text-center text-capitalize text-center pt-5">
        <span>N</span>ew <span></span>  
            <span>L</span>i<span>f</span>e
        </h4>
    </div>
    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <a href="/">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">Profile</li>
        </ol>
    </nav><br /><br />
    <h5 class="head_agileinfo text-center text-capitalize pb-5">
    <span>M</span>y <span>P</span>rofile
    </h5>
      <div class="container">

      {list.map((val)=>{
            
            return(
                <>

<div class="row gutters">
    <div>
        <div class="card h-100">
	        <div class="card-body">

            <form onSubmit={custedit}>

		        <div class="row gutters">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
				<h3 class="mb-2 text-primary">Personal Details</h3><br />
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="fullName">Full Name</label>
					<input type="text" class="form-control" id="name" defaultValue={val.name}/>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="eMail">Email</label>
					<input type="email" class="form-control" id="email" Value={val.email} disabled/>
				</div>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="phone">Phone</label>
					<input type="number" class="form-control" id="phone" defaultValue={val.phone_number}/>
				</div>
			</div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="Street">Address</label>
					<input type="name" class="form-control" id="address" defaultValue={val.address}/>
				</div>
			</div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="fullName">Password</label>
					<input type="password" class="form-control" id="pass"/>
				</div>
			</div>
            <div class="row gutters">
                <div class="d-grid gap-2 col-3 mx-auto"><br />
                    <button class="btn btn-outline-success" type="submit">Update Profile</button>                   
                </div>              
		</div>
		</div>
       </form>
        <br /><br />

        <form onSubmit={custpass}>
		<div class="row gutters">
			<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <h3 class="mb-2 text-primary">Change Password</h3><br />
			</div>
				<div class="form-group">
					<input type="hidden" class="form-control" id="email" Value={val.email} disabled/>
			</div>
			<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="fullName">Current Password</label>
					<input type="password" class="form-control" id="passd"/>
				</div>
			</div>
            <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
				<div class="form-group">
					<label for="fullName">New Password</label>
					<input type="password" class="form-control" id="newpass"/>
				</div>
			</div>
		
		</div><br />
		<div class="row gutters">
                <div class="d-grid gap-2 col-3 mx-auto">
                    <button class="btn btn-outline-success" type="submit">Update Password</button>                   
                </div>              
		</div>
        </form>
        
	</div>
</div>
</div>
</div>
</>
            )
      })};
            
</div>



    </>
  );
};

export default Profile;
