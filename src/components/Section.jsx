import ProductListing from "./ProductListing";

const Section = () => {
    return ( 
        <section className='flex justify-content-center align-items-center'>
            <div className='flex flex-column justify-content-center align-items-center' style={{ padding: '20px' }}>
                <h2 className='text-center' style={{ color: '#474747' }}>Coleções em destaque</h2>
                <div className=' flex  gap-4 mt-4 mb-4 ' style={{ padding: '20px' }}>
                 <img src="public/collection-1.png" alt="Coleção 1"  className="border-round-sm "/>
                <img src="public/collection-2.png" alt="Coleção 2" className="border-round-sm "/>
                <img src="public/collection-3.png" alt="Coleção 3" className="border-round-sm "/>
                </div>   
                <div className='flex flex-column  justify-content-center  m-8' style={{ padding: '20px' }}>
                    <h2 className='text-left' style={{ color: '#474747' }}>Produtos em alta</h2>
                    <div>
                       <ProductListing valor={8} /> 
                    </div>
                    
               
                </div> 
            </div>
           
        </section>
        
     );
}
 
export default Section;