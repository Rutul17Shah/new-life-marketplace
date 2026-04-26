import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import About from './pages/about';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Login from './pages/login';
import Register from './pages/register';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './pages/home';
import Product from './pages/product';
import Details from './pages/detail1';
import Ticket from './pages/ticket';
import Forget from './pages/forget';
import Profile from './pages/profile';
import Invoice from './pages/invoice';
import Invoice2 from './pages/invoice2';
//import { ColorRing } from 'react-loader-spinner';

function App() {
  return (
    <>
      <Router>
      
      <Header/>

      <Routes>

      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/details' element={<Details/>}/>
      <Route exact path='/product' element={<Product/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/about' element={<About/>}/>
      <Route exact path='/blog' element={<Blog/>}/>
      <Route exact path='/contact' element={<Contact/>}/>
      <Route exact path='/ticket' element={<Ticket/>}/>
      <Route exact path='/forget' element={<Forget/>}/>
      <Route exact path='/profile' element={<Profile/>}/>
      <Route exact path='/invoice' element={<Invoice/>}/>
      <Route exact path='/invoice2' element={<Invoice2/>}/>

      </Routes>

      <Footer/>

      </Router>
    </>
    
  );
}

export default App;
