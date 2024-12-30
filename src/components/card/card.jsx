import './card.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

function Mycard(props){

    const dispatch=useDispatch();
    let [prev , setPrev]=useState(true)
    

  
      let  clickHandler = () => {
        if(prev){
            dispatch({type:'ADD_TO_CART' , props})
            setPrev(false)

      }
       
    }


    return(
        <div className="cardcontainer">
            <img src={props.image}/>
            <div className="cardbody">
                <p className="fs-5">{props.name}</p>
                <p className="price">Price:{props.price.toLocaleString()}</p>
            </div>
            <button onClick={clickHandler} className="btn btn-primary">Add to cart</button>
        </div>

    )
}
export default Mycard