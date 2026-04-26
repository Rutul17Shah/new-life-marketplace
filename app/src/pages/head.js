import React ,{useEffect,useState} from 'react';

function Extra(){
    useEffect(() => {		
		const btnid = 'myModal_btn';
        const sliderid='slider3';		
		window.initializeSlider(btnid);
        window.initializeSlider1(sliderid);
	  }, []);


      const [regopen, setreg] = useState(true);
      const [logopen, setlogin] = useState(false);

      const handlereg = () => {
        setreg(false);
        setlogin(true);
      };
return(
<>

<header>
        <div class="container">
        
            <nav class="top_nav d-flex pt-3 pb-1">
              
                <h1>
                    <a class="navbar-brand" href="/">fh
                    </a>
                </h1>
               
                <div class="w3ls_right_nav ml-auto d-flex">
                  
                    <form class="nav-search form-inline my-0 form-control" action="#" method="post">
                        <select class="form-control input-lg" name="category">
                            <option value="all">Search our store</option>
                            <optgroup label="Mens">
                                <option value="T-Shirts">T-Shirts</option>
                                <option value="coats-jackets">Coats & Jackets</option>
                                <option value="Shirts">Shirts</option>
                                <option value="Suits & Blazers">Suits & Blazers</option>
                                <option value="Jackets">Jackets</option>
                                <option value="Sweat Shirts">Trousers</option>
                            </optgroup>
                            <optgroup label="Womens">
                                <option value="Dresses">Dresses</option>
                                <option value="T-shirts">T-shirts</option>
                                <option value="skirts">Skirts</option>
                                <option value="jeans">Jeans</option>
                                <option value="Tunics">Tunics</option>
                            </optgroup>
                            <optgroup label="Girls">
                                <option value="Dresses">Dresses</option>
                                <option value="T-shirts">T-shirts</option>
                                <option value="skirts">Skirts</option>
                                <option value="jeans">Jeans</option>
                                <option value="Tops">Tops</option>
                            </optgroup>
                            <optgroup label="Boys">
                                <option value="T-Shirts">T-Shirts</option>
                                <option value="coats-jackets">Coats & Jackets</option>
                                <option value="Shirts">Shirts</option>
                                <option value="Suits & Blazers">Suits & Blazers</option>
                                <option value="Jackets">Jackets</option>
                                <option value="Sweat Shirts">Sweat Shirts</option>
                            </optgroup>
                        </select>
                        <input class="btn btn-outline-secondary  ml-3 my-sm-0" type="submit" value="Search"/>
                    </form>
                   
                    <div class="nav-icon d-flex">
                       
                        <a class="text-dark login_btn align-self-center mx-3" href="#myModal_btn" data-toggle="modal" data-target="#myModal_btn">
                            <i class="far fa-user"></i>
                        </a>
                      
                        <div class="cart-mainf">
                            <div class="hubcart hubcart2 cart cart box_1">
                                <form action="#" method="post">
                                    <input type="hidden" name="cmd" value="_cart"/>
                                    <input type="hidden" name="display" value="1"/>
                                    <button class="btn top_hub_cart mt-1" type="submit" name="submit" value="" title="Cart">
                                        <i class="fas fa-shopping-bag"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                      
                    </div>
                </div>
            </nav>
          
            <nav class="navbar navbar-expand-lg navbar-light justify-content-center">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mx-auto text-center">
                        <li class="nav-item">
                            <a class="nav-link  active" href="/">Home
                                <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <li class="nav-item dropdown has-mega-menu" style={{ position: 'static' }}>
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Men's clothing</a>
                            <div class="dropdown-menu" style={{ width: '100%' }}>
                                <div class="px-0 container">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <a class="dropdown-item" href="men.html">T-Shirts</a>
                                            <a class="dropdown-item" href="men.html">Coats</a>
                                            <a class="dropdown-item" href="men.html">Shirts</a>
                                            <a class="dropdown-item" href="men.html">Suits & Blazers</a>
                                            <a class="dropdown-item" href="men.html">Jackets</a>
                                            <a class="dropdown-item" href="men.html">Trousers</a>
                                        </div>
                                        <div class="col-md-4">
                                            <a class="dropdown-item" href="men.html">T-Shirts</a>
                                            <a class="dropdown-item" href="men.html">Trousers</a>
                                            <a class="dropdown-item" href="men.html">Shirts</a>
                                            <a class="dropdown-item" href="men.html">Suits & Blazers</a>
                                            <a class="dropdown-item" href="men.html">Coats & Jackets</a>
                                            <a class="dropdown-item" href="men.html">Jackets</a>
                                        </div>
                                        <div class="col-md-4">
                                            <a class="dropdown-item" href="men.html">T-Shirts</a>
                                            <a class="dropdown-item" href="men.html">Coats</a>
                                            <a class="dropdown-item" href="men.html">Shirts</a>
                                            <a class="dropdown-item" href="men.html">Suits & Blazers</a>
                                            <a class="dropdown-item" href="men.html">Jackets</a>
                                            <a class="dropdown-item" href="men.html">Trousers</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item dropdown has-mega-menu" style={{ position: 'static' }} >
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Women's clothing</a>
                            <div class="dropdown-menu" style={{ width: '100%' }} >
                                <div class="px-0 container">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <a class="dropdown-item" href="women.html">Dresses</a>
                                            <a class="dropdown-item" href="women.html">T-shirts</a>
                                            <a class="dropdown-item" href="women.html">Skirts</a>
                                            <a class="dropdown-item" href="women.html">Jeans</a>
                                            <a class="dropdown-item" href="women.html">Tunics</a>
                                        </div>
                                        <div class="col-md-4">
                                            <a class="dropdown-item" href="women.html">T-shirts</a>
                                            <a class="dropdown-item" href="women.html">Dresses</a>
                                            <a class="dropdown-item" href="women.html">Tunics</a>
                                            <a class="dropdown-item" href="women.html">Skirts</a>
                                            <a class="dropdown-item" href="women.html">Jeans</a>
                                        </div>
                                        <div class="col-md-4">
                                            <a class="dropdown-item" href="women.html">Dresses</a>
                                            <a class="dropdown-item" href="women.html">T-shirts</a>
                                            <a class="dropdown-item" href="women.html">Skirts</a>
                                            <a class="dropdown-item" href="women.html">Jeans</a>
                                            <a class="dropdown-item" href="women.html">Tunics</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item dropdown has-mega-menu" style={{ position: 'static' }}>
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Kids Clothing</a>
                            <div class="dropdown-menu" style={{ width: '100%' }}>
                                <div class="container">
                                    <div class="row w3_kids  py-3">
                                        <div class="col-md-3 ">
                                            <span class="bg-light">Boy's Clothing</span>
                                            <a class="dropdown-item" href="boys.html">T-Shirts</a>
                                            <a class="dropdown-item" href="boys.html">Coats</a>
                                            <a class="dropdown-item" href="boys.html">Shirts</a>
                                            <a class="dropdown-item" href="boys.html">Suits & Blazers</a>
                                            <a class="dropdown-item" href="boys.html">Jackets</a>
                                            <a class="dropdown-item" href="boys.html">Trousers</a>
                                        </div>
                                        <div class="col-md-3">
                                            <a class="dropdown-item mt-4" href="boys.html">T-Shirts</a>
                                            <a class="dropdown-item" href="boys.html">Coats</a>
                                            <a class="dropdown-item" href="boys.html">Shirts</a>
                                            <a class="dropdown-item" href="boys.html">Suits & Blazers</a>
                                            <a class="dropdown-item" href="boys.html">Jackets</a>
                                            <a class="dropdown-item" href="boys.html">Trousers</a>
                                        </div>
                                        <div class="col-md-3">
                                            <span>Girl's Clothing</span>
                                            <a class="dropdown-item" href="girls.html">T-shirts</a>
                                            <a class="dropdown-item" href="girls.html">Dresses</a>
                                            <a class="dropdown-item" href="girls.html">Tunics</a>
                                            <a class="dropdown-item" href="girls.html">Skirts</a>
                                            <a class="dropdown-item" href="girls.html">Jeans</a>
                                            <a class="dropdown-item" href="girls.html">Midi</a>
                                        </div>
                                        <div class="col-md-3">
                                            <a class="dropdown-item  mt-4" href="girls.html">Tunics</a>
                                            <a class="dropdown-item" href="girls.html">Skirts</a>
                                            <a class="dropdown-item" href="girls.html">T-shirts</a>
                                            <a class="dropdown-item" href="girls.html">Dresses</a>
                                            <a class="dropdown-item" href="girls.html">Jeans</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about.html">About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="blog.html">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
           
        </div>
       
    </header>
    <div class="banner-text">
        <div class="callbacks_container">
            <ul class="rslides" id="slider3">
                <li class="banner">
                    <div class="container">
                        <h3 class="agile_btxt">
                            <span>f</span>ashion
                            <span>h</span>ub
                        </h3>
                        <h4 class="w3_bbot">shop exclusive clothing</h4>
                        <div class="slider-info mt-sm-5">
                            <h4 class="bn_right">
                                <span>w</span>omen's
                                <span>f</span>ashion</h4>
                            <div class="bnr_clip position-relative">
                                <h4>get up to
                                    <span class="px-2">45% </span>
                                </h4>
                                <div class="d-inline-flex flex-column banner-pos position-absolute text-center">
                                    <div class="bg-flex-item">
                                        <span>O</span>
                                    </div>
                                    <div class="bg-flex-item">
                                        <span>F</span>
                                    </div>
                                    <div class="bg-flex-item">
                                        <span>F
                                        </span>
                                    </div>
                                </div>
                                <p class="text-uppercase py-2">on special sale</p>
                                <a class="btn btn-primary mt-3 text-capitalize" href="/product" role="button">Sell Now</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="banner banner2">
                    <div class="container">
                        <h3 class="agile_btxt">
                            <span>f</span>ashion
                            <span>h</span>ub
                        </h3>
                        <h4 class="w3_bbot">shop exclusive clothing</h4>
                        <div class="slider-info mt-sm-5">
                            <h4 class="bn_right">
                                <span>m</span>en's
                                <span>f</span>ashion</h4>
                            <div class="bnr_clip position-relative">
                                <h4>get up to
                                    <span class="px-2">35% </span>
                                </h4>
                                <div class="d-inline-flex flex-column banner-pos position-absolute text-center">
                                    <div class="bg-flex-item">
                                        <span>O</span>
                                    </div>
                                    <div class="bg-flex-item">
                                        <span>F</span>
                                    </div>
                                    <div class="bg-flex-item">
                                        <span>F
                                        </span>
                                    </div>
                                </div>
                                <p class="text-uppercase py-2">on special sale</p>
                                <a class="btn btn-primary mt-3 text-capitalize" href="/product" role="button">Sell Now</a>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="banner banner3">
                    <div class="container">
                        <h3 class="agile_btxt">
                            <span>f</span>ashion
                            <span>h</span>ub
                        </h3>
                        <h4 class="w3_bbot">shop exclusive clothing</h4>
                        <div class="slider-info mt-sm-5">
                            <h4 class="bn_right">
                                <span>k</span>id's
                                <span>f</span>ashion</h4>
                            <div class="bnr_clip position-relative">
                                <h4>get up to
                                    <span class="px-2">45% </span>
                                </h4>
                                <div class="d-inline-flex flex-column banner-pos position-absolute text-center">
                                    <div class="bg-flex-item">
                                        <span>O</span>
                                    </div>
                                    <div class="bg-flex-item">
                                        <span>F</span>
                                    </div>
                                    <div class="bg-flex-item">
                                        <span>F
                                        </span>
                                    </div>
                                </div>
                                <p class="text-uppercase py-2">on special sale</p>
                                <a class="btn btn-primary mt-3 text-capitalize" href="/product" role="button">Sell Now</a>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>

    <div class="agileits-services">
        <div class="no-gutters agileits-services-row row">
            <div class="col-lg-3 col-sm-6 agileits-services-grids p-sm-5 p-3">
                <span class="fas fa-sync-alt p-4"></span>
                <h4 class="mt-2 mb-3">30 days replacement</h4>
            </div>
            <div class="col-lg-3 col-sm-6 agileits-services-grids p-sm-5 p-3">
                <span class="fas fa-gift p-4"></span>
                <h4 class="mt-2 mb-3">Gift Card</h4>
            </div>

            <div class="col-lg-3 col-sm-6 agileits-services-grids p-sm-5 p-3">
                <span class="fas fa-lock p-4"></span>
                <h4 class="mt-2 mb-3">secure payments</h4>
            </div>
            <div class="col-lg-3 col-sm-6 agileits-services-grids p-sm-5 p-3">
                <span class="fas fa-shipping-fast p-4"></span>
                <h4 class="mt-2 mb-3">free shipping</h4>
            </div>
        </div>
    </div>



    <div class="row no-gutters pb-5">
        <div class="col-sm-4">
            <div class="hovereffect">
                <img class="img-fluid" src="./main/images/a1.jpg" alt=""/>
                <div class="overlay">
                    <h5>women's fashion</h5>
                    <a class="info" href="women.html">Sell Now</a>
                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="hovereffect">
                <img class="img-fluid" src="./main/images/a2.jpg" alt=""/>
                <div class="overlay">
                    <h5>men's fashion</h5>
                    <a class="info" href="men.html">Sell Now</a>
                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="hovereffect">
                <img class="img-fluid" src="./main/images/a3.jpg" alt=""/>
                <div class="overlay">
                    <h5>kid's fashion</h5>
                    <a class="info" href="girls.html">Sell Now</a>
                </div>
            </div>
        </div>
    </div>



    <section class="tabs_pro py-md-5 pt-sm-3 pb-5">
        <h5 class="head_agileinfo text-center text-capitalize pb-5">
            <span>s</span>mart clothing</h5>
        <div class="tabs tabs-style-line pt-md-5">
            <nav class="container">
                <ul id="clothing-nav" class="nav nav-tabs tabs-style-line" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" href="#women" id="women-tab" role="tab" data-toggle="tab" aria-controls="women" aria-expanded="true">Women's Fashion</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#men" role="tab" id="men-tab" data-toggle="tab" aria-controls="men">Men's Fashion
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#girl" role="tab" id="girl-tab" data-toggle="tab" aria-controls="girl">Girl's Fashion</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#boy" role="tab" id="boy-tab" data-toggle="tab" aria-controls="boy">Boy's Fashion</a>
                    </li>
                </ul>
            </nav>
            <div id="clothing-nav-content" class="tab-content py-sm-5">
            <div role="tabpanel" class="tab-pane fade show active" id="women" aria-labelledby="women-tab">
                    <div id="owl-demo" class="owl-carousel text-center">
                    <div class="item">
                            
                            <div class="card product-men p-3">
                                <div class="men-thumb-item">
                                    <img src="./main/images/pf1.jpg" alt="img" class="card-img-top"/>
                                    <div class="men-cart-pro">
                                        <div class="inner-men-cart-pro">
                                            <a href="womens.html" class="link-product-add-cart">Quick View</a>
                                        </div>
                                    </div>
                                </div>
                               
                                <div class="card-body  py-3 px-2">
                                    <h5 class="card-title text-capitalize">Self Design Women's Tunic</h5>
                                    <div class="card-text d-flex justify-content-between">
                                        <p class="text-dark font-weight-bold">$28.00</p>
                                        <p class="line-through">$35.99</p>
                                    </div>
                                </div>
                           
                                <div class="card-footer d-flex justify-content-end">
                                    <form action="#" method="post">
                                        <input type="hidden" name="cmd" value="_cart"/>
                                        <input type="hidden" name="add" value="1"/>
                                        <input type="hidden" name="hub_item" value="Self Design Women's Tunic"/>
                                        <input type="hidden" name="amount" value="28.00"/>
                                        <button type="submit" class="hub-cart phub-cart btn">
                                            <i class="fa fa-cart-plus" aria-hidden="true"></i>
                                        </button>
                                        <a href="#" data-toggle="modal" data-target="#myModal1"></a>
                                    </form>
                                </div>
                            </div>
                          
                        </div>

                        </div></div>




                </div>



            </div></section>











{regopen && (
<div class="modal fade" id="myModal_btn" tabindex="-1" role="dialog" aria-labelledby="myModal_btn" aria-hidden="true">
      <div class="agilemodal-dialog modal-dialog" role="document">
          <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title">Register Now</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true" >×</span>
                  </button>
              </div>
              <div class="modal-body pt-3 pb-5 px-sm-5">
                  <div class="row">
                      <div class="col-md-6 mx-auto align-self-center">
                          <img src="./main/images/p3.png" class="img-fluid" alt="login_image" />
                      </div>
                      <div class="col-md-6">
                          <form action="#" method="post">
                              <div class="form-group">
                                  <label for="recipient-name1" class="col-form-label">Your Name</label>
                                  <input type="text" class="form-control" placeholder=" " name="Name" id="recipient-name1" required=""/>
                              </div>
                              <div class="form-group">
                                  <label for="recipient-email" class="col-form-label">Email</label>
                                  <input type="email" class="form-control" placeholder=" " name="Email" id="recipient-email" required=""/>
                              </div>
                              <div class="form-group">
                                  <label for="password1" class="col-form-label">Password</label>
                                  <input type="password" class="form-control" placeholder=" " name="Password" id="password1" required=""/>
                              </div>
                              <div class="form-group">
                                  <label for="password2" class="col-form-label">Confirm Password</label>
                                  <input type="password" class="form-control" placeholder=" " name="Confirm Password" id="password2" required=""/>
                              </div>
                              <div class="sub-w3l">
                                  <div class="sub-agile">
                                      <input type="checkbox" id="brand2" value=""/>
                                      <label for="brand2" class="mb-3">
                                          <span></span>I Accept to the Terms & Conditions</label>
                                  </div>
                              </div>
                              <div class="right-w3l">
                                  <input type="submit" class="form-control" value="Register"/>
                              </div>
                          </form>
                          <p class="text-center mt-3">Already a member?
                              <a href="#" data-toggle="modal" data-target="#exampleModal1" class="text-dark login_btn" onClick={handlereg} >
                                  Login Now</a>
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>

)}
{logopen && (

  <div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModal1" aria-hidden="true">
        <div class="agilemodal-dialog modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body  pt-3 pb-5 px-sm-5">
                    <div class="row">
                        <div class="col-md-6 align-self-center">
                            <img src="./main/images/p3.png" class="img-fluid" alt="login_image" />
                        </div>
                        <div class="col-md-6">
                            <form action="#" method="post">
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label">Your Name</label>
                                    <input type="text" class="form-control" placeholder=" " name="Name" id="recipient-name" required=""/>
                                </div>
                                <div class="form-group">
                                    <label class="col-form-label">Password</label>
                                    <input type="password" class="form-control" placeholder=" " name="Password" required=""/>
                                </div>
                                <div class="right-w3l">
                                    <input type="submit" class="form-control" value="Login"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
)}
</>


);

}
export default Extra;