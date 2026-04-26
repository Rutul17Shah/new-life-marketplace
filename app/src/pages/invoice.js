import React from 'react'
import { useEffect, useState } from "react";  
import Axios from 'axios';
import { Link } from "react-router-dom";
import swal from 'sweetalert';

function Invoice() {

		let user=JSON.parse(localStorage.getItem("Login"));
      	var Uemail=user.email;
	
	const[list,setlist]=useState([]);
	useEffect(()=>{
	Axios.get('http://localhost:1337/api/get6',{params:{Uemail:Uemail}}).then((response)=>{
	
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
            <li class="breadcrumb-item active" aria-current="page">Invoice</li>
        </ol>
    </nav>
    <br /><br />

	<h5 class="head_agileinfo text-center text-capitalize pb-5">
            <span>I</span>nvoice </h5>	

<div class="container"> 

  <table class="table">
  <thead class="table-dark">
    <tr>
      <th scope="col">#ID</th>
      <th scope="col">Product Name</th>
      <th scope="col">Payment Status</th>
	  <th scope="col">Invoice No. </th>
      <th scope="col">Invoice </th>
    </tr>
  </thead>
  <tbody>
  {list.map((val)=>{

				return(
					<>
    <tr>
     	<th scope="row">{val.o_id}</th>
     	<td>{val.name}</td>
      	<td>{val.payment}</td>
		<td>
		{val.payment === "Success" ?
                <>
                	  #NLF/190010107/{val.invoice}
                </>:<>
					N/A
				</>
                }       
		
		 </td>
      	<td> 
		  {val.payment === "Success" ?
                <>
                	<Link to='/invoice2' state={{id:val.o_id}}><button class="btn btn-primary" type="button"> <i class="fa fa-save" ></i>  View </button></Link>
                </>:<></>
                }         
		</td>
    </tr>
	</>
			)
			 })}
  </tbody>
</table>
</div>
    </>
  )
};

export default Invoice;



/*
INVOICE



<div class="container-fluid" id="pdf">
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
<strong>GST (12%)</strong>
</td>
<td class="right">₹ {val.gst}</td>
</tr>
<tr>
<td class="left">
<strong>Discount (12%)</strong>
</td>
<td class="right">₹ {val.gst}</td>
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

</div><br /><br />



















INVOICE TEMP

    <div class="container">
    <div class="row">
        <div class="col-xs-12">
    		<div class="invoice-title">
    			<h2  style={{'display':'inline-block'}}>Invoice</h2><h3 style={{'display':'inline-block'}} class="pull-right" >Order # 12345</h3>
    		</div>
    		<hr/>
    		<div class="row">
    			<div class="col-xs-6">
    				<address>
    				<strong>Billed To:</strong><br/>
    					John Smith<br/>
    					1234 Main<br/>
    					Apt. 4B<br/>
    					Springfield, ST 54321
    				</address>
    			</div>
    			<div class="col-xs-6 text-right">
    				<address>
        			<strong>Shipped To:</strong><br/>
    					Jane Smith<br/>
    					1234 Main<br/>
    					Apt. 4B<br/>
    					Springfield, ST 54321
    				</address>
    			</div>
    		</div>
    		<div class="row">
    			<div class="col-xs-6">
    				<address>
    					<strong>Payment Method:</strong><br/>
    					Visa ending **** 4242<br/>
    					jsmith@email.com
    				</address>
    			</div>
    			<div class="col-xs-6 text-right">
    				<address>
    					<strong>Order Date:</strong><br/>
    					March 7, 2014<br/><br/>
    				</address>
    			</div>
    		</div>
    	</div>
    </div>
    
    <div class="row">
    	<div class="col-md-12">
    		<div class="panel panel-default">
    			<div class="panel-heading">
    				<h3 class="panel-title"><strong>Order summary</strong></h3>
    			</div>
    			<div class="panel-body">
    				<div class="table-responsive">
    					<table class="table table-condensed" border={1}>
    						<thead >
                                <tr >
        							<td><strong>Item</strong></td>
        							<td class="text-center"><strong>Price</strong></td>
        							<td class="text-center"><strong>Quantity</strong></td>
        							<td class="text-right"><strong>Totals</strong></td>
                                </tr>
    						</thead>
    						<tbody>
    						
    							<tr>
    								<td>BS-200</td>
    								<td class="text-center">$10.99</td>
    								<td class="text-center">1</td>
    								<td class="text-right">$10.99</td>
    							</tr>
                                <tr>
        							<td>BS-400</td>
    								<td class="text-center">$20.00</td>
    								<td class="text-center">3</td>
    								<td class="text-right">$60.00</td>
    							</tr>
                                <tr>
            						<td>BS-1000</td>
    								<td class="text-center">$600.00</td>
    								<td class="text-center">1</td>
    								<td class="text-right">$600.00</td>
    							</tr>
    							<tr>
    								<td class="thick-line"></td>
    								<td class="thick-line"></td>
    								<td class="thick-line text-center"><strong>Subtotal</strong></td>
    								<td class="thick-line text-right">$670.99</td>
    							</tr>
    							<tr>
    								<td class="no-line" style={{'border-top':'none'}}></td>
    								<td class="no-line" style={{'border-top':'none'}}></td>
    								<td class="no-line text-center" style={{'border-top':'none'}}><strong>Shipping</strong></td>
    								<td class="no-line text-right" style={{'border-top':'none'}}>$15</td>
    							</tr>
    							<tr>
    								<td class="no-line" style={{'border-top':'none'}}></td>
    								<td class="no-line" style={{'border-top':'none'}}></td>
    								<td class="no-line text-center" style={{'border-top':'none'}}><strong>Total</strong></td>
    								<td class="no-line text-right" style={{'border-top':'none'}}>$685.99</td>
    							</tr>
    						</tbody>
    					</table>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
</div>


INVOICE 2 TEMP

  <body style={{'position': 'relative',
  'width': '21cm',  
  'height': '29.7cm', 
  'margin': '0 auto',
  'color': '#001028',
  'background': '#FFFFFF', 
  'font-family': 'Arial, sans-serif', 
  'font-size': '12px',
  'font-family': 'Arial'}}>
    
    <header class="clearfix" style={{content:"", display:'table', clear:'both', padding:'10px 0',marginBottom:'30px'}}>
      <div id="logo" style={{'text-align': 'center',
  'margin-bottom': '10px'}}>
        <img src="logo.png"/>
      </div>
      <h1 style={{  'border-top': '1px solid  #5D6975',
  'border-bottom': '1px solid  #5D6975',
  'color': '#5D6975',
  'font-size': '2.4em',
  'line-height': '1.4em',
  'font-weight': 'normal',
  'text-align': 'center',
  'margin': '0 0 20px 0',
  'background': 'url(dimension.png)'}}>INVOICE 3-2-1</h1>
      <div id="company" class="clearfix"  style={{content:"", display:'table', clear:'both', float:'right', textAlign:'right'}}>
        <div style={{whiteSpace:'nowrap'}}>Company Name</div>
        <div style={{whiteSpace:'nowrap'}}>455 Foggy Heights,<br /> AZ 85004, US</div>
        <div style={{whiteSpace:'nowrap'}}>(602) 519-0450</div>
        <div style={{whiteSpace:'nowrap'}}><a href="mailto:company@example.com">company@example.com</a></div>
      </div>
      <div id="project" style={{float:'left'}}>
        <div style={{whiteSpace:'nowrap'}}><span style={{  'color': '#5D6975','text-align': 'right', 'width': '52px', 'margin-right': '10px', 'display': 'inline-block','font-size': '0.8em',}}>PROJECT</span> Website development</div>
        <div style={{whiteSpace:'nowrap'}}><span  style={{  'color': '#5D6975','text-align': 'right', 'width': '52px', 'margin-right': '10px', 'display': 'inline-block','font-size': '0.8em',}}>CLIENT</span> John Doe</div>
        <div style={{whiteSpace:'nowrap'}}><span  style={{  'color': '#5D6975','text-align': 'right', 'width': '52px', 'margin-right': '10px', 'display': 'inline-block','font-size': '0.8em',}}>ADDRESS</span> 796 Silver Harbour, TX 79273, US</div>
        <div style={{whiteSpace:'nowrap'}}><span  style={{  'color': '#5D6975','text-align': 'right', 'width': '52px', 'margin-right': '10px', 'display': 'inline-block','font-size': '0.8em',}}>EMAIL</span> <a href="mailto:john@example.com">john@example.com</a></div>
        <div style={{whiteSpace:'nowrap'}}><span  style={{  'color': '#5D6975','text-align': 'right', 'width': '52px', 'margin-right': '10px', 'display': 'inline-block','font-size': '0.8em',}}>DATE</span> August 17, 2015</div>
        <div style={{whiteSpace:'nowrap'}}><span  style={{  'color': '#5D6975','text-align': 'right', 'width': '52px', 'margin-right': '10px', 'display': 'inline-block','font-size': '0.8em',}}>DUE DATE</span> September 17, 2015</div>
      </div>
    </header>
    </body>


INVOICE TEMP 3

	
	<div class="offset-xl-2 col-xl-8 col-lg-12 col-md-12 col-sm-12 col-12 padding">
<div class="card">
<div class="card-header p-4">
<a class="pt-2 d-inline-block" href="index.html" data-abc="true">BBBootstrap.com</a>
<div class="float-right"> <h3 class="mb-0">Invoice #BBB10234</h3>
Date: 12 Jun,2019</div>
</div>
<div class="card-body">
<div class="row mb-4">
<div class="col-sm-6">
<h5 class="mb-3">From:</h5>
<h3 class="text-dark mb-1">Tejinder Singh</h3>
<div>29, Singla Street</div>
<div>Sikeston,New Delhi 110034</div>
<div>Email: contact@bbbootstrap.com</div>
<div>Phone: +91 9897 989 989</div>
</div>
<div class="col-sm-6">
<h5 class="mb-3">To:</h5>
<h3 class="text-dark mb-1">Akshay Singh</h3>
<div>478, Nai Sadak</div>
<div>Chandni chowk, New delhi, 110006</div>
<div>Email: info@tikon.com</div>
<div>Phone: +91 9895 398 009</div>
</div>
</div>
<div class="table-responsive-sm">
<table class="table table-striped">
<thead>
<tr>
<th class="center">#</th>
<th>Item</th>
<th>Description</th>
<th class="right">Price</th>
<th class="center">Qty</th>
<th class="right">Total</th>
</tr>
</thead>
<tbody>
<tr>
<td class="center">1</td>
<td class="left strong">Iphone 10X</td>
<td class="left">Iphone 10X with headphone</td>
<td class="right">$1500</td>
<td class="center">10</td>
 <td class="right">$15,000</td>
</tr>
<tr>
<td class="center">2</td>
<td class="left">Iphone 8X</td>
<td class="left">Iphone 8X with extended warranty</td>
<td class="right">$1200</td>
<td class="center">10</td>
<td class="right">$12,000</td>
</tr>
<tr>
<td class="center">3</td>
<td class="left">Samsung 4C</td>
<td class="left">Samsung 4C with extended warranty</td>
<td class="right">$800</td>
<td class="center">10</td>
<td class="right">$8000</td>
</tr>
<tr>
<td class="center">4</td>
<td class="left">Google Pixel</td>
<td class="left">Google prime with Amazon prime membership</td>
<td class="right">$500</td>
<td class="center">10</td>
<td class="right">$5000</td>
</tr>
</tbody>
</table>
</div>
<div class="row">
<div class="col-lg-4 col-sm-5">
</div>
<div class="col-lg-4 col-sm-5 ml-auto">
<table class="table table-clear">
<tbody>
<tr>
<td class="left">
<strong class="text-dark">Subtotal</strong>
</td>
<td class="right">$28,809,00</td>
</tr>
<tr>
<td class="left">
<strong class="text-dark">Discount (20%)</strong>
</td>
<td class="right">$5,761,00</td>
</tr>
<tr>
<td class="left">
<strong class="text-dark">VAT (10%)</strong>
</td>
<td class="right">$2,304,00</td>
</tr>
<tr>
<td class="left">
<strong class="text-dark">Total</strong>
 </td>
<td class="right">
<strong class="text-dark">$20,744,00</strong>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
<div class="card-footer bg-white">
<p class="mb-0">BBBootstrap.com, Sounth Block, New delhi, 110034</p>
</div>
</div>
</div>





<a class="btn btn-sm btn-secondary float-right mr-1 d-print-none" href="#" onclick="javascript:window.print();" data-abc="true">
<i class="fa fa-print"></i> Print</a>





*/