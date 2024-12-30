import { legacy_createStore } from "redux";



const init={numshow:0 , productsitem:[]}
const reducer = (state=init , action) =>{
    switch(action.type){
        case 'ADD_TO_CART':{
            let newstate ={...state}
            newstate.productsitem.push({...action.props})
            newstate.numshow += 1
            return newstate

        }
        case 'INCREASE_PRODUCTS' :{

        }
        case 'DECREASE_PRODUCTS' :{

        }
        case 'DELETE_PRODUCTS' :{
            let newstate={...state}
            newstate.productsitem=newstate.productsitem.filter(del => del.id != action.props.id )
            newstate.numshow -= 1
            return newstate


        }
        default :{
           return state
        }
     }

}

const store = legacy_createStore(reducer)

export default store