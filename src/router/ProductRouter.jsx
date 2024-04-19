
import { Route,Routes} from "react-router-dom"
import { ProductPage } from "../products"

export const ProductRouter=() =>{
    return(
        <Routes>
            <Route  path="/" element={ <ProductPage/> }/>
        </Routes>
    )
}