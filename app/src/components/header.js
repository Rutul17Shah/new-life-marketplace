import React from 'react'
import swal from 'sweetalert';

function Header (){

    let user=JSON.parse(localStorage.getItem("Login"));
    
    function logout()
    {
    localStorage.clear();
    swal({
        title: "See you soon..!",
        text: "You are logged out!",
        icon: "success",
        button: "Aww yiss!",
      }).then(() => {
        window.location = "/";
    });
    }
 
    function Value () {
 
        var x = document.getElementById("select").value;
        window.location.replace("http://localhost:3000/details?name="+x);
       
      };

    function loginf (){

        swal({
            title: "Please Login First..!!",
            icon: "error",
          }).then(() => {
            window.location = "/login";
          });
    }  

    return(
        <>
    <header>
        <div class="container">
       
            <nav class="top_nav d-flex pt-3 pb-2">
               
                <h1>
                    <a class="navbar-brand" href="/">nlf
                    </a>
                </h1>
             
                <div class="w3ls_right_nav ml-auto d-flex">
                 
                { localStorage.getItem("Login") !=null?
                         <>
                        <select class="form-control input-lg my-sm-2" name="category" id="select">
                            <option disabled selected>Sell Products</option>
                            <optgroup label="Hardware" >
                                <option value="monitor">Monitor</option>
                                <option value="mouse">Mouse</option>
                                <option value="keyboard">Keyboard</option>
                                <option value="headphone">Headphone</option>
                                <option value="router">Router</option>
                            </optgroup>
                            <optgroup label="Laptop Part's">
                                <option value="ssd">SSD</option>
                                <option value="hdd">HDD</option>
                                <option value="ram">Rams</option>
                                <option value="graphic card">Graphic card</option>
                                <option value="motherboard">Motherboard</option>
                            </optgroup>
                        </select>
                   
                        <input class="btn btn-outline-secondary  ml-2 my-sm-2" type="submit" onClick={()=>Value()} value="Search"/>
                       
                        </>:<>
                        <select class="form-control input-lg my-sm-2" name="category" id="select">
                            <option >Sell Products</option>
                            <optgroup label="Hardware" >
                                <option value="monitor">Monitor</option>
                                <option value="mouse">Mouse</option>
                                <option value="keyboard">Keyboard</option>
                                <option value="headphone">Headphone</option>
                                <option value="router">Router</option>
                            </optgroup>
                            <optgroup label="Laptop Part's">
                                <option value="ssd">SSD</option>
                                <option value="hdd">HDD</option>
                                <option value="ram">Rams</option>
                                <option value="graphic card">Graphic card</option>
                                <option value="motherboard">Motherboard</option>
                            </optgroup>
                        </select>
                   
                        <input class="btn btn-outline-secondary  ml-2 my-sm-2" type="submit" onClick={loginf}  value="Search"/>
                       
                        
                        </>}
			           
                    
                    
                    <div class="nav-icon d-flex">
                    
                    { localStorage.getItem("Login") !=null?
                        <>   
                        <h6 class="text-dark" style={{  left: '690px',display: 'inline-flex',position: 'absolute', top: '30px', 'font-size': 'larger', 'font-family': 'cursive' }}> Welcome : {user.name}</h6> 
                        <a class="text-dark login_btn align-self-center mx-3 mt-2 mb-0" href="#" onClick={logout}>
                        <i class="fas fa-sign-out-alt" title="Log Out"></i>
                        </a>
                                      
                                    <button class="btn top_hub_cart mt-2 mx-3" title="Ticket">
                                        <a href="/ticket"><i class="fas fa-shopping-bag"></i></a>
                                    </button> 


                                    <button class="btn top_hub_cart mt-2" title="Invoice">
                                        <a href="/invoice">
                                        <i class="fas fa-file-alt"></i>
                                            </a>
                                        
                                    </button>                               
                   
                        <div>
                            <a class="text-dark" href="/profile">
                                <span class="ml-3 pt-3 mt-1 d-flex" > <i class="fas fa-cogs" title="Edit Profile"></i> </span>
                            </a>
                        </div>
                        
                        </>
                        :
                        <>  
                        <a class="text-dark login_btn align-self-center mx-3" href="/login">

                        <i class="fas fa-sign-in-alt" title="Sign In"></i>
                       </a>
                       <a class="text-dark login_btn align-self-center mx-3" href="/register" >
                       <i class="fas fa-users" title="Register"></i>
                       </a> 
                        </>
                    }


                        
                      
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
                            <a class="nav-link " href="/">Home
                                <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/product">Computer Product's</a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href="/about">About us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blog">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact">Contact us</a>
                        </li>
                    </ul>
                </div>
            </nav>
        
        </div>
        
    </header>
    
        </>


    );

};
export default Header;




/*

    function details (){
        if(localStorage.getItem("Login") !=null )
        {
            window.location = "/details"
        }
        else{
            alert('Please login first');
            window.location = "/login";
            }
        
        }




        css of name


    left: 715px;
    display: inline-flex;
    flex-direction: row-reverse;
    position: absolute;
    top: 30px;
    font-size: larger;
    font-family: cursive;






        
    function Search (){

        var a = document.getElementById("select").value;

        Axios.post('http://localhost:1337/api/extra',
        {a:a }).then((response)=>{
        if(response.data.message)
        {           
        swal("Success!","Detail Entered", "success").then(() => {
            window.location="/details";
        });
        }
        else{
        swal('something went wrong').then(() => {
            window.location = "/";
        });
        }
        
        }) 
    }

                const[list,setlist]=useState([]);
                useEffect(()=>{
                Axios.get('http://localhost:1337/api/extra2').then((response)=>{
                console.log(response.data);
                setlist(response.data);
                });
                },[]);
*/