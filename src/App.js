import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import LoginSignUp from './Pages/LoginSignUp';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/homme" element={<ShopCategory category="homme"/>}/>
        <Route path="/femme" element={<ShopCategory category="femme"/>}/>
        <Route path="/enfant" element={<ShopCategory category="enfant"/>}/>
        <Route path="/product" element={<Product/>}>
        <Route path=":productId" element={<Product/>}/>
        </Route>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/login" element={<LoginSignUp/>}/>
      </Routes>
    </BrowserRouter>  
    </div>
  );
}

export default App;
