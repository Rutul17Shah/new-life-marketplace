import React from 'react'
import Axios from 'axios';
import  {useState} from "react";
import swal from 'sweetalert';

function Form() {

  const [upload,setupload]=useState("");

  function details (){

    var config = {
      headers: {
          'Content-Type': 'multipart/form-data'
      },
    };

      var name = document.getElementById('name').value;
      var actual = document.getElementById('act_price').value;
      var selling = document.getElementById('sell_price').value;
      var quantity = document.getElementById('quantity').value;
      var condition = document.getElementById('condition').value;
      var description = document.getElementById('description').value;
      var admin = document.getElementById('admin_value').value;


      var data = new FormData();
      data.append('upimage',upload);
      data.append('name',name);
      data.append('act_price',actual);
      data.append('sell_price',selling);
      data.append('condition',condition);
      data.append('description',description);
      data.append('quantity',quantity);
      data.append('admin',admin);

      /*
      Axios.post('http://localhost:1337/api/detail',
      {name:name,actual:actual,selling:selling,quantity:quantity,condition:condition,image:image,description:description,admin:admin}).then((response)=>{
        if(response.data.message)
        {
          alert(response.data.message);
          window.location = "/products"
        }
        else
        {
          alert("Details not added, something went wrong...!!!");
          window.location = "/form"
        }

      })
  }
*/
     
Axios.post('http://localhost:1337/api/detail',data,config).then((response)=>{
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
      window.location = "/form";
    });
  }
  })
  };

  return (
    <>
         <div class="col-12 grid-margin stretch-card">
                <div class="card">
                  
                  <div class="card-body">
                    <h4 class="card-title">Add Product Details</h4><br />
                  
                    <form onSubmit={details}>
                        <label for="exampleInputName1">Name</label><br /><br />
                        <input type="text" class="form-control" id="name" placeholder="Name" required/><br />
                     
                      
                        <label for="exampleInputEmail3">Actual Price</label><br /><br />
                        <input type="number" class="form-control" id="act_price" placeholder="Actual Price" required/><br />
                     
                     
                        <label for="exampleInputPassword4">Selling Price</label><br /><br />
                        <input type="number" class="form-control" id="sell_price" placeholder="Selling Price" required/><br />
                      
                      
                        <label for="exampleInputPassword4">Product Condition</label><br /><br />
                        <input type="texts" class="form-control" id="condition" placeholder="Product Condition" required/><br />
                   
                    
                        <label for="exampleInputPassword4">Quantity</label><br /><br /> 
                        <input type="number" class="form-control" id="quantity" placeholder="Quantity" required/><br />
                    

                        <label>Image</label><br /><br />
                        <div class="input-group col-xs-12">
                          <input type="text" class="form-control file-upload-info" disabled placeholder="Upload Image of type .jpg , .jpeg, .gif and .png"/>
                          <span class="input-group-append">
                          <input type="file" name="img"  onChange={(e) => setupload(e.target.files[0])} class="file-upload-browse btn btn-gradient-primary" accept="image/*"/>
                          </span>
                        </div><br />  
                      

                        <label for="exampleTextarea1">Description</label><br /><br />
                        <textarea class="form-control" id="description" rows="4" required></textarea><br />
                    
                 
                        <input type="hidden" class="form-control" id="admin_value" placeholder="1"/>
                
                      
                      <button type="submit" class="btn btn-gradient-primary btn-icon-text">
                            <i class="mdi mdi-file-check btn-icon-prepend"></i> Submit </button>

                      <button class="btn"> <a href="/products" class="btn btn-gradient-secondary btn-fw">
                            <i class="mdi mdi-alert btn-icon-prepend"> </i>    Cancel </a> </button>

                      </form>

                  </div>
                </div>
              </div>
    </>
  );
};

export default Form;
