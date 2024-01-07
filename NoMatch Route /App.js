import {Routes , Route} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import OrderConfirm from './components/OrderConfirm';
import NoMatch from './components/NoMatch';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
          <Route path='/' element={ <Home /> } />
          <Route path='about' element={ <About /> } />
          <Route path='order-page' element={ <OrderConfirm />} />
  
          <Route path='*' element={<NoMatch />} />                                                      <------------------------------------------------------------------------

      </Routes>
    </div>
  );
}

export default App;
