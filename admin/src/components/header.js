import React from 'react'
import swal from 'sweetalert';

function Header() {

  let user=JSON.parse(localStorage.getItem("Admin"));
  var admin_name=user.Name;

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


  return (
    
 <>

    <nav class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
  <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
    <a class="navbar-brand brand-logo" href="/dash"><i class='mdi mdi-database'>  </i> <b style={{"fontFamily":"Lucida Sans"}}>  NLF Admin   </b></a>
  </div>
  
  <div class="navbar-menu-wrapper d-flex align-items-stretch">
    <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
      <span class="mdi mdi-menu"></span>
    </button>


    <ul class="navbar-nav navbar-nav-right">
      <li class="nav-item nav-profile dropdown">
        <a class="nav-link " id="profileDropdown" href="#" data-bs-toggle="dropdown" aria-expanded="false">
          <div class="nav-profile-img">
            <img src="./res/images/faces/face1.jpg" alt="image"/>
            <span class="availability-status online"></span>
          </div>
          <div class="nav-profile-text">
            <p class="mb-0 text-black" href="/user">{admin_name}</p>
          </div>
        </a>
      </li>
  
      <li class="nav-item d-none d-lg-block full-screen-link">
              <a class="nav-link">
                <i class="mdi mdi-fullscreen" id="fullscreen-button"></i>
              </a>
      </li>


      <li class="nav-item nav-logout d-none d-lg-block">
        <a class="nav-link" href="#" onClick={logout}>
          <i class="mdi mdi-power"></i>
        </a>
      </li>
     
      <li class="nav-item nav-settings d-none d-lg-block">
        <a class="nav-link" href="#">
          <i class="mdi mdi-format-line-spacing"></i>
        </a>
      </li>
    
    </ul>
    <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
      <span class="mdi mdi-menu"></span>
    </button>
  </div>
</nav>
 </>
  )
}

export default Header;
