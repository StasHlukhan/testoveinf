import React from 'react'
import { Route,Routes} from "react-router-dom";
import ProductIdPage from '../components/Products/ProductIdPage'
import ProductsPage from '../components/Products/ProductsPage'


function AppRouter() {
 

  
  return (
    
    
    <Routes>
        
        <Route  path='/' element={<ProductsPage></ProductsPage>}></Route>
        <Route  path='/product/:id' element={<ProductIdPage></ProductIdPage>}></Route>
        
    </Routes>
   
    
    
    
  )
}

export default AppRouter