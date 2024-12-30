import { useState } from "react"
import Mynavbar from "../../components/navbar/mynavbar.jsx"
import './home.css'
import db from "../../db"
import Mycard from "../../components/card/card.jsx"
import Footer from "../../components/footer/footer.jsx"




function Home(){
    let [carditems , setCarditems]=useState(db)
    
    
    return(

        <>
           <Mynavbar />
            <div className="main-card-container">
                <div className="card-row row-cols-xl-4 row-cols-lg-3 roe-cols-md-2 row-cols-1" >
                    {carditems.map((item)=>(
                    <div key={item.id}>
                        <Mycard {...item} />
                    </div>
                    ))}
                </div>
            </div>
           <Footer />
           </>
        
        
        
    
     )
}
export default Home

