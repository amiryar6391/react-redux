import { useContext, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";



function Productincart(props){
    const dispatch=useDispatch()
    let [count , setCount]=useState(1)
    let [newprice , setNewprice]=useState(props.price)

    let clickAddhandler = () =>{
        setCount(count + 1)
        setNewprice(newprice=newprice + props.price)

    }


    let clickdelethandler = () =>{
        dispatch({type:'DELETE_PRODUCTS' , props})
    }

    
    let clickDechandler = () =>{
        setCount(count - 1)
        setNewprice(newprice=newprice - props.price)
    }



    return(
        <div className="cart-main-items">
        <div className="cart-main-items-img">
            <img src={props.image} className="img-fluid" />
        </div>
        <div className="cart-main-items-btn">
            {count > 1 ? (<button onClick={clickDechandler}>-</button>) : 
            (<button onClick={clickdelethandler}><RiDeleteBin6Line /></button>)}
            
            <span>{count}</span>
            <button onClick={clickAddhandler}>+</button>
        </div>
        <div className="cart-main-items-item">
            <p>{props.name}</p>
            <p>price:{newprice.toLocaleString()}</p>
        </div>
    </div>

    )
}
export default Productincart