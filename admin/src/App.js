
import './App.css';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import EditUser from './pages/edituser/EditUser';
import UserList from './pages/userlist/UserList';
import NewUser from './pages/newuser/NewUser';
import { Route, Routes } from 'react-router-dom';
import ProductList from './pages/productlist/ProductList';
import Product from './pages/product/Product';
import NewProduct from './pages/newproduct/NewProduct';

function App() {
  return (
    <div className="app__container">
      <Navbar />
      <div className='app__subcontainer'>
        <Sidebar />
        
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/users" element={ <UserList /> } />
          <Route path="/edituser/:id" element={ <EditUser /> } />
          <Route path="/user/create" element={ <NewUser /> } />
          <Route path="/product/create" element={ <NewProduct /> } />
          <Route path="/products" element={ <ProductList /> } />
          <Route path="/editproduct/:id" element={ <Product /> } />
        </Routes>
        
      </div>
    </div>
  );
}

export default App;
