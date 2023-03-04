import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { IsLoggedIn } from './components/IsLoggedIn/IsLoggedIn';
import { Account } from './pages/Account/Account';
import { Cart } from './pages/Cart/Cart';
import { DetailProduct } from './pages/DetailProduct/DetailProduct';
import { Favorite } from './pages/Favorite/Favorite';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { SuccessCheckout } from './pages/SuccessCheckout/SuccessCheckout';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<IsLoggedIn/>}>
          <Route path='/' element={<Home />} />
          <Route path='/detail-product/:id' element={<DetailProduct />} />
          <Route path='/favorite' element={<Favorite/>}/>
          <Route path='/cart' element={<Cart />} />
          <Route path='/account/:username' element={<Account/>}/>
          <Route path='/checkout/:username' element={<SuccessCheckout/>}/>
          </Route>
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
