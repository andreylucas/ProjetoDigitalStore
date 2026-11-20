import ProductListing from "../components/ProductListing";
import { useState } from "react";

import FilterGroup from "../components/FilterGroup";
import ProductOrder from "../components/ProductOrder";



const Products = () => {
   
    return (  
        <products className="flex flex-row gap-2 " style={{backgroundColor: '#F5F5F5' }}>
        <div className="flex flex-column gap-2 mr-8 ml-8 mt-5">
        <ProductOrder/>   
        <FilterGroup />
        </div>
       <div>
        <ProductListing valor={16}/>
       </div>
        
        </products>
    );
}
 
export default Products;