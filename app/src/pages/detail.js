import React from 'react'
import Axios from 'axios';
import  {useState} from "react";

function Details (){

    
    const [upload,setupload]=useState("");

    let user=JSON.parse(localStorage.getItem("Login"));
    var Uemail=user.email;

   const add1=()=>{
        var config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
          };

        var name=document.getElementById('name').value;
        var act_price=document.getElementById('product_price').value;
        var sell_price=document.getElementById('selling_price').value;
        var condition=document.getElementById('condition').value;
        var quan=document.getElementById('quantity').value;
        var desc=document.getElementById('description').value;
        var email=Uemail;

        var data = new FormData();
        data.append('upimage',upload);
        data.append('name',name);
        data.append('product_price',act_price);
        data.append('selling_price',sell_price);
        data.append('condition',condition);
        data.append('description',desc);
        data.append('quantity',quan);
        data.append('email',email);
        
          /*
        Axios.post('http://localhost:1337/api/add',
        {name:name, act_price:act_price ,sell_price:sell_price ,condition:condition ,quan:quan, image:image, desc:desc ,cust:cust, email:email }).then((response)=>{
        if(response.data.message)
        { 
           // let product={email:Uemail,pro_name:name, pro_price:act_price}
          //  localStorage.setItem('Product',JSON.stringify(product));
        alert(response.data.message);
        window.location = "/details"
        }
        else{
        alert('something went wrong');
        window.location = "/product"
        }
        */
        
        Axios.post('http://localhost:1337/api/add1',data,config).then((response)=>{
            if (response.data.message) {
                swal({
                  title: "Success!",
                  text: response.data.message,
                  icon: "success",
                }).then(() => {
                  window.location = "/details";
                });
              } else {
                swal({
                  title: "Something went wrong",
                  icon: "error",
                }).then(() => {
                  window.location = "/product";
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
        }
     /*   if(response.data.message)
        { 
            alert(response.data.message)
                window.location = "/details";
        
     
        }
        else{
            alert('something went wrong')
                window.location = "/product";
    
        }
        })
        };*/

/*        const Value = (props) => {
            const location = useLocation();
            const propsData = location.state;
            alert(propsData);
        }
*/           


return(

<>
    <div class="ibanner_w3 pt-sm-5 pt-3">
		<h4 class="head_agileinfo text-center text-capitalize text-center pt-5">
            <span>N</span>ew
            <span>L</span>i<span>f</span>e</h4>
    </div>

    <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
            <li class="breadcrumb-item">
                <a href="/">Home</a>
            </li>
            <li class="breadcrumb-item" aria-current="page"> <a href="/product">Computer Product's</a></li>
            <li class="breadcrumb-item active" aria-current="page">Product Details</li>
        </ol>
    </nav>

    <section class="wthree-row pt-3 pb-sm-5 w3-contact">
        <div class="container py-sm-5 pb-5">
            <h5 class="head_agileinfo text-center text-capitalize pb-5">
                <span>P</span>roduct <span>D</span>etails </h5>
            <div class="row contact-form pt-lg-5">
                <div class="col-lg-6 wthree-form-left">
                  
                    <div class="contact-top1">
                        <h5 class="text-dark mb-4 text-capitalize">Add your product details below</h5>
                        <form onSubmit={add1}>
                            <div class="form-group">
                                <label for="contactusername">Product Name</label>
                                <input type="text" class="form-control"  id="name"required/>
                            </div>
                            <div class="form-group">
                                <label for="contactusername">Product Price</label>
                                <input type="text" class="form-control" id="product_price" required/>
                            </div>
                            <div class="form-group">
                                <label for="contactusername">Selling Price</label>
                                <input type="text" class="form-control" id="selling_price" required/>
                            </div>
                            <div class="form-group">
                                <label for="contactusername">Product Condition</label>
                                <input type="text" class="form-control" id="condition" required/>
                            </div>
                            <div class="form-group">
                                <label for="contactusername">Quantity</label>
                                <input type="number" class="form-control" id="quantity" required/>
                            </div>
                            <div class="form-group">
                                <label for="contactusername">Image</label>
                                <input type="file" class="form-control" onChange={(e) => setupload(e.target.files[0])} required/>
                            </div>
                           
                            <div class="form-group">
                                <label for="contactcomment">Description of Product</label>
                                <textarea class="form-control" rows="5" id="description" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-info btn-block" >Submit</button>
                        </form>
                    </div>
                 
                </div>
               
                <div class="col-lg-6 contact-bottom pl-5 mt-lg-0 mt-5">
                   
                    <div class="address">
                        <h5 class="pb-3 text-capitalize">For any query contact us</h5>
                        <address>
                            <p class="c-txt">90 Street, City, State 34789.</p>
                            <p class="c-txt">+91 123456789 </p>
                        </address>
                    </div>
                   
                    <div class="address my-5">
                        <h5 class="pb-3 text-capitalize">Approx Price</h5>
                        <p>
                            Mouse is 200 to 400 INR </p>
                        <p>
                            Keyboard is 300 to 500 INR</p>
                        <p>
                            Monitor is 500 to 1000 INR</p>
                    </div>
                   
                 
                </div>
            </div>
           
        </div>
      
      
    </section>
</>

);


};
export default Details;