import { Button } from "primereact/button";
import ProductOptions from "./ProductOptions";

const BuyBox = () => {
const star = <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.15102 1.2306L10.0003 5.65038L14.7346 6.06108C15.063 6.08972 15.1966 6.50343 14.9473 6.72122L11.3563 9.86292L12.4324 14.5367C12.507 14.8614 12.1585 15.1169 11.8764 14.9443L7.80774 12.4666L3.73906 14.9443C3.45622 15.1162 3.10846 14.8607 3.18309 14.5367L4.25921 9.86292L0.667401 6.72047C0.418146 6.50268 0.550983 6.08896 0.880089 6.06033L5.61444 5.64962L7.46371 1.2306C7.59206 0.923134 8.02266 0.923134 8.15102 1.2306Z" stroke="gold" fill="gold"/>
                        </svg>;
const listStar = [];

 for (let i = 0; i < 4; i++) {
    listStar.push(star);
 }

    return (         
        <buybox className='buy-box flex flex-column gap-2 m-5 mr-8'>
           <h2 className='text-left' style={{ color: '#474747' }}>Tênis Air Jordan 1 Mid Masculino</h2>
            
             <span className="text-left">
                Casual | Nike | REF: 38416711
             </span>

             <div className="flex align-items-center gap-2">
                 <div className="flex align-items-center">
                    <span>{listStar.map((star, index) => (
                        <span key={index}>{star}</span>
                        
                    ))}</span>
                    <span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.15102 1.2306L10.0003 5.65038L14.7346 6.06108C15.063 6.08972 15.1966 6.50343 14.9473 6.72122L11.3563 9.86292L12.4324 14.5367C12.507 14.8614 12.1585 15.1169 11.8764 14.9443L7.80774 12.4666L3.73906 14.9443C3.45622 15.1162 3.10846 14.8607 3.18309 14.5367L4.25921 9.86292L0.667401 6.72047C0.418146 6.50268 0.550983 6.08896 0.880089 6.06033L5.61444 5.64962L7.46371 1.2306C7.59206 0.923134 8.02266 0.923134 8.15102 1.2306Z" stroke="gold" />
                        </svg>
                    </span>                                    
                    <span>4.1</span>          
                </div>        
                <span >90 avaliações</span>        
            </div>

            <div className=" flex align-items-baseline gap-2 my-2">
               
                  <>
                 <span style={{fontSize: '16px',
                    color: 'var(--light-gray-2)',
                    textDecoration: 'line-through',
                    }}>
                     R$ 759,90
                 </span>
                    <span style={{fontSize: '32px',
                        fontWeight: '700',
                         color: 'var(--dark-gray-2)'}}>
                    R$ 659,90
                    </span>
                    </>
             </div>

        <div className="">
          <span className=" block mb-1 font-bold" style={{ color: '#474747' }}>
            Descrição do produto
          </span>
          <p className=" m-0">Lorem ipsum, dolor sit amet consectetur adipisicing 
            elit. Magnam reiciendis soluta quas vero perferendis sapiente aliquam 
            velit suscipit assumenda, quisquam repellendus fugiat iusto ea excepturi 
            consequuntur ut, dicta deleniti eveniet!</p>
        </div>

        <div>
            <h4 style={{ color: '#474747' }}>Tamanho:</h4>
            <ProductOptions 
                options={['39', '40', '41', '42', '43']} 
                shape="square" 
                type="text" 
            />

            <h4 style={{ color: '#474747' }}>Cor:</h4>
            <ProductOptions 
                options={['#000000', '#FF0000', '#13aa05', '#ffffff']} 
                shape="circle" 
                type="color" 
            />
        </div>

        <div className=" mt-3">
            <Button label="Comprar" severity="warning" raised style={{ fontSize: '16px' }} />
        </div>

        </buybox>
     );
} 
export default BuyBox;