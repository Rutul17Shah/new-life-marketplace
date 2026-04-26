import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Sidebar from './components/sidebar';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Products from './pages/products';
import Users from './pages/users';
import Orders from './pages/order';
import Form from './pages/form';
import Manage from './pages/manage';
import Profile from './pages/user';
import Forget from './pages/forget';
import Report from './pages/report';

function App() {

  return (
    <>
    { localStorage.getItem("Admin") !=null?
    <>
    <div class="container-scroller">
    <Router>
    
    <Header/>
    <div class="container-fluid page-body-wrapper">
    <Sidebar/>
    
    <div class="main-panel">
    <Routes>

    <Route exact path='/dash' element={<Dashboard/>}/>
    <Route exact path='/products' element={<Products/>}/>
    <Route exact path='/users' element={<Users/>}/>
    <Route exact path='/orders' element={<Orders/>}/>
    <Route exact path='/form' element={<Form/>}/>
    <Route exact path='/manage' element={<Manage/>}/>
    <Route exact path='/user' element={<Profile/>}/>
    <Route exact path='/report' element={<Report/>}/>

    </Routes>
    <Footer/></div></div>
    </Router> </div>
    </>
    :
    <>
    <Router>
    
    <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/forget' element={<Forget/>}/>
    </Routes>
   
    </Router>
    </>
    }


   
    </>
    );
}

export default App;
