import React from 'react'
import { useEffect, useState } from "react";  
import Axios from 'axios';
import domtoimage from 'dom-to-image';
import jsPDF from 'jspdf';
import { useLocation } from 'react-router-dom';
import swal from 'sweetalert';

function Invoice2() {

    let user=JSON.parse(localStorage.getItem("Login"));
      	var Uemail=user.email;
		var name =user.name;
	
	const[list,setlist]=useState([]);
    const location= useLocation();
    const id = location.state.id;
	useEffect(()=>{
	Axios.get('http://localhost:1337/api/get5',{params:{Uemail:Uemail,id:id}}).then((response)=>{
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




	const Export2=(id)=> {
    var d = new Date().toLocaleString();
    const s =document.getElementById("ui-view");
    
    const pdf = new jsPDF('l', 'in', [18, 8]);
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

      
<div class="container-fluid" id="pdf">

    
{list.map((val)=>{

return(
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
            <li class="breadcrumb-item active" aria-current="page">Invoice</li>
        </ol>
    </nav>
    <br /><br />

	<h5 class="head_agileinfo text-center text-capitalize pb-5">
            <span>I</span>nvoice </h5>	


<div className="pdf" id="ui-view" data-select2-id="ui-view"><div><div class="card">

<div class="card-header">Invoice ID 
<strong>#NLF/190010107/{val.invoice}</strong>

</div>
<div class="card-body">
<div class="row mb-4">
<div class="col-sm-4">
<h6 class="mb-3">From:</h6>
<div>
<strong>New Life</strong>
</div>
<div>42, Awesome Enclave</div>
<div>Manjalpur, Vadodara - 390011</div>
<div>Email: rutul17shah@gmail.com</div>
<div>Phone: +91 9898345192</div>
</div>

<div class="col-sm-4">
<h6 class="mb-3">To:</h6>
<div>
<strong>{name}</strong>
</div>
<div>{val.address}</div>
<div>Email: {val.email}</div>
<div>Phone: +91 {val.phone_number}</div>
</div>

<div class="col-sm-4">
<h6 class="mb-3">Details:</h6>
<div>Invoice: 
<strong>#NLF/190010107/{val.invoice}</strong>
</div>
<div>Date: {new Date(val.date).toLocaleDateString()}</div>
<div>VAT: NYC09090390</div>
<div>Account Name: New Life Inc</div>
<div>
<strong>SWIFT code: 99 8888 7777 6666 5555</strong>
</div>
</div>

</div>

<div class="table-responsive-sm">
<table class="table table-striped">
<thead>
<tr>
<th class="center">#</th>
<th>Item</th>
<th>Description</th>
<th class="center">Quantity</th>
<th class="right">Unit Cost</th>
<th class="right">Total</th>
</tr>
</thead>
<tbody>
<tr>
<td class="center">1</td>
<td class="left">{val.pro_name}</td>
<td class="left">{val.pro_desc}</td>
<td class="center">{val.pro_quantity}</td>
<td class="right">₹ {val.sell_price}</td>
<td class="right">₹ {val.o_price}</td>
</tr>

</tbody>
</table>
</div>
<div class="row">
<div class="col-lg-4 col-sm-5"><br /> 
Note <br />
Terms & Conditions apply <br />
It was great doing business with you. <br />

</div>
<div class="col-lg-4 col-sm-5 ml-auto">
<table class="table table-clear">
<tbody>
<tr>
<td class="left">
<strong>Subtotal</strong>
</td>
<td class="right">₹ {val.o_price}</td>
</tr>
<tr>
<td class="left">
<strong>Charges</strong>
</td>
<td class="right">+ ₹ {val.gst}</td>
</tr>
<tr>
<td class="left">
<strong>Discount</strong>
</td>
<td class="right">- ₹ {val.gst}</td>
</tr>
<tr>
<td class="left">
<strong>Total</strong>
</td>
<td class="right">
<strong>₹ {val.o_price}</strong>
</td>
</tr>
</tbody>
</table>

</div>
</div>
</div>
</div>
</div>
</div>
<br /><br />

<div class="d-grid gap-2 col-2 mx-auto">
  <button class="btn btn-primary" type="button" onClick={()=>Export2(val.invoice)}> <i class="fa fa-save"></i> Save</button>
</div>
</>
			)
			 })}

</div><br /><br />

    </>
  )
};

export default Invoice2;
