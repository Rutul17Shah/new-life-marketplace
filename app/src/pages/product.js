import React from 'react'
import swal from 'sweetalert';

function Product (){
    
function details (){
if(localStorage.getItem("Login") !=null )
{
    window.location = "/details"
}
else{
  swal({
    title: "Please Login First..!!",
    icon: "error",
  }).then(() => {
    window.location = "/login";
  });
    }
}
    

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
            <li class="breadcrumb-item active" aria-current="page">Computer Product's</li>
        </ol>
    </nav>

    <section class="blog_wthree py-5">
        <div class="container">
    <h5 class="head_agileinfo text-center text-capitalize pb-5">
                <span>P</span>roducts</h5>
        </div>
        </section>




    <div class="innerf-pages section">
        
    <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
        <div class="men-thumb-item">
          <img src="./res/images/pb3.jpg" alt="img" class="card-img-top"/>
              <div class="men-cart-pro">
                <div class="inner-men-cart-pro">
                  <a href="#" onClick={details} class="link-product-add-cart">Fill Details</a>
                </div>
              </div>
        </div>
          
      <div class="card-body">
        <h4 class="card-title text-capitalize d-flex justify-content-center"> Mouse </h4>
       
        <p class="card-text">You can add your details here by clicking the button below.</p><br />
          <div class=" d-flex justify-content-center">
            <button type="submit" class="hub-cart phub-cart btn ">
              <i class="fa fa-cart-plus" aria-hidden="true">
                <a href="#" onClick={details}> Add Details</a>
              </i>
            </button>
          </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <div class="men-thumb-item">
          <img src="./res/images/pb8.jpg" alt="img" class="card-img-top"/>
              <div class="men-cart-pro">
                <div class="inner-men-cart-pro">
                  <a href="#" onClick={details} class="link-product-add-cart">Fill Details</a>
                </div>
              </div>
        </div>
      <div class="card-body">
        <h4 class="card-title text-capitalize d-flex justify-content-center">Keyboard</h4>
        <p class="card-text">You can add your details here by clicking the button below.</p><br />
          <div class=" d-flex justify-content-center">
            <button type="submit" class="hub-cart phub-cart btn ">
              <i class="fa fa-cart-plus" aria-hidden="true">
                <a href="#" onClick={details}> Add Details</a>
              </i>
            </button>
          </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <div class="men-thumb-item">
          <img src="./res/images/pg9.jpg" alt="img" class="card-img-top"/>
              <div class="men-cart-pro">
                <div class="inner-men-cart-pro">
                  <a href="#" onClick={details} class="link-product-add-cart">Fill Details</a>
                </div>
              </div>
        </div>
      <div class="card-body">
        <h4 class="card-title text-capitalize d-flex justify-content-center">Monitor</h4>
        <p class="card-text">You can add your details here by clicking the button below.</p><br />
          <div class=" d-flex justify-content-center">
            <button type="submit" class="hub-cart phub-cart btn ">
              <i class="fa fa-cart-plus" aria-hidden="true">
                <a href="#" onClick={details}> Add Details</a>
              </i>
            </button>
          </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <div class="men-thumb-item">
          <img src="./res/images/pg4.jpg" alt="img" class="card-img-top"/>
              <div class="men-cart-pro">
                <div class="inner-men-cart-pro">
                  <a href="#" onClick={details} class="link-product-add-cart">Fill Details</a>
                </div>
              </div>
        </div>
      <div class="card-body">
        <h4 class="card-title text-capitalize d-flex justify-content-center">Laptop</h4>
        <p class="card-text">You can add your details here by clicking the button below.</p><br />
          <div class=" d-flex justify-content-center">
            <button type="submit" class="hub-cart phub-cart btn ">
              <i class="fa fa-cart-plus" aria-hidden="true">
                <a href="#" onClick={details}> Add Details</a>
              </i>
            </button>
          </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <div class="men-thumb-item">
          <img src="./res/images/pf3.jpg" alt="img" class="card-img-top"/>
              <div class="men-cart-pro">
                <div class="inner-men-cart-pro">
                  <a href="#" onClick={details} class="link-product-add-cart">Fill Details</a>
                </div>
              </div>
        </div>
      <div class="card-body">
        <h4 class="card-title text-capitalize d-flex justify-content-center">Router</h4>
        <p class="card-text">You can add your details here by clicking the button below.</p><br />
          <div class=" d-flex justify-content-center">
            <button type="submit" class="hub-cart phub-cart btn ">
              <i class="fa fa-cart-plus" aria-hidden="true">
                <a href="#" onClick={details}> Add Details</a>
              </i>
            </button>
          </div>
      </div>
    </div>
  </div>
</div>


  <br /><br /><br />
  <div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card h-100">
        <div class="men-thumb-item">
          <img src="./res/images/pb4.jpg" alt="img" class="card-img-top"/>
              <div class="men-cart-pro">
                <div class="inner-men-cart-pro">
                  <a href="#" onClick={details} class="link-product-add-cart">Fill Details</a>
                </div>
              </div>
        </div>
          
      <div class="card-body">
        <h4 class="card-title text-capitalize d-flex justify-content-center">Gaming Mouse </h4>
       
        <p class="card-text">You can add your details here by clicking the button below.</p><br />
          <div class=" d-flex justify-content-center">
            <button type="submit" class="hub-cart phub-cart btn ">
              <i class="fa fa-cart-plus" aria-hidden="true">
                <a href="#" onClick={details}> Add Details</a>
              </i>
            </button>
          </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <div class="men-thumb-item">
          <img src="./res/images/pb10.jpg" alt="img" class="card-img-top"/>
              <div class="men-cart-pro">
                <div class="inner-men-cart-pro">
                  <a href="#" onClick={details} class="link-product-add-cart">Fill Details</a>
                </div>
              </div>
        </div>
      <div class="card-body">
        <h4 class="card-title text-capitalize d-flex justify-content-center">Gaming Keyboard</h4>
        <p class="card-text">You can add your details here by clicking the button below.</p><br />
          <div class=" d-flex justify-content-center">
            <button type="submit" class="hub-cart phub-cart btn ">
              <i class="fa fa-cart-plus" aria-hidden="true">
                <a href="#" onClick={details}> Add Details</a>
              </i>
            </button>
          </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <div class="men-thumb-item">
          <img src="./res/images/pg11.jpg" alt="img" class="card-img-top"/>
              <div class="men-cart-pro">
                <div class="inner-men-cart-pro">
                  <a href="#" onClick={details} class="link-product-add-cart">Fill Details</a>
                </div>
              </div>
        </div>
      <div class="card-body">
        <h4 class="card-title text-capitalize d-flex justify-content-center">4k Monitor</h4>
        <p class="card-text">You can add your details here by clicking the button below.</p><br />
          <div class=" d-flex justify-content-center">
            <button type="submit" class="hub-cart phub-cart btn ">
              <i class="fa fa-cart-plus" aria-hidden="true">
                <a href="#" onClick={details}> Add Details</a>
              </i>
            </button>
          </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <div class="men-thumb-item">
          <img src="./res/images/pg10.jpg" alt="img" class="card-img-top"/>
              <div class="men-cart-pro">
                <div class="inner-men-cart-pro">
                  <a href="#" onClick={details} class="link-product-add-cart">Fill Details</a>
                </div>
              </div>
        </div>
      <div class="card-body">
        <h4 class="card-title text-capitalize d-flex justify-content-center">Gaming Laptop</h4>
        <p class="card-text">You can add your details here by clicking the button below.</p><br />
          <div class=" d-flex justify-content-center">
            <button type="submit" class="hub-cart phub-cart btn ">
              <i class="fa fa-cart-plus" aria-hidden="true">
                <a href="#" onClick={details}> Add Details</a>
              </i>
            </button>
          </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
    <div class="men-thumb-item">
          <img src="./res/images/pf11.jpg" alt="img" class="card-img-top"/>
              <div class="men-cart-pro">
                <div class="inner-men-cart-pro">
                  <a href="#" onClick={details} class="link-product-add-cart">Fill Details</a>
                </div>
              </div>
        </div>
      <div class="card-body">
        <h4 class="card-title text-capitalize d-flex justify-content-center">16gb Ram</h4>
        <p class="card-text">You can add your details here by clicking the button below.</p><br />
          <div class=" d-flex justify-content-center">
            <button type="submit" class="hub-cart phub-cart btn ">
              <i class="fa fa-cart-plus" aria-hidden="true">
                <a href="#" onClick={details}> Add Details</a>
              </i>
            </button>
          </div>
      </div>
    </div>
  </div>
</div>

  <br /><br /><br />
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>

    </div>
<br /><br /><br />

</>

);

};
export default Product;



