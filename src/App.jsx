
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/home/home.jsx'
import Cart from './pages/cart/cart.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {

  return(
   
     <BrowserRouter>
            <Routes>
     
                  <Route path='/' element= { <Home /> } />
                  <Route path='/cart' element= { <Cart />} />
                  
            
            </Routes>
     
    </BrowserRouter>
   
   )
    

}

export default App
