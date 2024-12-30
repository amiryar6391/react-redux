import { Link } from "react-router-dom"
import { GiShoppingCart } from "react-icons/gi";
import './mynavbar.css'
import { useSelector } from "react-redux";




function Mynavbar(){
    const numshow=useSelector(store => store.numshow)
  
    return(
        <nav>
            <div className="mainnav">
                <span ><Link to='/' className="homenav">Home</Link></span>
                <p>
                <span><Link to='/cart'><GiShoppingCart size='30px' color="#000"/></Link></span>
                {numshow > 0 && <span className="cartnum">{numshow}</span>}
                </p>
            </div>
        </nav>

    )
}

export default Mynavbar