/*{

    <div class="fh-container mx-auto">
            <div class="row my-lg-5 mb-5">
                

                    <div class="col-lg-9 mt-lg-0 mt-5 right-product-grid">
                    <div class="card-group">
                        <div class="col-lg-3 col-sm-6 p-0">
                            <div class="card product-men p-3">
                                <div class="men-thumb-item">
                                    <img src="./res/images/pb1.jpg" alt="img" class="card-img-top"/>
                                    <div class="men-cart-pro">
                                        <div class="inner-men-cart-pro">
                                            <a href="#" onClick={details} class="link-product-add-cart">Fill Details</a>
                                        </div>
                                    </div>
                                </div>
                              
                                <div class="card-body  py-3 px-2">
                                    <h5 class="card-title text-capitalize d-flex justify-content-center">Gaming Mouse </h5>
                                   
                                </div>
                           
                                <div class="card-footer d-flex justify-content-end">
                                    
                                        <input type="hidden" name="cmd" value="_cart"/>
                                        <input type="hidden" name="add" value="1"/>
                                        <input type="hidden" name="hub_item" value="Mouse b"/>
                                        <input type="hidden" name="amount" value="21.00"/>
                                        <button type="submit" class="hub-cart phub-cart btn">
                                            <i class="fa fa-cart-plus" aria-hidden="true">

                                                 <a href="#" onClick={details}> Add Details</a>

                                                 </i>
                                        </button>

                                        <a href="#" data-toggle="modal" data-target="#myModal1"></a>
                                   
                                </div>
                            </div>
                        </div>


            



                        <div class="col-lg-3 col-sm-6 p-0">
                            <div class="card product-men p-3">
                                <div class="men-thumb-item">
                                    <img src="./res/images/pb2.jpg" alt="img" class="card-img-top"/>
                                    <div class="men-cart-pro">
                                        <div class="inner-men-cart-pro">

                                        
                                            <a href="#" onClick={details} class="link-product-add-cart">Fill Details</a>
                                        </div>
                                    </div>
                                </div>
                               
                                <div class="card-body  py-3 px-2">
                                    <h5 class="card-title text-capitalize d-flex justify-content-center">Mouse </h5>
                                    
                                </div>
                               
                                <div class="card-footer d-flex justify-content-end">
                                   
                                        <input type="hidden" name="cmd" value="_cart"/>
                                        <input type="hidden" name="add" value="1"/>
                                        <input type="hidden" name="hub_item" value="Mouse "/>
                                        <input type="hidden" name="amount" value="19.99"/>
                                        <button type="submit" class="hub-cart phub-cart btn">
                                            <i class="fa fa-cart-plus " aria-hidden="true"> 
                                            <a href="#" onClick={details}> Add Details</a>
                                            </i>
                                        </button>
                                        <a href="#" data-toggle="modal" data-target="#myModal1"></a>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                        </div>s
}*/