import React from 'react'
import { useEffect, useState } from "react";  
import Axios from 'axios';
import moment from 'moment';
import swal from 'sweetalert';


function Ticket() {

/*
  if(localStorage.getItem("Product") !=null )
  {
      window.location = "/ticket"
  }
  else{
      alert('Please enter details first');
      window.location = "/product";
      }
  */

      let user=JSON.parse(localStorage.getItem("Login"));
      var Uemail=user.email;

const[list,setlist]=useState([]);
useEffect(()=>{
Axios.get('http://localhost:1337/api/get3',{params:{Uemail:Uemail}}).then((response)=>{


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


  return (
    <>
        <div class="ibanner_w3 pt-sm-5 pt-3">
		      <h4 class="head_agileinfo text-center text-capitalize text-center pt-5">
            <span>N</span>ew <span></span>
            <span>L</span>i<span>f</span>e</h4>
        </div>


    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <a href="/">Home</a>
            </li>
            <li class="breadcrumb-item" aria-current="page"> <a href="/product">Computer Product's</a></li>
            <li class="breadcrumb-item active" aria-current="page"><a href="/product">Product Details</a></li>
            <li class="breadcrumb-item active" aria-current="page">Ticket</li>

        </ol>
    </nav>


    <section class="blog_wthree py-5">
        <div class="container">
            <h5 class="head_agileinfo text-center text-capitalize pb-5">
            <span>C</span>urrent <span>T</span>icket</h5>



      <table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#ID</th>
      <th scope="col">Product Name</th>
      <th scope="col">Actual Price</th>
      <th scope="col">Selling Price</th>
      <th scope="col">Condition</th>
      <th scope="col">Quantity</th>
      <th scope="col">Description</th>
      <th scope="col">Status</th>
      <th scope="col">Delivery</th>

    </tr>
  </thead>
  <tbody>

  {list.map((val)=>{



function update (){

  var id = val.d_id;
  var date = moment().format('YYYY-MM-DD');
  var email = val.email;
  var price = val.sell_price*val.pro_quantity;
  var name =val.pro_name;

  Axios.post('http://localhost:1337/api/update',{id:id,date:date,email:email,price:price,name:name}).then((response)=>{
    if (response.data.message) {
      swal({
        title: "Success!",
        text: response.data.message,
        icon: "success",
        button: "Aww yiss!",
      }).then(() => {
        window.location ="/ticket";
      })
    } else {
      swal({
        title: "Something went wrong",
        icon: "error",
      }).then(() => {
        window.location = "/";
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
      alert(response.data.message)
        window.location = "/ticket";
  
    }
    else{
      alert('fail')
        window.location = "/";
  
        }
    }) 
    };  
*/



return(


    <tr>
    
      <th scope="row">{val.d_id}</th>
      <td>{val.pro_name}</td>
      <td>{val.pro_price}</td>
      <td>{val.sell_price}</td>
      <td>{val.pro_condition}</td>
      <td>{val.pro_quantity}</td>
      <td>{val.pro_desc}</td>
      <td>    
               {val.pro_status === "Pending" ?
                <>
                <label class="badge badge-warning">Pending</label>
                </>:<></>
              }
              {val.pro_status === "Accept" ?
                <>
                <label class="badge badge-success">Accept </label>
                </>:<></>
              }
              {val.pro_status === "Reject" ?
                <>
                <label class="badge badge-danger">Reject</label>
                </>:<></>
              }
        </td>
        <td>


        {val.pro_status === "Accept" ?
            
                <>  
                {val.cust_status === "Not Delivered" ?
                <>
                 <button type="button" class="btn btn-danger btn-sm" onClick={update}>Not Delivered</button>  
                
                </>:<></>
                } 
               
                {val.cust_status === "Delivered" ?
                <>
                <button type="button" class="btn btn-success btn-sm">Delivered</button> 
                
                </>:<></>
                }                    
                </>
                :
                <>
                </>
            
             
        }  
     
        </td>
       
        
    </tr>

)})}
    
  </tbody>
</table>

      </div>
    </section>
    </>
  );



};

export default Ticket;


/*          {list2.map((val2)=>{
            {val2.cust_status === "Delivered" ?
            <>
            <button type="button" class="btn btn-success btn-sm">Delivered</button>
            </>
            :
            <>
            </>                   
          
          }                 
          })} 


           {list2.map((val2)=>{
                      var x = val2.cust_status
                      {x === "Delivered" ?
                      
                          <>
                          <button type="button" class="btn btn-success btn-sm" >Delivered</button>
                          </>
                          :
                          <>
                          </>

                      }
                    })}
                    



     

  function deliver(){ 
  
  var id = val.d_id;
  
  

  Axios.get('http://localhost:1337/api/deliver',{params:{id:id, email:email, price:price, date:date}}).then((response)=>{
    if(response.data.message)
    {
    alert(response.data.message);
    }
    else{
        alert('fail');
        window.location = "/"
        }
    })
      


};
                    
 */
