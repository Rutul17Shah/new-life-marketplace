import React from 'react';
import { useEffect, useState } from "react";  
import Axios from 'axios';
//import pdfMake from "pdfmake/build/pdfmake";
//import html2canvas1 from "html2canvas";
import domtoimage from 'dom-to-image';
import jsPDF from 'jspdf';

function Report() {

  function reset(){
    window.location = "/report"
  }
  
  const[list,setlist]=useState([]);
  useEffect(()=>{
  Axios.get('http://localhost:1337/api/report').then((response)=>{
  console.log(response.data);
  });
  },[]);


  const[list2,setlist2]=useState([]);
  useEffect(()=>{
  Axios.get('http://localhost:1337/api/report2').then((response)=>{
  console.log(response.data);
  });
  },[]);


  const sort= ()=>{
    var pro2 =document.getElementById("pro2").value;
    var pro = document.getElementById("pro").value;
    var date1 =document.getElementById("x").value;
    var date2 =document.getElementById("y").value;

    Axios.get('http://localhost:1337/api/sortlist',{params:{pro:pro,date1:date1,date2:date2,pro2:pro2}}).then((response)=>{
      setlist(response.data);
    })

    Axios.get('http://localhost:1337/api/sortlist3',{params:{pro2:pro2}}).then((response)=>{
      setlist(response.data);
    })

  };


  const sort2= ()=>{
    var pro = document.getElementById("status").value;

    Axios.get('http://localhost:1337/api/sortlist2',{params:{pro:pro}}).then((response)=>{
      setlist2(response.data);
    })
  };
 
 

  function Export() {
       
    var d = new Date().toLocaleString();
    const s =document.getElementById('table');
    
    const pdf = new jsPDF('l', 'in', [13, 12]);
        if (pdf) {
           
          domtoimage.toPng(s)
            .then(imgData => {
              pdf.addImage(imgData, 'PNG', 1, 1 );
              pdf.save(d + ".pdf");
            });
        }


    /*,{
            style: {
             width: "1107px",
             height: "250px",
            },
          } */      
  }

  function Export2() {
       
    var d = new Date().toLocaleString();
    const s =document.getElementById('table2');
    
    const pdf = new jsPDF('l', 'in', [13, 12]);
        if (pdf) {
           
          domtoimage.toPng(s)
            .then(imgData => {
              pdf.addImage(imgData, 'PNG', 1, 1 );
              pdf.save(d + ".pdf");
            });
        }    
  }


  return (
    <>
            <div class="content-wrapper">
            <div class="page-header">
            <h3 class="page-title">
                <span class="page-title-icon bg-gradient-primary text-white me-2">
                  <i class="mdi mdi-email"></i>
                </span> Report 
              </h3>
            </div>
            
       
            <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Order Report</h4>
                    <br />

                   
                      <div class="row" style={{fontWeight:'500'}}>
                        <div class="col-md-7">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Category: </label>
                            <div class="col-sm-8">
                              <select class="form-control" id="pro">
                                <option disabled selected value=""> Select </option>
                                <option value="Recieved">Product Recieved </option>
                                <option value="Not Recieved">Product Not Recieved</option>
                              </select>
                            </div>
                          </div>
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Category: </label>
                            <div class="col-sm-8">
                              <select class="form-control" id="pro2">
                                <option disabled selected value=""> Select </option>
                                <option value="Success">Payment Completed</option>
                                <option value="Incomplete">Payment Not Completed</option>
                              </select>
                            </div>
                          </div>
                        </div>

OR
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">From: </label>
                            <div class="col-sm-9">
                              <input type="date" class="form-control" placeholder="dd/mm/yyyy" id="x" />
                            </div>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">To: </label>
                            <div class="col-sm-9">
                              <input type="date" class="form-control" placeholder="dd/mm/yyyy" id="y"/>
                            </div>
                          </div>
                        </div>
                      
                      </div>
                    
                        <div class="template-demo" style={{textAlign:'center'}}>

                            <button type="button" class="btn btn-gradient-info btn-icon-text" id="btnExport" value="PDF" onClick={Export}> 
                            <i class="mdi mdi-printer btn-icon-prepend"></i>  PDF  </button>

                            <button type="button" class="btn btn-gradient-danger btn-icon-text" onClick={()=>sort()}>
                            <i class="mdi mdi-file-check btn-icon-prepend"></i> Submit  </button>

                            <button type="button" class="btn btn-gradient-warning btn-icon-text" onClick={reset}>
                            <i class="mdi mdi-reload btn-icon-prepend"></i> Reset </button>
                        </div></div></div> 
                        
                        <br /><br />
                        <div class="card">
                        <div class="card-body">

                        <div id='table' style={{'width':'1000px',left:'40px',alignItems:'center',justifyContent:'center',textAlign:'center',position:'relative'}}>
                          <h1 style={{'textAlign':'center'}}>Record</h1>
                          <br />

                          <table class="table"  style={{'background-color':'#F6E4D1'}} >
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Name</th>
                          <th>Customer Email</th>
                          <th>Product ID</th>
                          <th>Total Price</th>
                          <th>Delivered Date</th>
                          <th>Admin Status</th>
                        </tr>
                      </thead>
                      <tbody>

                        {list.map((val)=>{ 
                          return(
                            <>
                            <tr>
                            <td>{val.o_id}</td>
                            <td>{val.name}</td>
                            <td>{val.email}</td>
                            <td>{val.d_id}</td>
                            <td>{val.o_price}</td>
                            <td>{new Date(val.date).toLocaleDateString()}</td>
                            <td>{val.admin_status}</td>
                            </tr>          
                          </>

                        )})}
                        </tbody>
                      </table>
                        </div> </div></div>
                 
                               
              </div>



<br /><br />



              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Product Report</h4>
                    <br />

                      <div class="row" style={{fontWeight:'500'}}>
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Category</label>
                            <div class="col-sm-8">
                              <select class="form-control" id="status">
                                <option disabled selected>Select </option>
                                <option value="Accept">Accepted Product </option>
                                <option value="Reject">Rejected Product</option>
                                <option value="Pending">Pending Product</option>
                              </select>
                            </div>
                          </div>
                        </div>                  
                      
                        
                      </div>
                        <div style={{textAlign:'center'}}  class="template-demo">
                            <button type="button" class="btn btn-gradient-info btn-icon-text" id="btnExport" value="PDF" onClick={Export2}> 
                            <i class="mdi mdi-printer btn-icon-prepend"></i> PDF  </button>

                            <button type="submit" class="btn btn-gradient-danger btn-icon-text" onClick={()=>sort2()}> 
                            <i class="mdi mdi-file-check btn-icon-prepend"></i> Submit  </button>

                            <button type="button" class="btn btn-gradient-warning btn-icon-text" onClick={reset}>
                            <i class="mdi mdi-reload btn-icon-prepend"></i> Reset </button> 
                        </div>
<br /><br />
                        <div id='table2' style={{'width':'1000px',left:'30px',alignItems:'center',justifyContent:'center',textAlign:'center',position:'relative'}}>
                          <h1 style={{'textAlign':'center'}}>Record</h1>
                          <br />
                        <table class="table"  style={{'background-color':'#F6E4D1'}}>
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Customer Email</th>
                          <th>Name</th>
                          <th>Price</th>
                          <th>Image</th>
                          <th>Quantity</th>
                          <th>Product Status</th>
                        </tr>
                      </thead>
                      <tbody>

                        {list2.map((val2)=>{ 
                          return(
                            <>
                            <tr>
                            <td>{val2.d_id}</td>
                            <td>{val2.email}</td>
                            <td>{val2.pro_name}</td>
                            <td>{val2.sell_price}</td>
                            <td>{val2.pro_image}</td>
                            <td> <img src={"http://localhost:1337/public/"+ val2.pro_image} alt=""></img></td> 
                            <td>{val2.pro_status}</td>
                            </tr>          
                          </>

                        )})}
                        </tbody>
                      </table>
                      
                      </div>
                  </div>
                </div>
              </div>

              
       
                </div>



    </> 
  )
};

export default Report;



/*



       <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Order Name</label>
                            <div class="col-sm-9">
                              <input type="text" class="form-control" />
                            </div>
                          </div>
                        </div>




        <div class="row">
                        <div class="col-md-6">
                          <div class="form-group row">
                            <label class="col-sm-3 col-form-label">Category</label>
                            <div class="col-sm-8">
                              <select class="form-control">
                                <option>Category1</option>
                                <option>Category2</option>
                                <option>Category3</option>
                                <option>Category4</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      
                      </div>


                        
  const[list,setlist]=useState([]);
  useEffect(()=>{
    Axios.get('http://localhost:1337/api/pdf').then((response)=>{
    console.log(response.data);
    setlist(response.data);
    });
    },[]);

{list.map((val)=>{ 
                        return(
                                    
                        <tbody>
                        <tr>
                          <td>{val.o_id}</td>
                          <td>{val.email}</td>
                          <td>{val.name}</td>
                          <td>{val.d_id}</td>
                          <td>{val.o_price}</td>
                          <td>{val.date}</td>
                          <td>{val.cust_status}</td>
                          <td>{val.admin_status}</td>
                        </tr>
                        </tbody>
                        
                      
                            )})}
                      


                            

*/