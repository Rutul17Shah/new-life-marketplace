import React from 'react'
import { useEffect, useState } from "react";  
import Axios from 'axios';
import swal from 'sweetalert';

function Products() {
                    
  function yesproduct ()
  {
    Axios.get('http://localhost:1337/api/yeslist').then((response)=>{
    if(response.data.message)
    {
      swal({
        title: "Something went wrong",
        text: response.data.message,
        icon: "error",
      }).then(() => {
        window.location = "/form";
      });
    }
    else{
      setlist(response.data);
        //window.location = "/products"
        }
    })
  };
                          
  function noproduct ()
  {
    Axios.get('http://localhost:1337/api/nolist').then((response)=>{
    if(response.data.message)
    {
      swal({
        title: "Something went wrong",
        text: response.data.message,
        icon: "error",
      }).then(() => {
        window.location = "/form";
      });
    }
    else{
      setlist(response.data);
        //window.location = "/products"
        }
    })
  };
                            
  function newproduct ()
  {
    Axios.get('http://localhost:1337/api/newlist').then((response)=>{
    if(response.data.message)
    {
      swal({
        title: "Something went wrong",
        text: response.data.message,
        icon: "error",
      }).then(() => {
        window.location = "/form";
      });
    }
    else{
      setlist(response.data);
        //window.location = "/products"
        }
    })

  };
 
const[list,setlist]=useState([]);
useEffect(()=>{
Axios.get('http://localhost:1337/api/get1').then((response)=>{
console.log(response.data);
setlist(response.data);
});
},[]);


  function refresh(){
    window.location = "/products"
  }

  return (
    <>
      <div class="content-wrapper">
        
       <div class="page-header">
      
               
              
              <h3 class="page-title" onClick={refresh}> 
                <span class="page-title-icon bg-gradient-primary text-white me-2">
                  <i class="mdi mdi-cart-outline"></i>
                </span> Manage products
              </h3>
              <button type="button" class="btn btn-inverse-primary btn-fw" onClick={newproduct}>New products</button>
              <button type="button" class="btn btn-inverse-primary btn-fw" onClick={yesproduct}>Accepted products </button>
              <button type="button" class="btn btn-inverse-primary btn-fw" onClick={noproduct}>Rejected products</button>
             
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                 
                  <li class="breadcrumb-item active" aria-current="page"><a href="/form" style={{"text-decoration" : "none"}}><h5>Add Products</h5></a></li>
                </ol>
              </nav>
            </div>

      <div class="col-lg-20 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                   
                    
                    <table class="table">
                      <thead>
                        <tr>
                          <th style={{ "text-align": "center"}}>ID</th>
                          <th style={{ "text-align": "center"}}>Name</th>
                          <th style={{ "text-align": "center"}}>Customer Email</th>
                          <th style={{ "text-align": "center"}}>Selling Price</th>
                          <th style={{ "text-align": "center"}}>Condition</th>
                          <th style={{ "text-align": "center"}}>Image</th>
                          <th style={{ "text-align": "center"}}>Quantity</th>
                          <th style={{ "text-align": "center"}}>Description</th>
                          <th style={{ "text-align": "center"}}>Status</th>
                        </tr>
                      </thead>
                      <tbody>

                        {list.map((val)=>{   

  function accept ()
  {
    var status =val.d_id
    var email = val.email
    var id =val.d_id

    Axios.get('http://localhost:1337/api/accept',{params:{status:status,id:id,email:email}}).then((response)=>{
    if(response.data.message)
    {
      swal({
        title: "Success!",
        text: response.data.message,
        icon: "success",
        button: "Aww yiss!",
      }).then(() => {
        window.location ="/products";
      })
    }
    else{
      swal({
        title: "Something went wrong",
        icon: "error",
      }).then(() => {
        window.location = "/products";
      });
        }
    })
};

function reject ()
  {
    var status =val.d_id
    var email = val.email
    var id =val.d_id
    Axios.get('http://localhost:1337/api/reject',{params:{status:status,email:email,id:id}}).then((response)=>{
    if(response.data.message)
    {
      swal({
        title: "Reject!",
        text: response.data.message,
        icon: "warning",
        button: "Oh noez!",
      }).then(() => {
        window.location ="/products";
      })
    }
    else{
      swal({
        title: "Something went wrong",
        icon: "error",
      }).then(() => {
        window.location = "/products";
      });
        }
    })
};

return(
  <>
  <tr>
                         <td>{val.d_id}</td>
                          <td>{val.pro_name}</td>
                          <td>{val.email}</td>
                          <td>{val.sell_price}</td>
                          <td>{val.pro_condition}</td>
                          <td> <img src={"http://localhost:1337/public/"+ val.pro_image} alt=""></img></td> 
                          <td>{val.pro_quantity}</td>
                          <td style={{ "white-space": "pre-line"}}>{val.pro_desc}</td>
                          <td><label class="badge badge-danger">{val.pro_status}</label><br /><br />

                    {val.d_from===0 ? 
                     <> 
                          {
                          val.pro_status === "Pending" ? <>
                          <button type="button" class="btn btn-gradient-primary btn-sm" onClick={accept}>Yes</button>
                          

                          <button type="button" class="btn btn-gradient-primary btn-sm" onClick={reject}>No</button>
                          </>
                          :
                          <> 
                          </>
                          }

                          </>
                          :
                          <>
                          <h4> Not Needed</h4> </>
                      }
                          </td>
                          </tr>          
                          </>

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

export default Products;
