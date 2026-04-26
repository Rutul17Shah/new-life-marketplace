import React from 'react'
import { useEffect, useState } from "react";  
import Axios from 'axios';
import swal from 'sweetalert';

function Orders() {

  const[list,setlist]=useState([]);
  useEffect(()=>{
  Axios.get('http://localhost:1337/api/order').then((response)=>{
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
                  <i class="mdi mdi-calendar-multiple-check"></i>
                </span> Manage Orders
              </h3>
            </div>
       
        <div class="col-lg-12 grid-margin stretch-card">
                <div class="card">
                  <div class="card-body">
                  
                    
                    <table class="table">
                      <thead>
                        <tr>
                          <th>ORDER ID</th>
                          <th>EMAIL</th>
                          <th>NAME</th>
                          <th>Total Price</th>
                          <th>Product ID</th>
                          <th>Delivered Date</th>
                          <th>Admin Status</th>
                          <th>Final Payment</th>
                        </tr>
                      </thead>


                      
                  {list.map((val)=>{ 

function payment (){

var email = val.email;
var amount = val.o_price;
var id = val.o_id;
var name =val.name;

var options = {
"key": "rzp_test_svDjV0nje7aVz8",
"amount": amount * 100, // 2000 paise = INR 20
"name": "New Life",
"description": " Library",

"currency" : "INR",
"netbanking" : true,
prefill: {
      name:name,
      email:email,
      contact: 9898989898,
  },
notes: {
      soolegal_order_id:id,
  },
"handler": function (response){

  //window.location = "/orders" 

  Axios.post('http://localhost:1337/api/verify',
  {id:id,email:email}).then((response)=>{
      if(response.data.message)
      {
        swal({
          title: "Success!",
          text: response.data.message,
          icon: "success",
          button: "Aww yiss!",
        }).then(() => {
          window.location ="/orders";
        })
      }
      else
      {
        swal({
          title: "Something went wrong",
          text: "Please try again later..",
          icon: "error",
        }).then(() => {
          window.location = "/orders";
        });
      }
  });

},

"theme": {
  "color": "#528FF0"
}
};

var rzp1 = new window.Razorpay(options);
rzp1.open();

}                               
                    
function recieve (){

var id =val.d_id;
var email = val.email;
Axios.get('http://localhost:1337/api/recieve',{params:{id:id,email:email}}).then((response)=>{
    if(response.data.message)
    {
      swal({
        title: "Success!",
        text: response.data.message,
        icon: "success",
        button: "Aww yiss!",
      }).then(() => {
        window.location ="/orders";
      })
    }
    else{ 
      swal({
        title: "Something went wrong",
        text: "Please try again later..",
        icon: "error",
      }).then(() => {
        window.location = "/orders";
      });
        }
    })
};

return(

                      <tbody>
                        <tr>
                          <td>{val.o_id}</td>
                          <td>{val.email}</td>
                          <td>{val.name}</td>
                          <td>{val.o_price}</td>
                          <td>{val.d_id}</td>
                          <td>{new Date(val.date).toLocaleDateString()}</td>  
                          <td>
                                {val.admin_status === "Not Recieved" ?
                                  <>
                                  <label class="badge badge-danger">Not Recieved</label>
                                  </>:<></>
                                }
                                {val.admin_status === "Recieved" ?
                                  <>
                                  <label class="badge badge-info"> Recieved </label>
                                  </>:<></>
                                }
                                
                                
                                         
                        <br /><br />

                          {val.admin_status === "Not Recieved" ? <>
                          <button type="button" class="btn btn-gradient-primary btn-sm" onClick={recieve}>Yes</button>
                          

                          <button type="button" class="btn btn-gradient-primary btn-sm">No</button>
                          </>:<> 
                          
                          </>}
                          
                          </td>
                          {val.admin_status === "Recieved" ? <>
                          
                          
                            {val.payment === "Incomplete" ?
                            <>
                                <td>
                                <button type="button" class="btn btn-gradient-danger btn-rounded btn-fw" onClick={payment}>
                                <i class="mdi mdi-file-check btn-icon-append"></i> Payment
                                </button> 
                              </td>
                            </>
                            :
                            <>
                           
                           <td style={{textAlign:'center'}}><label class="badge badge-gradient-warning">Success</label></td>
                            </>
                            }
                            
                          </>:<> 
                          
                          </>}

                        </tr>
                        
                      </tbody>
)

})}
                    </table>



                  </div>
                </div>
              </div>
          </div>
    </>
  );
};

export default Orders;
