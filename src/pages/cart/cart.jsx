import Mynavbar from '../../components/navbar/mynavbar.jsx';
import './cart.css'
import Productincart from '../../components/productincart/productincart.jsx';
import { useSelector } from 'react-redux';




function Cart(){
    const productsitem=useSelector( store => store.productsitem )
    

    return(
        <>
            <Mynavbar />
            <div className="cart-main-container">
                {(productsitem.length) ?
                productsitem.map(products => <Productincart {...products} />) :
                <p>The shopping cart is empty.</p> }
                
            </div> 
             
        </>
    )
}
export default Cart