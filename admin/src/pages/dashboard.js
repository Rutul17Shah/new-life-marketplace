import React from 'react';
import Axios from 'axios';
import { useEffect, useState } from "react";  
import swal from 'sweetalert';

function Dashboard() {
     
const[list,setlist]=useState([]);
useEffect(()=>{
Axios.get('http://localhost:1337/api/total_pro').then((response)=>{
console.log(response.data);
setlist(response.data);
})
},[]);

     
const[list2,setlist2]=useState([]);
useEffect(()=>{
Axios.get('http://localhost:1337/api/total_detail').then((response)=>{
console.log(response.data);
setlist2(response.data);
})
},[]);

const[list3,setlist3]=useState([]);
useEffect(()=>{
Axios.get('http://localhost:1337/api/tot_order').then((response)=>{
console.log(response.data);
setlist3(response.data);
})
},[]);

const[list4,setlist4]=useState([]);
useEffect(()=>{
Axios.get('http://localhost:1337/api/order_sts').then((response)=>{
console.log(response.data);
setlist4(response.data);
})
},[]);

const[list5,setlist5]=useState([]);
useEffect(()=>{
Axios.get('http://localhost:1337/api/tot_user').then((response)=>{
console.log(response.data);
setlist5(response.data);
})
},[]);

                    
const[list6,setlist6]=useState([]);
useEffect(()=>{
Axios.get('http://localhost:1337/api/accept_dash').then((response)=>{
console.log(response.data);
setlist6(response.data);
});
},[]);
  
  function Search (){

  var x = document.getElementById("search").value;

  Axios.get('http://localhost:1337/api/search',{params:{x:x}}).then((response)=>{
    if(response.data.message)
    {
      swal({
        title: "Something went wrong",
        text: response.data.message,
        icon: "error",
      })
     
    }
    else{
      setlist6(response.data);  
        }
    })
  }

  return (
    <>
     
          <div class="content-wrapper">
            <div class="page-header">
              <h3 class="page-title">
                <span class="page-title-icon bg-gradient-primary text-white me-2">
                  <i class="mdi mdi-home"></i>
                </span> Dashboard
              </h3>
              <nav aria-label="breadcrumb">
                <ul class="breadcrumb">
                  <li class="breadcrumb-item active" aria-current="page">
                    <span></span>Overview <i class="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
                  </li>
                </ul>
              </nav>
            </div>

            <div class="row" >
              <div class="col-md-4 stretch-card grid-margin">
                <div class="card bg-gradient-danger card-img-holder text-white">

                <a href="/products" style={{"text-decoration" : "none"}}>
                  <div class="card-body">
                   
                    <img src="./res/images/dashboard/circle.svg" class="card-img-absolute" alt=''/>
                    <h4 class="font-weight-normal mb-2" style={{"color" : "white"}}>Total Products <i class="mdi mdi-chart-line mdi-24px float-right"></i>
                    </h4>
                    {list.map((val)=>{ return(
                      <>
                        <h2 class="mb-3" style={{"color" : "white"}}> {val.count}</h2>
                      </>
                     )  })}
                    {list2.map((val2)=>{ 
                    return(<>
                    <table>
                      <tr style={{"font-size":"17px","color":"brown"}}>
                        <td style={{"padding":"3px"}}>{val2.b} -</td>
                        <td style={{"padding":"3px"}}>{val2.a}</td>
                      </tr>
                    </table>
                    </>)
                })}
               
                  </div> </a>
                

                </div>
              </div>
              <div class="col-md-4 stretch-card grid-margin">
                <div class="card bg-gradient-info card-img-holder text-white">
                <a href="/orders" style={{"text-decoration" : "none"}}>
                  <div class="card-body">
                    <img src="./res/images/dashboard/circle.svg" class="card-img-absolute" alt=''/>
                    <h4 class="font-weight-normal mb-2" style={{"color" : "white"}}>Total Orders <i class="mdi mdi-bookmark-outline mdi-24px float-right"></i>
                    </h4>
                    {list3.map((val3)=>{ return(
                      <>
                        <h2 class="mb-4" style={{"color" : "white"}}> {val3.count}</h2>
                      </>
                     )  })}
                      {list4.map((val4)=>{ 
                    return(<>
                    <table>
                      <tr style={{"font-size":"17px","color":"brown"}}>
                        <td style={{"padding":"3px"}}>{val4.b} -</td>
                        <td style={{"padding":"3px"}}>{val4.a}</td>
                      </tr>
                    </table>
                    </>)
                      })}
                  </div>
                  </a>
                </div>
              </div>
              <div class="col-md-4 stretch-card grid-margin">
                <div class="card bg-gradient-success card-img-holder text-white">
                <a href="/users" style={{"text-decoration" : "none"}}>
                  <div class="card-body">
                    <img src="./res/images/dashboard/circle.svg" class="card-img-absolute" alt="" />
                    <h4 class="font-weight-normal mb-2" style={{"color" : "white"}}>Total Users <i class="mdi mdi-diamond mdi-24px float-right"></i>
                    </h4>
                    {list5.map((val5)=>{ return(
                      <>
                        <h2 class="mb-3" style={{"color" : "white"}}> {val5.count}</h2>
                      </>
                     )  })}
                    </div>
                  </a>
                </div>
              </div>
            </div>

        

            <div class="row">
              <div class="col-12 grid-margin">
                <div class="card">
                  <div class="card-body">
                    <h6 class="card-title">Recent Tickets</h6>
                      <br />

                    <div class="add-items d-flex">
                      <input type="text"  id="search" class="form-control todo-list-input" placeholder="What do you want to search?" style={{fontSize:"1rem"}}/>
                      <button class="btn btn-gradient-primary font-weight-bold" onClick={Search}>
                      <i class="mdi mdi-magnify"> </i> <br /> SEARCH
                      </button>
                    </div>

                      <br />
                    <div class="table-responsive">

                      <table class="table">
                        <thead>
                        <tr>
                          <th >ID</th>
                          <th >Name</th>
                          <th >Customer Email</th>
                          <th >Selling Price</th>
                          <th >Condition</th>
                          <th style={{ "text-align": "center"}}>Image</th>
                          <th >Quantity</th>
                          <th >Status</th>
                        </tr>
                        </thead>

                        {list6.map((val6)=>{ return(<>
                          <tbody>
                          <td>{val6.d_id}</td>
                          <td>{val6.pro_name}</td>
                          <td>{val6.email}</td>
                          <td>{val6.sell_price}</td>
                          <td>{val6.pro_condition}</td>
                          <td style={{ "text-align": "center"}}> <img src={"http://localhost:1337/public/"+ val6.pro_image} alt=""></img></td> 
                          <td>{val6.pro_quantity}</td>
                          <td><label class="badge badge-gradient-warning">{val6.pro_status}</label></td>
                        
                        </tbody>
                        
                        </>)})}
        
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  );
}

export default Dashboard;
