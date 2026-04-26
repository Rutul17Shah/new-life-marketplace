import React from 'react'

function Sidebar() {

  let user=JSON.parse(localStorage.getItem("Admin"));
  var admin_name=user.Name;


  return (
    <>
    <body class>
        <nav class="sidebar sidebar-offcanvas" id="sidebar">
  <ul class="nav">
    <li class="nav-item nav-profile">
      <a href="/user" class="nav-link">
        <div class="nav-profile-image">
          <img src="./res/images/faces/face1.jpg" alt="profile"/>
          <span class="login-status online"></span>
          
        </div>
        <div class="nav-profile-text d-flex flex-column">
          <span class="font-weight-bold mb-2" >{admin_name} </span>
          <span class="text-secondary text-small">Project Manager</span>
        </div>
        <i class="mdi mdi-bookmark-check text-success nav-profile-badge"  ></i>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/dash">
        <span class="menu-title">Dashboard</span>
        <i class="mdi mdi-home menu-icon"></i>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-bs-toggle="collapse" href="/products" aria-expanded="false" aria-controls="ui-basic">
        <span class="menu-title">Products</span>
        <i class="mdi mdi-cart-outline menu-icon"></i>
      </a>
   
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/users">
        <span class="menu-title">Users</span>
        <i class="mdi mdi-account-key menu-icon"></i>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/orders">
        <span class="menu-title">Orders</span>
        <i class="mdi mdi-calendar-multiple-check menu-icon"></i>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/report">
        <span class="menu-title">Report</span>
        <i class="mdi mdi-email menu-icon"></i>
      </a>
    </li>



  </ul>
</nav>
</body>
    </>
  )
}

export default Sidebar;


/* 

mdi mdi-server




    <li class="nav-item sidebar-actions">
              <span class="nav-link">
                <div class="border-bottom">
                  <h6 class="font-weight-normal mb-3">Report </h6>
                  
                </div>
                <div class="mt-3">
                  <div class="border-bottom">
                    <p class="text-secondary">Orders</p>
                    <button type="button" class="btn btn-outline-secondary btn-md">Recieved</button><br /><br />
                    <button type="button" class="btn btn-outline-secondary btn-md">Not Recieved</button><br /><br />
                  </div>
                </div>
                <div class="mt-3">
                  <div class="border-bottom">
                    <p class="text-secondary">Products</p>
                    <button type="button" class="btn btn-outline-secondary btn-md">Accepted</button><br /><br />
                  </div>
                </div>
                <div class="mt-3">
                  <div class="border-bottom">
                    <p class="text-secondary">Payment</p>
                    <button type="button" class="btn btn-outline-secondary btn-md">Completed</button><br /><br />
                  </div>
                </div>
                <div class="border-bottom"></div>
              </span>
            </li>

*/