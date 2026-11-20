import BuyBox from "../components/BuyBox";
import GalleryProduct from "../components/GalleryProduct";
import ProductDetails from "../components/ProductDetails";

const Product = () => {
    return ( 
        <product className="flex flex-column " style={{backgroundColor: '#F5F5F5' }}>
     
            <div className="flex flex-row gap-2 ml-3 mr-8" >
               <GalleryProduct/>
               <BuyBox/>
             </div>
            

               <div className='flex flex-column  justify-content-center  m-8 p-3' >
                    <h2 className='text-left' style={{ color: '#474747' }}>Produtos recomendados</h2>
                    <div>
                       <ProductDetails valor={4} /> 
                    </div>
               </div>
        </product>
     );
}
 
export default Product;