import {Routes , Route} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import OrderConfirm from './components/OrderConfirm';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='about' element={ <About /> } />
          <Route path='order-page' element={ <OrderConfirm />} />
      </Routes>
    </div>
  );
}

export default App;
