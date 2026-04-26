import React from 'react'
import { useEffect, useState } from "react";  
import Axios from 'axios';
import swal from 'sweetalert';

function Users() {


  const[list,setlist]=useState([]);
  useEffect(()=>{
  Axios.get('http://localhost:1337/api/get2').then((response)=>{
  console.log(response.data);
  setlist(response.data);
  });
  },[]);

  return (
    <>
            <div class="content-wrapper">
              <div class="page-header">
              <h3 class="page-title">
                <span class="page-title-icon bg-gradient-primary text-white me-2">
                  <i class="mdi mdi-account-key"></i>
                </span> Manage Users
              </h3>
            </div>

      <div class="col-lg-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                  
                    <table class="table">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Address</th>
                          <th>Phone Number</th>
                          <th>Email</th>
                          <th>Delete</th>
                          
                        </tr>
                      </thead>
                      <tbody>

                      {list.map((val)=>{


function Delete ()
{
  var status =val.u_id
  Axios.get('http://localhost:1337/api/delete',{params:{status:status}}).then((response)=>{
  if(response.data.message)
  {
    swal({
      title: "Success!",
      text: response.data.message,
      icon: "info",
      button: "Done!",
    }).then(() => {
      window.location ="/users";
    })
  }
  else{
    swal({
      title: "Something went wrong",
      icon: "error",
    }).then(() => {
      window.location = "/users";
    });
      }
  })
};

return(

                        <tr>
                          <td>{val.u_id}</td>
                          <td>{val.name}</td>
                          <td>{val.address}</td>
                          <td>{val.phone_number}</td>
                          <td>{val.email}</td>
                          <td><button type="button" class="btn btn-gradient-primary btn-sm" onClick={Delete}><i class="mdi mdi-delete-forever"></i></button></td>
                          
                        </tr>
      )})}  
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              </div>
    </>
  );
};

export default Users;
