import {Routes , Route} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import OrderConfirm from './components/OrderConfirm';
import NoMatch from './components/NoMatch';
import Product from './components/Product';
import NewProduct from './components/NewProduct';
import FeaturedProduct from './components/FeaturedProduct';
import User from './components/User';
import UserDetail from './components/UserDetail';
import Admin from './components/Admin';
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='about' element={ <About /> } />
          <Route path='order-page' element={ <OrderConfirm />} />
          <Route path='*' element={<NoMatch />} />

          <Route path='/product' element={<Product />}>

          <Route index element={<NewProduct />}/>

          <Route path='features' element={<FeaturedProduct />} />
          <Route path='new' element={<NewProduct />} />

          </Route>
         
          {/* In Dynaminc Route react router will always tries to match more specific before matching any dynamic route. */}
          <Route path='/user' element={<User/>}>
            <Route path=':id' element={<UserDetail />} />
            <Route path='admin' element={<Admin/>} />
          </Route>
          
          {/*Dynaminc Route*/}
            
          {/* <Route path='user/:id' element={<UserDetail />} />

          <Route path='user/admin' element={<Admin/>} /> */}

          {/* <Route path='user/1' element={<UserDetail />} />
          <Route path='user/2' element={<UserDetail />} />
          <Route path='user/3' element={<UserDetail />} /> */}

      </Routes>
    </div>
  );
}

export default App;
